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
#  Lõpuks avab programm iga lehe nähtamatult Chrome'is ja kirjutab eestikeelse
#  sisu (tekstid, hinnad, KKK jne) otse lehe faili. Nii näeb Google sisu kohe,
#  ilma lehe programmi käivitamata. Kui Chrome'i pole, jäetakse see samm vahele.
#
#  (Alakriips nime alguses tähendab, et GitHub seda faili internetti ei pane.)
# =====================================================================

import html
import json
import re
import shutil
import subprocess
import tempfile
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

KAUST = Path(__file__).parent
AADRESS = "https://kasa.ee"
NIMI = "KASA"  # lehe nimi pealkirjades ja lingi eelvaates (isikunime ei näidata)


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


def json_ld(andmed):
    """Google'ile mõeldud info plokk lehe päisesse."""
    tekst = json.dumps(andmed, ensure_ascii=False, indent=2).replace("</", "<\\/")
    return ('<script type="application/ld+json">\n' + "\n".join("  " + r for r in tekst.split("\n")) + "\n  </script>")


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
telefon = re.search(r'telefon: "([^"]*)"', tekstid).group(1).replace(" ", "")
ettevote = {"@type": "LocalBusiness", "name": NIMI, "url": AADRESS + "/", "telephone": telefon,
            "areaServed": {"@type": "City", "name": "Tartu"}}
teenused = []
eelrenderda = ["index.html", "privaatsus.html", "404.html"]

for kirje_id, plokk in kirjed(tekstid, "SEADMED"):
    assert kirje_id not in keelatud, f"Seadme id '{kirje_id}' on juba muuks kasutusel"
    pealkiri = eesti_tekst(plokk, "lehe_pealkiri") or eesti_tekst(plokk, "nimi")
    url = f"{AADRESS}/{kirje_id}"
    kirjeldus = f"{pealkiri}. {eesti_tekst(plokk, 'lyhike')} Hinnakiri, kodukülastus Tartu linnas, tööle 3 kuud garantiid."
    leht = tee_leht(seadme_mall, kirje_id, pealkiri, kirjeldus, url)
    teenus = {"@type": "Service", "name": pealkiri, "url": url, "areaServed": ettevote["areaServed"]}
    teenused.append(teenus)
    leht = leht.replace("</head>", "  " + json_ld({"@context": "https://schema.org", **teenus, "provider": ettevote}) + "\n</head>", 1)
    # Seadme pilt hakkab laadima kohe lehe avamisel, mitte alles siis, kui programm selle lehele paneb
    if (KAUST / "img" / "seadmed" / f"{kirje_id}.webp").exists():
        leht = leht.replace('  <link rel="stylesheet"', f'  <link rel="preload" href="/img/seadmed/{kirje_id}.webp" as="image" fetchpriority="high">\n  <link rel="stylesheet"', 1)
    (KAUST / f"{kirje_id}.html").write_text(leht, encoding="utf-8")
    aadressid.append(url)
    eelrenderda.append(f"{kirje_id}.html")

(KAUST / "nouanded").mkdir(exist_ok=True)
for kirje_id, plokk in kirjed(tekstid, "NOUANDED"):
    url = f"{AADRESS}/nouanded/{kirje_id}"
    leht = tee_leht(nouande_mall, kirje_id, eesti_tekst(plokk, "pealkiri"), eesti_tekst(plokk, "lyhike"), url)
    (KAUST / "nouanded" / f"{kirje_id}.html").write_text(leht, encoding="utf-8")
    aadressid.append(url)
    eelrenderda.append(f"nouanded/{kirje_id}.html")

# Avalehe info Google'ile: ettevõte, teenused ja keeled
avaleht = (KAUST / "index.html").read_text(encoding="utf-8")
avalehe_info = {
    "@context": "https://schema.org",
    **ettevote,
    "description": re.search(r'<meta name="description" content="([^"]*)"', avaleht).group(1),
    "image": re.search(r'<meta property="og:image" content="([^"]*)"', avaleht).group(1),
    "address": {"@type": "PostalAddress", "addressLocality": "Tartu", "addressCountry": "EE"},
    "priceRange": "€€",
    "knowsLanguage": ["et", "en", "ru", "fi"],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Remonditeenused",
        "itemListElement": [{"@type": "Offer", "itemOffered": t} for t in teenused],
    },
}
avaleht = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: json_ld(avalehe_info), avaleht, count=1, flags=re.S)
(KAUST / "index.html").write_text(avaleht, encoding="utf-8")

# Google'i jaoks kõigi lehtede nimekiri
read = [f"  <url><loc>{u}</loc></url>" for u in [AADRESS + "/"] + aadressid + [AADRESS + "/privaatsus"]]
(KAUST / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(read) + "\n</urlset>\n",
    encoding="utf-8")

