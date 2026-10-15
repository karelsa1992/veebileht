// =====================================================================
//  LEHE PROGRAMM
//  See fail paneb tekstid failist tekstid.js lehele ja vahetab keelt.
//  Tavaliselt pole seda faili vaja muuta.
// =====================================================================

const KEELED = ["et", "en", "ru", "fi"];

// Mis seadet või nõuannet see leht näitab. Iga seadme ja nõuande leht on loodud
// abiprogrammiga _tee-lehed.py ja selle id on kirjas <body data-id="...">.
const LEHE_ID = document.body.dataset.id || new URLSearchParams(location.search).get("id");

// Vanad aadressid (seade.html?id=... ja nouanne.html?id=...) suunatakse uutele
if (!document.body.dataset.id && LEHE_ID) {
  if (document.getElementById("seade")) location.replace("/" + LEHE_ID);
  if (document.getElementById("nouanne")) location.replace("/nouanded/" + LEHE_ID);
}

// Seadmete ikoonid (lihtsad joonpildid)
const IKOONID = {
  lauaarvuti:
    '<svg viewBox="0 0 48 48"><rect x="4" y="9" width="26" height="19" rx="2"/><path d="M13 36h8M17 28v8"/><rect x="34" y="9" width="10" height="27" rx="1.5"/><path d="M37 14h4M37 18h4"/><circle cx="39" cy="30" r="1.2"/></svg>',
  sulearvuti:
    '<svg viewBox="0 0 48 48"><rect x="9" y="10" width="30" height="20" rx="2"/><path d="M4 36h40l-3-6H7z"/><path d="M21 33h6"/></svg>',
  telefon:
    '<svg viewBox="0 0 48 48"><rect x="14" y="4" width="20" height="40" rx="3.5"/><path d="M21 8h6"/><circle cx="24" cy="39" r="1.3"/></svg>',
  tahvel:
    '<svg viewBox="0 0 48 48"><rect x="7" y="5" width="34" height="38" rx="3"/><path d="M11 10h26v26H11z"/><circle cx="24" cy="39.5" r="1.3"/></svg>',
  konsool:
    '<svg viewBox="0 0 48 48"><path d="M15 14h18a10 10 0 0 1 10 10v4a8 8 0 0 1-14 5.3L27 31h-6l-2 2.3A8 8 0 0 1 5 28v-4a10 10 0 0 1 10-10z"/><path d="M14 20v8M10 24h8"/><circle cx="32" cy="22" r="1.4"/><circle cx="36" cy="26" r="1.4"/></svg>',
  tilk:
    '<svg viewBox="0 0 48 48"><path d="M24 5C24 5 11 20 11 29a13 13 0 0 0 26 0C37 20 24 5 24 5z"/><path d="M18 30a6 6 0 0 0 6 6"/></svg>',
  kraadiklaas:
    '<svg viewBox="0 0 48 48"><path d="M20 28V9a4 4 0 0 1 8 0v19a8 8 0 1 1-8 0z"/><path d="M24 31V16"/><circle cx="24" cy="34" r="3"/><path d="M32 12h4M32 18h4M32 24h4"/></svg>',
  aku:
    '<svg viewBox="0 0 48 48"><rect x="15" y="9" width="18" height="34" rx="3"/><path d="M20 5h8"/><path d="M26 17l-5 9h6l-5 9"/></svg>',
  kiirus:
    '<svg viewBox="0 0 48 48"><path d="M8 34a16 16 0 1 1 32 0"/><path d="M24 34l-7-9"/><circle cx="24" cy="34" r="2.5"/><path d="M12 22l2.5 1.5M24 16v3M36 22l-2.5 1.5"/></svg>',
  helista:
    '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>',
  kiip:
    '<svg viewBox="0 0 48 48"><rect x="13" y="13" width="22" height="22" rx="2"/><rect x="19" y="19" width="10" height="10" rx="1"/><path d="M18 13V7M24 13V7M30 13V7M18 41v-6M24 41v-6M30 41v-6M13 18H7M13 24H7M13 30H7M41 18h-6M41 24h-6M41 30h-6"/></svg>',
};

