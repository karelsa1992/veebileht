# =====================================================================
#  ABIPROGRAMM: loob igale seadmele ja nõuandele oma lehe
#
#  Tulemus: kasa.ee/lauaarvutid, kasa.ee/nouanded/vesi jne.
#  Mallid on seade.html ja nouanne.html. Andmed (id, nimi, lühike tekst)
#  võetakse failist js/tekstid.js.
#
#  Käivita uuesti, kui muudad seade.html-i või nouanne.html-i või lisad
#  tekstid.js-i uue seadme või nõuande. Käivita ka pärast iga muudatust
#  failides css/stiil.css, js/leht.js või js/tekstid.js (uuendab versiooninumbrid):
#      python3 _tee-lehed.py
#
#  (Alakriips nime alguses tähendab, et GitHub seda faili internetti ei pane.)
# =====================================================================

import html
import re
from pathlib import Path

KAUST = Path(__file__).parent
AADRESS = "https://kasa.ee"
NIMI = "Karel Saega"


def eesti_tekst(plokk, vali):
    """Leiab plokist rea  vali: { et: "..."  või  vali: {\n et: "..."."""
    m = re.search(vali + r':\s*\{\s*et:\s*"((?:[^"\\]|\\.)*)"', plokk)
    return m.group(1).replace('\\"', '"') if m else ""


def kirjed(tekst, massiiv):
    """Tagastab massiivi (nt SEADMED) kirjed: [(id, kirje tekst), ...]."""
    algus = tekst.index("const " + massiiv + " = [")
    lopp = tekst.index("\n];", algus)
    osa = tekst[algus:lopp]
    tukid = re.split(r'\n  \{\n    id: "', osa)[1:]
    return [(t.split('"', 1)[0], t) for t in tukid]


def tee_leht(mall, kirje_id, pealkiri, kirjeldus, url):
    e = lambda x: html.escape(x, quote=True)
    s = mall
    s = s.replace("<!doctype html>", "<!doctype html>\n<!-- Loodud automaatselt failist "
                  "_tee-lehed.py. Ära muuda seda faili otse – muuda malli ja käivita programm uuesti. -->", 1)
    s = s.replace("<body>", f'<body data-id="{e(kirje_id)}">', 1)
    s = re.sub(r"<title>.*?</title>", f"<title>{e(pealkiri)} – {NIMI}</title>", s, count=1)
    s = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + e(kirjeldus), s, count=1)
    s = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + e(pealkiri + " – " + NIMI), s, count=1)
    s = re.sub(r'(<meta property="og:description" content=")[^"]*', lambda m: m.group(1) + e(kirjeldus), s, count=1)
    s = s.replace('<meta name="twitter:card" content="summary_large_image">',
                  '<meta name="twitter:card" content="summary_large_image">\n'
                  f'  <meta property="og:url" content="{url}">\n'
                  f'  <link rel="canonical" href="{url}">', 1)
    return s


# Kujundus- ja programmifailidele versiooninumber (nt stiil.css?v=3f9a2c1b).
# Kui fail muutub, muutub number ja brauser laeb uue faili, mitte vana mälust.
import hashlib
for fail in ["css/stiil.css", "js/leht.js", "js/tekstid.js"]:
    versioon = hashlib.md5((KAUST / fail).read_bytes()).hexdigest()[:8]
    for leht in ["index.html", "seade.html", "nouanne.html", "privaatsus.html", "404.html"]:
        tee = KAUST / leht
        sisu = tee.read_text(encoding="utf-8")
        uus = re.sub(r'"/' + re.escape(fail) + r'(\?v=\w+)?"', f'"/{fail}?v={versioon}"', sisu)
        if uus != sisu:
            tee.write_text(uus, encoding="utf-8")

tekstid = (KAUST / "js" / "tekstid.js").read_text(encoding="utf-8")
seadme_mall = (KAUST / "seade.html").read_text(encoding="utf-8")
nouande_mall = (KAUST / "nouanne.html").read_text(encoding="utf-8")
keelatud = {"index", "seade", "nouanne", "privaatsus", "nouanded"}
aadressid = []

for kirje_id, plokk in kirjed(tekstid, "SEADMED"):
    assert kirje_id not in keelatud, f"Seadme id '{kirje_id}' on juba muuks kasutusel"
    nimi = eesti_tekst(plokk, "nimi")
    url = f"{AADRESS}/{kirje_id}"
    leht = tee_leht(seadme_mall, kirje_id, nimi, eesti_tekst(plokk, "lyhike") + " Kodukülastus Tartu linnas.", url)
    # Seadme pilt hakkab laadima kohe lehe avamisel, mitte alles siis, kui programm selle lehele paneb
    if (KAUST / "img" / "seadmed" / f"{kirje_id}.webp").exists():
        leht = leht.replace('  <link rel="stylesheet"', f'  <link rel="preload" href="/img/seadmed/{kirje_id}.webp" as="image" fetchpriority="high">\n  <link rel="stylesheet"', 1)
    (KAUST / f"{kirje_id}.html").write_text(leht, encoding="utf-8")
    aadressid.append(url)

(KAUST / "nouanded").mkdir(exist_ok=True)
for kirje_id, plokk in kirjed(tekstid, "NOUANDED"):
    url = f"{AADRESS}/nouanded/{kirje_id}"
    leht = tee_leht(nouande_mall, kirje_id, eesti_tekst(plokk, "pealkiri"), eesti_tekst(plokk, "lyhike"), url)
    (KAUST / "nouanded" / f"{kirje_id}.html").write_text(leht, encoding="utf-8")
    aadressid.append(url)

# Google'i jaoks kõigi lehtede nimekiri
read = [f"  <url><loc>{u}</loc></url>" for u in [AADRESS + "/"] + aadressid + [AADRESS + "/privaatsus"]]
(KAUST / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(read) + "\n</urlset>\n",
    encoding="utf-8")

print("Loodud lehed:")
for u in aadressid:
    print("  " + u)