# ---- Eelrenderdamine: eestikeelne sisu otse lehe faili ----
# Chrome avab abilehe, mis laeb kõik lehed järjest raami sisse, laseb lehe
# programmil sisu täita ja kogub täidetud kohtade sisu kokku (JSON).
ABILEHT = """<!doctype html><meta charset="utf-8">
<iframe id="raam" style="width:1200px;height:900px"></iframe><pre id="tulemus"></pre>
<script>
const lehed = LEHED, tulemus = {}, raam = document.getElementById("raam");
const kohad = ["seadmed", "abiline-sisu", "kkk-nimekiri", "nouanded-nimekiri", "vorm-seade", "seade", "nouanne", "privaatsus", "aasta"];
let i = 0;
raam.onload = () => setTimeout(() => {
  const d = raam.contentDocument, r = { pealkiri: d.title, t: {}, tp: {}, kontakt: {}, id: {} };
  d.querySelectorAll(".ilmub, .nahtav").forEach((el) => el.classList.remove("ilmub", "nahtav"));
  d.querySelectorAll("[class='']").forEach((el) => el.removeAttribute("class"));
  d.querySelectorAll("[data-t]").forEach((el) => (r.t[el.dataset.t] = el.innerHTML));
  d.querySelectorAll("[data-tp]").forEach((el) => (r.tp[el.dataset.tp] = el.placeholder));
  d.querySelectorAll("[data-kontakt]").forEach((el) => (r.kontakt[el.dataset.kontakt] = { html: el.innerHTML, href: el.getAttribute("href") }));
  kohad.forEach((id) => { const el = d.getElementById(id); if (el) r.id[id] = el.innerHTML; });
  tulemus[lehed[i++]] = r;
  if (i < lehed.length) raam.src = "/" + lehed[i];
  else document.getElementById("tulemus").textContent = JSON.stringify(tulemus);
}, 300);
raam.src = "/" + lehed[0];
</script>"""


class Serveerija(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/_eelrender.html":
            sisu = ABILEHT.replace("LEHED", json.dumps(eelrenderda)).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(sisu)))
            self.end_headers()
            self.wfile.write(sisu)
        else:
            super().do_GET()

    def log_message(self, *args):
        pass


def sisemus(s, id_):
    """Leiab elemendi id="..." sisu alguse ja lõpu (arvestab sees olevaid sama sildiga elemente)."""
    m = re.search(r'<(\w+)\b[^>]*(?<![\w-])id="' + re.escape(id_) + r'"[^>]*>', s)
    if not m:
        return None
    silt, algus, sugavus = m.group(1), m.end(), 1
    for t in re.finditer(r"<(/?)" + silt + r"\b[^>]*>", s[algus:]):
        sugavus += -1 if t.group(1) else 1
        if sugavus == 0:
            return algus, algus + t.start()
    raise ValueError(f"Elemendi id={id_} lõppu ei leitud")


def pane_sisu(s, r):
    e = lambda x: html.escape(x, quote=True)
    s = re.sub(r"<title>.*?</title>", lambda m: f"<title>{e(r['pealkiri'])}</title>", s, count=1)

    # Kontaktandmed (telefon, WhatsApp, lehe nimi): link ja tekst
    def kontakt(m):
        algus, silt, liik, sisu, lopp = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5)
        k = r["kontakt"].get(liik)
        if not k:
            return m.group(0)
        if k["href"] is not None:
            algus = re.sub(r'\shref="[^"]*"', lambda _: f' href="{e(k["href"])}"', algus, count=1)
        if "data-t=" not in algus:
            sisu = k["html"]
        return algus + sisu + lopp
    s = re.sub(r'(<(\w+)\b[^>]*\sdata-kontakt="(\w+)"[^>]*>)(.*?)(</\2>)', kontakt, s, flags=re.S)

    # Tekstid data-t="..." ja vormi vihjed data-tp="..."
    s = re.sub(r'(<(\w+)\b[^>]*\sdata-t="(\w+)"[^>]*>)(.*?)(</\2>)',
               lambda m: m.group(1) + r["t"].get(m.group(3), m.group(4)) + m.group(5), s, flags=re.S)
    def vihje(m):
        silt = re.sub(r'\splaceholder="[^"]*"', "", m.group(0))
        return silt.replace(f'data-tp="{m.group(1)}"', f'data-tp="{m.group(1)}" placeholder="{e(r["tp"].get(m.group(1), ""))}"', 1)
    s = re.sub(r'<\w+\b[^>]*\sdata-tp="(\w+)"[^>]*>', vihje, s)

    # Programmi täidetavad kohad (seadmekaardid, hinnakiri, KKK jne)
    for id_, sisu in r["id"].items():
        koht = sisemus(s, id_)
        if koht:
            s = s[: koht[0]] + sisu + s[koht[1]:]
    return s


chrome = next((shutil.which(n) for n in ["google-chrome-stable", "google-chrome", "chromium", "chromium-browser"] if shutil.which(n)), None)
if not chrome:
    print("HOIATUS: Chrome'i ei leitud – sisu jäi lehe failidesse kirjutamata (lehed töötavad ikka).")
else:
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(Serveerija, directory=str(KAUST)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    profiil = tempfile.mkdtemp(prefix="tee-lehed-")
    try:
        valjund = subprocess.run(
            [chrome, "--headless=new", "--disable-gpu", "--no-first-run", f"--user-data-dir={profiil}",
             # Ainult see arvuti: välismaailma (nt külastuste loendurisse) ei pöörduta
             "--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1",
             "--virtual-time-budget=60000", "--dump-dom",
             f"http://127.0.0.1:{server.server_address[1]}/_eelrender.html"],
            capture_output=True, text=True, timeout=180).stdout
    finally:
        server.shutdown()
        shutil.rmtree(profiil, ignore_errors=True)
    m = re.search(r'<pre id="tulemus">(.*?)</pre>', valjund, re.S)
    tulemus = json.loads(html.unescape(m.group(1))) if m and m.group(1) else {}
    puudu = [x for x in eelrenderda if x not in tulemus]
    assert not puudu, f"Chrome ei jõudnud neid lehti täita: {puudu}"
    for leht in eelrenderda:
        tee = KAUST / leht
        tee.write_text(pane_sisu(tee.read_text(encoding="utf-8"), tulemus[leht]), encoding="utf-8")
    print(f"Sisu kirjutatud lehe failidesse ({len(eelrenderda)} lehte).")

print("Loodud lehed:")
for u in aadressid:
    print("  " + u)