// ---- Keele valik ----
// Leht avaneb alati eesti keeles. Kui külastaja valib teise keele,
// jääb see meelde ainult seni, kuni brauseri vahekaart on lahti.
function loeKeel() {
  try {
    const k = sessionStorage.getItem("keel");
    if (KEELED.includes(k)) return k;
  } catch (e) {}
  return "et";
}

function salvestaKeel(k) {
  try {
    sessionStorage.setItem("keel", k);
  } catch (e) {}
}

let keel = loeKeel();

// Võtab tekstist õige keele (kui tõlge puudub, kasutab eesti keelt)
function t(tekst) {
  if (!tekst) return "";
  const s = tekst[keel] || tekst.et || "";
  return s
    .replaceAll("{tasu}", VALJAKUTSE_TASU)
    .replaceAll("{email}", KONTAKT.email)
    .replaceAll("{telefon}", KONTAKT.telefon);
}

// Sama, aga alati eesti keeles (kirjad, mis tulevad sulle endale)
function eestiKeeles(tekst) {
  return (tekst.et || "").replaceAll("{tasu}", VALJAKUTSE_TASU);
}

// WhatsAppi link koos valmis algusega sõnumile
function whatsappLink() {
  return "https://wa.me/" + KONTAKT.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(t(TEKSTID.whatsapp_sonum));
}

// ---- Tekstide lehele panemine ----
function taidaTekstid() {
  document.documentElement.lang = keel;

  // Kõik elemendid, millel on data-t="võti", saavad teksti failist tekstid.js
  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = t(TEKSTID[el.dataset.t]);
  });

  // Vormi lahtrite hall vihjetekst (data-tp="võti")
  document.querySelectorAll("[data-tp]").forEach((el) => {
    el.placeholder = t(TEKSTID[el.dataset.tp]);
  });

  // Kontaktandmed
  document.querySelectorAll("[data-kontakt]").forEach((el) => {
    const liik = el.dataset.kontakt;
    if (liik === "nimi") el.textContent = KONTAKT.nimi;
    if (liik === "telefon") {
      el.textContent = KONTAKT.telefon;
      el.href = "tel:" + KONTAKT.telefon.replaceAll(" ", "");
    }
    if (liik === "email") {
      el.textContent = KONTAKT.email;
      el.href = "mailto:" + KONTAKT.email;
    }
    if (liik === "whatsapp") {
      el.href = KONTAKT.whatsapp ? whatsappLink() : "#";
      // Kui WhatsAppi numbrit pole, peida kogu kaart
      const kaart = el.closest(".kaart");
      if (kaart) kaart.hidden = !KONTAKT.whatsapp;
    }
  });

  // Keelenupud: märgi valitud keel
  document.querySelectorAll(".keel button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.keel === keel ? "true" : "false");
  });

  taidaSeadmeKaardid();
  taidaSeadmeLeht();
  taidaVormiSeadmed();
  taidaKKK();
  taidaAbiline();
  taidaNouandeKaardid();
  taidaNouanne();
  taidaPrivaatsus();
  taidaKiirnupud();
}

// ---- Telefoni nurganupud: Helista ja WhatsApp ----
function taidaKiirnupud() {
  let koht = document.querySelector(".kiirnupud");
  if (!koht) {
    koht = document.createElement("div");
    koht.className = "kiirnupud";
    document.body.appendChild(koht);
  }
  const whatsapp = KONTAKT.whatsapp
    ? `<a class="kiirnupp" href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${IKOONID.whatsapp}</a>`
    : "";
  koht.innerHTML =
    whatsapp +
    `<a class="kiirnupp" href="tel:${KONTAKT.telefon.replaceAll(" ", "")}" aria-label="${t(TEKSTID.helista)}">${IKOONID.helista}</a>`;
}

