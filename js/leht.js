// =====================================================================
//  LEHE PROGRAMM
//  See fail paneb tekstid failist tekstid.js lehele ja vahetab keelt.
//  Tavaliselt pole seda faili vaja muuta.
// =====================================================================

const KEELED = ["et", "en", "ru", "fi"];

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
  return s.replaceAll("{tasu}", VALJAKUTSE_TASU);
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
          <a class="nupp teine" href="seade.html?id=${s.id}">${t(TEKSTID.abiline_koik_hinnad)}</a>
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

// Praegu on vorm näidis: see ei saada midagi ära, vaid näitab teadet.
const vorm = document.getElementById("vorm");
if (vorm) {
  vorm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("vorm-teade").hidden = false;
  });
}

// ---- Avalehe seadmekaardid ----
function taidaSeadmeKaardid() {
  const koht = document.getElementById("seadmed");
  if (!koht) return;
  koht.innerHTML = SEADMED.map(
    (s) => `
      <a class="kaart seadmekaart" href="seade.html?id=${s.id}">
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

  const id = new URLSearchParams(location.search).get("id");
  const s = SEADMED.find((x) => x.id === id);

  if (!s) {
    koht.innerHTML = `<p>${t(TEKSTID.seadet_ei_leitud)}</p>`;
    return;
  }

  document.title = t(s.nimi) + " – " + KONTAKT.nimi;

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
    <div class="seade-pais">
      <span class="ikoon suur">${IKOONID[s.ikoon] || ""}</span>
      <div>
        <h1>${t(s.nimi)}</h1>
        <p class="juhatus">${t(s.kirjeldus)}</p>
      </div>
    </div>

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
      <a class="nupp" href="index.html#kontakt">${t(TEKSTID.nupp_kontakt)}</a>
    </div>`;
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
    { threshold: 0.1 }
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