// ---- Privaatsusteabe leht ----
function taidaPrivaatsus() {
  const koht = document.getElementById("privaatsus");
  if (!koht) return;
  document.title = t(PRIVAATSUS.pealkiri) + " – " + KONTAKT.nimi;
  koht.innerHTML = `
    <article class="artikkel">
      <h1>${t(PRIVAATSUS.pealkiri)}</h1>
      <p class="juhatus">${t(PRIVAATSUS.sissejuhatus)}</p>
      ${PRIVAATSUS.osad
        .map(
          (o) => `
        <section class="kaart">
          <h2>${t(o.pealkiri)}</h2>
          <p>${t(o.tekst)}</p>
        </section>`
        )
        .join("")}
    </article>`;
}

// ---- Nõuanded: kaardid avalehel ----
function taidaNouandeKaardid() {
  const koht = document.getElementById("nouanded-nimekiri");
  if (!koht) return;
  koht.innerHTML = NOUANDED.map(
    (n) => `
      <a class="kaart nouandekaart" href="/nouanded/${n.id}">
        <span class="ikoon">${IKOONID[n.ikoon] || ""}</span>
        <h3>${t(n.pealkiri)}</h3>
        <p>${t(n.lyhike)}</p>
        <span class="lisa">${t(TEKSTID.loe_edasi)} →</span>
      </a>`
  ).join("");
}

// ---- Ühe nõuande leht ----
function taidaNouanne() {
  const koht = document.getElementById("nouanne");
  if (!koht) return;

  const n = NOUANDED.find((x) => x.id === LEHE_ID);
  if (!n) {
    koht.innerHTML = `<p>${t(TEKSTID.nouannet_ei_leitud)}</p>`;
    return;
  }

  document.title = t(n.pealkiri) + " – " + KONTAKT.nimi;

  const plokid = n.plokid
    .map(
      (p) => `
      <section class="kaart${p.hoiatus ? " hoiatus" : ""}">
        <h2>${t(p.pealkiri)}</h2>
        <ul class="nimekiri">${p.punktid.map((x) => `<li>${t(x)}</li>`).join("")}</ul>
      </section>`
    )
    .join("");

  koht.innerHTML = `
    <article class="artikkel">
      <div class="seade-pais">
        <span class="ikoon suur">${IKOONID[n.ikoon] || ""}</span>
        <div>
          <h1>${t(n.pealkiri)}</h1>
          <p class="juhatus">${t(n.sissejuhatus)}</p>
        </div>
      </div>
      ${plokid}
      <section class="kaart">
        <h2>${t(TEKSTID.millal_pealkiri)}</h2>
        <p>${t(n.millal)}</p>
      </section>
      <div class="kaart uleskutse">
        <p>${t(TEKSTID.nouanne_abi)}</p>
        <a class="nupp" href="/#kontakt">${t(TEKSTID.nupp_kontakt)}</a>
      </div>
    </article>`;
}

// ---- "Leia oma mure" abiline ----
// Klient valib seadme ja mure, abiline näitab põhjust ja hinda.
const abiline = { seade: null, mure: null };

// Hind hinnakirjast (otsib rea, mille eestikeelne nimi on sama)
function leiaHind(seade, tooNimi) {
  const h = seade.hinnad.find((x) => x.nimi.et === tooNimi);
  if (!h) return null;
  return { nimi: t(h.nimi), hind: (h.alates ? t(TEKSTID.alates) + " " : "") + h.hind };
}

function taidaAbiline() {
  const koht = document.getElementById("abiline-sisu");
  if (!koht) return;

  // 1. samm: seadmed
  let html =
    `<p class="samm">${t(TEKSTID.abiline_samm1)}</p><div class="valikud">` +
    SEADMED.filter((s) => MURED[s.id])
      .map(
        (s) => `
        <button type="button" class="valik-nupp" data-seade="${s.id}" aria-pressed="${abiline.seade === s.id}">
          <span class="ikoon vaike">${IKOONID[s.ikoon] || ""}</span>${t(s.nimi)}
        </button>`
      )
      .join("") +
    `</div>`;

  // 2. samm: mured
  const s = SEADMED.find((x) => x.id === abiline.seade);
  if (s) {
    html +=
      `<p class="samm">${t(TEKSTID.abiline_samm2)}</p><div class="valikud">` +
      MURED[s.id]
        .map(
          (m, i) => `
          <button type="button" class="valik-nupp" data-mure="${i}" aria-pressed="${abiline.mure === i}">${t(m.mure)}</button>`
        )
        .join("") +
      `</div>`;
  }

  // Tulemus
  const m = s && abiline.mure !== null ? MURED[s.id][abiline.mure] : null;
  if (m) {
    const h = leiaHind(s, m.too);
    html += `
      <div class="tulemus">
        <h3>${t(TEKSTID.abiline_pohjus)}</h3>
        <p>${t(m.pohjus)}</p>
        ${h ? `<h3>${t(TEKSTID.abiline_teenus)}</h3>
        <p class="tulemus-hind"><span>${h.nimi}</span><strong>${h.hind}</strong></p>` : ""}
        <p class="markus">${t(TEKSTID.abiline_markus)}</p>
        <div class="nupud-rida">
          <button type="button" class="nupp" data-tegevus="kysi">${t(TEKSTID.abiline_kysi)}</button>
          <a class="nupp teine" href="/${s.id}">${t(TEKSTID.abiline_koik_hinnad)}</a>
          <button type="button" class="tekstinupp" data-tegevus="uuesti">${t(TEKSTID.abiline_uuesti)}</button>
        </div>
      </div>`;
  }

  koht.innerHTML = html;
}

const abilineKoht = document.getElementById("abiline-sisu");
if (abilineKoht) {
  abilineKoht.addEventListener("click", (e) => {
    const nupp = e.target.closest("button");
    if (!nupp) return;

    if (nupp.dataset.seade) {
      abiline.seade = nupp.dataset.seade;
      abiline.mure = null;
      taidaAbiline();
    } else if (nupp.dataset.mure !== undefined) {
      abiline.mure = Number(nupp.dataset.mure);
      taidaAbiline();
      abilineKoht.querySelector(".tulemus").scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else if (nupp.dataset.tegevus === "uuesti") {
      abiline.seade = null;
      abiline.mure = null;
      taidaAbiline();
    } else if (nupp.dataset.tegevus === "kysi") {
      // Täida kontaktivorm ette ja liigu selleni
      const m = MURED[abiline.seade][abiline.mure];
      const valik = document.getElementById("vorm-seade");
      const tekst = document.querySelector("#vorm textarea");
      if (valik) valik.value = abiline.seade;
      if (tekst && !tekst.value.trim()) tekst.value = t(m.mure) + ". ";
      document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
      if (tekst) tekst.focus({ preventScroll: true });
    }
  });
}

// ---- KKK: klõpsatavad küsimused ----
function taidaKKK() {
  const koht = document.getElementById("kkk-nimekiri");
  if (!koht) return;
  koht.innerHTML = KKK.map(
    (x) => `
      <details class="kaart">
        <summary>${t(x.k)}</summary>
        <p>${t(x.v)}</p>
      </details>`
  ).join("");
}

// ---- Kirjutamisvorm ----
// Seadmete valik vormis tehakse seadmete nimekirjast (tekstid.js)
function taidaVormiSeadmed() {
  const valik = document.getElementById("vorm-seade");
  if (!valik) return;
  const valitud = valik.value;
  valik.innerHTML =
    `<option value="">${t(TEKSTID.vorm_seade_vali)}</option>` +
    SEADMED.map((s) => `<option value="${s.id}">${t(s.nimi)}</option>`).join("") +
    `<option value="muu">${t(TEKSTID.vorm_muu)}</option>`;
  valik.value = valitud;
}

// Vormi saatmine. Kui VORMI_VOTI (tekstid.js) on tühi, on vorm ainult näidis.
const vorm = document.getElementById("vorm");
if (vorm) {
  vorm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const teade = document.getElementById("vorm-teade");
    const nupp = vorm.querySelector('button[type="submit"]');
    teade.className = "vorm-teade";

    if (!VORMI_VOTI) {
      teade.textContent = t(TEKSTID.vorm_naidis_teade);
      teade.hidden = false;
      return;
    }

    const v = new FormData(vorm);
    if (v.get("botcheck")) return; // robotite lõks: inimene seda lahtrit ei näe

    const seade = SEADMED.find((s) => s.id === v.get("seade"));
    const viisid = { koju: TEKSTID.vorm_viis_koju, toon: TEKSTID.vorm_viis_toon, "ei-tea": TEKSTID.vorm_viis_ei_tea };
    const kontakt = String(v.get("kontakt")).trim();
    const seadmeNimi = seade ? eestiKeeles(seade.nimi) : eestiKeeles(TEKSTID.vorm_muu);

    // Need andmed tulevad sulle meilile
    const andmed = {
      access_key: VORMI_VOTI,
      subject: "Uus päring veebilehelt: " + seadmeNimi,
      from_name: "Veebileht",
      "Nimi": v.get("nimi"),
      "Telefon või e-post": kontakt,
      "Seade": seadmeNimi,
      "Kuidas sobib": eestiKeeles(viisid[v.get("viis")] || TEKSTID.vorm_viis_ei_tea),
      "Mure": v.get("kirjeldus"),
      "Lehe keel": keel,
    };
    // Kui klient andis e-posti, saad meilile otse "Vasta" vajutada
    if (kontakt.includes("@")) andmed.email = kontakt;

    nupp.disabled = true;
    nupp.textContent = t(TEKSTID.vorm_saadan);
    try {
      const vastus = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(andmed),
      });
      const tulemus = await vastus.json();
      if (!tulemus.success) throw new Error(tulemus.message);
      vorm.reset();
      teade.textContent = t(TEKSTID.vorm_saadetud);
      teade.classList.add("onnestus");
    } catch (viga) {
      teade.textContent = t(TEKSTID.vorm_viga);
      teade.classList.add("viga");
    }
    teade.hidden = false;
    nupp.disabled = false;
    nupp.textContent = t(TEKSTID.vorm_saada);
  });
}

// ---- Avalehe seadmekaardid ----
function taidaSeadmeKaardid() {
  const koht = document.getElementById("seadmed");
  if (!koht) return;
  koht.innerHTML = SEADMED.map(
    (s) => `
      <a class="kaart seadmekaart" href="/${s.id}">
        <span class="ikoon">${IKOONID[s.ikoon] || ""}</span>
        <h3>${t(s.nimi)}</h3>
        <p>${t(s.lyhike)}</p>
        <span class="lisa">${t(TEKSTID.vaata_lahemalt)} →</span>
      </a>`
  ).join("");
}

// ---- Ühe seadme leht ----
function taidaSeadmeLeht() {
  const koht = document.getElementById("seade");
  if (!koht) return;

  const s = SEADMED.find((x) => x.id === praeguneSeade);

  if (!s) {
    koht.innerHTML = `<p>${t(TEKSTID.seadet_ei_leitud)}</p>`;
    return;
  }

  document.title = t(s.nimi) + " – " + KONTAKT.nimi;

  // Eelmise ja järgmise seadme lingid + täpid, millisel seadmel oled
  const { eelmine, jargmine, koht: nr } = naabrid(s.id);
  const nav = `
    <nav class="seadme-nav">
      <a class="seadme-nool" href="/${eelmine.id}" data-vaheta="-1">‹ <span>${t(eelmine.nimi)}</span></a>
      <span class="punktid">${SEADMED.map((x, j) => `<span class="punkt${j === nr ? " aktiivne" : ""}"></span>`).join("")}</span>
      <a class="seadme-nool paremale" href="/${jargmine.id}" data-vaheta="1"><span>${t(jargmine.nimi)}</span> ›</a>
    </nav>
    <p class="libista-vihje">${t(TEKSTID.libista_vihje)}</p>`;

  const read = s.hinnad
    .map(
      (h) => `
        <tr>
          <td>${t(h.nimi)}</td>
          <td class="hind">${h.alates ? t(TEKSTID.alates) + " " : ""}${h.hind}</td>
        </tr>`
    )
    .join("");

  koht.innerHTML = `
    ${nav}
    <div class="seade-pais">
      <span class="ikoon suur">${IKOONID[s.ikoon] || ""}</span>
      <div>
        <h1>${t(s.nimi)}</h1>
        <p class="juhatus">${t(s.kirjeldus)}</p>
      </div>
    </div>

    <img class="seade-pilt" src="/img/seadmed/${s.id}.webp" alt="${t(s.nimi)}" width="1200" height="800" fetchpriority="high" onerror="this.remove()">

    <div class="seade-sisu">
      <section class="kaart">
        <h2>${t(TEKSTID.mida_teen)}</h2>
        <ul class="nimekiri">${s.mida.map((m) => `<li>${t(m)}</li>`).join("")}</ul>
      </section>

      <section class="kaart">
        <h2>${t(TEKSTID.hinnakiri)}</h2>
        <table class="hinnatabel">
          <thead><tr><th>${t(TEKSTID.too)}</th><th class="hind">${t(TEKSTID.hind)}</th></tr></thead>
          <tbody>${read}</tbody>
        </table>
        <p class="markus">${t(TEKSTID.hinnakiri_markus)}</p>
      </section>
    </div>

    <div class="kaart uleskutse">
      <p>${t(TEKSTID.ei_leia)}</p>
      <a class="nupp" href="/#kontakt">${t(TEKSTID.nupp_kontakt)}</a>
    </div>`;

  // Laadi kõrvalseadmete pildid ette, et noolega edasi minnes oleks pilt kohe olemas
  setTimeout(() => {
    [eelmine, jargmine].forEach((x) => (new Image().src = `/img/seadmed/${x.id}.webp`));
  }, 1500);
}

// ---- Seadmete vahetamine (nooled ja telefonis libistamine) ----
// Mis seadet seadme lehel praegu näidatakse (algul võetakse lehe aadressist)
let praeguneSeade = LEHE_ID;

function naabrid(id) {
  const n = SEADMED.length;
  const i = SEADMED.findIndex((x) => x.id === id);
  return { eelmine: SEADMED[(i - 1 + n) % n], jargmine: SEADMED[(i + 1) % n], koht: i };
}

function vaiksemLiikumine() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// suund: 1 = järgmine seade, -1 = eelmine seade
function vahetaSeadet(suund) {
  if (!SEADMED.some((x) => x.id === praeguneSeade)) return;
  const { eelmine, jargmine } = naabrid(praeguneSeade);
  const uus = suund > 0 ? jargmine : eelmine;

  // Vahetame sisu ilma lehte uuesti laadimata
  praeguneSeade = uus.id;
  try {
    // Uuenda ka aadressiriba (arvutist avatud failil brauser seda ei luba)
    history.replaceState(null, "", "/" + uus.id);
  } catch (e) {}
  taidaSeadmeLeht();
  window.scrollTo(0, 0);

  // Loendur: arvesta seadme vahetust eraldi lehevaatamisena
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: location.pathname });
  }

  const koht = document.getElementById("seade");
  if (!vaiksemLiikumine()) {
    koht.classList.remove("tuleb-paremalt", "tuleb-vasakult");
    void koht.offsetWidth; // lase animatsioonil uuesti alata
    koht.classList.add(suund > 0 ? "tuleb-paremalt" : "tuleb-vasakult");
  }
}

const seadeKoht = document.getElementById("seade");
if (seadeKoht) {
  // Klõps eelmise/järgmise seadme nimel
  seadeKoht.addEventListener("click", (e) => {
    const link = e.target.closest("[data-vaheta]");
    if (!link) return;
    e.preventDefault();
    vahetaSeadet(Number(link.dataset.vaheta));
  });

  // Telefonis: sõrmega külgedele libistamine
  let puude = null;
  seadeKoht.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) return (puude = null);
      puude = { x: e.touches[0].clientX, y: e.touches[0].clientY, suund: null };
    },
    { passive: true }
  );
  seadeKoht.addEventListener(
    "touchmove",
    (e) => {
      if (!puude) return;
      const dx = e.touches[0].clientX - puude.x;
      const dy = e.touches[0].clientY - puude.y;
      // Otsusta, kas inimene kerib üles-alla või libistab külgedele
      if (!puude.suund && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
        puude.suund = Math.abs(dx) > Math.abs(dy) ? "kylg" : "yles-alla";
      }
      // Leht liigub sõrme järel kaasa
      if (puude.suund === "kylg" && !vaiksemLiikumine()) {
        seadeKoht.style.transition = "none";
        seadeKoht.style.transform = `translateX(${dx * 0.5}px)`;
      }
    },
    { passive: true }
  );
  const lopeta = (e) => {
    if (!puude) return;
    const dx = e.changedTouches[0].clientX - puude.x;
    const kylg = puude.suund === "kylg";
    puude = null;
    seadeKoht.style.transition = "";
    seadeKoht.style.transform = "";
    if (kylg && Math.abs(dx) > 70) vahetaSeadet(dx < 0 ? 1 : -1);
  };
  seadeKoht.addEventListener("touchend", lopeta);
  seadeKoht.addEventListener("touchcancel", () => {
    puude = null;
    seadeKoht.style.transition = "";
    seadeKoht.style.transform = "";
  });
}

// ---- Käivitamine ----
document.querySelectorAll(".keel button").forEach((b) => {
  b.addEventListener("click", () => {
    keel = b.dataset.keel;
    salvestaKeel(keel);
    taidaTekstid();
  });
});

// Telefoni menüünupp ☰: avab ja sulgeb menüü
const menuuNupp = document.querySelector(".menuu-nupp");
const menuu = document.querySelector(".menuu");
if (menuuNupp && menuu) {
  menuuNupp.addEventListener("click", () => {
    const lahti = menuu.classList.toggle("lahti");
    menuuNupp.setAttribute("aria-expanded", lahti ? "true" : "false");
    menuuNupp.textContent = lahti ? "✕" : "☰";
  });
  // Menüüs lingile vajutades pane menüü kinni
  menuu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menuu.classList.remove("lahti");
      menuuNupp.setAttribute("aria-expanded", "false");
      menuuNupp.textContent = "☰";
    });
  });
}

// ---- Pehme ilmumine kerimisel ----
// Kaardid ilmuvad õrnalt, kui need ekraanile jõuavad.
// Tehakse ainult lehe avamisel (mitte keele vahetamisel).
function lisaIlmumine() {
  const vaiksem = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (vaiksem || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-liikumine");
  const vaatleja = new IntersectionObserver(
    (kirjed) => {
      kirjed.forEach((k) => {
        if (!k.isIntersecting) return;
        const el = k.target;
        el.classList.add("nahtav");
        vaatleja.unobserve(el);
        // Pärast ilmumist eemalda klassid, et kaartide muu liikumine (hover) töötaks
        setTimeout(() => el.classList.remove("ilmub", "nahtav"), 700);
      });
    },
    { threshold: 0 }
  );
  document.querySelectorAll("main .kaart, .kogemus").forEach((el) => {
    el.classList.add("ilmub");
    vaatleja.observe(el);
  });
}

const aasta = document.getElementById("aasta");
if (aasta) aasta.textContent = new Date().getFullYear();

taidaTekstid();
lisaIlmumine();
