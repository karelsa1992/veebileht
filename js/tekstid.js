// =====================================================================
//  KÕIK LEHE TEKSTID JA HINNAD
//  Iga tekst on kirjas neljas keeles kõrvuti:
//    et = eesti, en = inglise, ru = vene, fi = soome
//  Muuda ainult jutumärkide " " vahel olevat teksti.
// =====================================================================

// ---- Kontaktandmed (vaheta need oma päris andmete vastu) ----
const KONTAKT = {
  nimi: "Karel Saega",
  telefon: "+372 5639 1019",
  email: "karelsaega1992@gmail.com",};

// ---- Väljakutsetasu (kui tulen kliendi juurde koju) ----
const VALJAKUTSE_TASU = "20 €";

// ---- Üldised tekstid ----
const TEKSTID = {
  lehe_pealkiri: {
    et: "Arvutite ja telefonide remont Tartus",
    en: "Computer and phone repair in Tartu",
    ru: "Ремонт компьютеров и телефонов в Тарту",
    fi: "Tietokoneiden ja puhelimien korjaus Tartossa",
  },
  logo_alapealkiri: {
    et: "Seadmete remont ja hooldus",
    en: "Device repair and maintenance",
    ru: "Ремонт и обслуживание техники",
    fi: "Laitteiden korjaus ja huolto",
  },

  // Menüü
  menuu_teenused: { et: "Teenused", en: "Services", ru: "Услуги", fi: "Palvelut" },
  menuu_kuidas: { et: "Kuidas see käib", en: "How it works", ru: "Как это работает", fi: "Miten se toimii" },
  menuu_minust: { et: "Minust", en: "About", ru: "Обо мне", fi: "Minusta" },
  menuu_kontakt: { et: "Kontakt", en: "Contact", ru: "Контакты", fi: "Yhteystiedot" },

  // Avalehe suur pealkiri
  hero_pealkiri: {
    et: "Arvutite ja telefonide remont Tartus",
    en: "Computer and phone repair in Tartu",
    ru: "Ремонт компьютеров и телефонов в Тарту",
    fi: "Tietokoneiden ja puhelimien korjaus Tartossa",
  },
  nupp_kontakt: { et: "Võta ühendust", en: "Get in touch", ru: "Связаться", fi: "Ota yhteyttä" },
  nupp_hinnad: { et: "Vaata teenuseid ja hindu", en: "Services and prices", ru: "Услуги и цены", fi: "Palvelut ja hinnat" },

  // Teenuste osa
  teenused_pealkiri: {
    et: "Vali seade",
    en: "Choose your device",
    ru: "Выберите устройство",
    fi: "Valitse laite",
  },
  teenused_tekst: {
    et: "Vajuta seadmele, et näha, mida ma sellega teen ja mis see maksab.",
    en: "Click a device to see what I do and what it costs.",
    ru: "Нажмите на устройство, чтобы увидеть, что я делаю и сколько это стоит.",
    fi: "Napsauta laitetta nähdäksesi, mitä teen ja mitä se maksaa.",
  },
  vaata_lahemalt: { et: "Vaata lähemalt", en: "Learn more", ru: "Подробнее", fi: "Lue lisää" },

  // Kuidas see käib
  kuidas_pealkiri: { et: "Kuidas see käib", en: "How it works", ru: "Как это работает", fi: "Miten se toimii" },
  koju_pealkiri: { et: "Tulen sinu juurde", en: "I come to you", ru: "Приеду к вам", fi: "Tulen luoksesi" },
  koju_tekst: {
    et: "Tulen koju või kontorisse Tartu linna piires. Väljakutsetasu on {tasu}, millele lisandub tehtud töö hind.",
    en: "I come to your home or office within the city of Tartu. The call-out fee is {tasu}, plus the price of the work done.",
    ru: "Приеду домой или в офис в пределах города Тарту. Плата за выезд – {tasu}, плюс стоимость работы.",
    fi: "Tulen kotiin tai toimistoon Tarton kaupungin alueella. Käyntimaksu on {tasu}, minkä lisäksi tulee tehdyn työn hinta.",
  },
  too_pealkiri: { et: "Too seade minu juurde", en: "Bring your device to me", ru: "Привезите устройство ко мне", fi: "Tuo laite minulle" },
  too_tekst: {
    et: "Lepime kokku sobiva aja ja ütlen sulle aadressi. Väljakutsetasu sel juhul ei ole.",
    en: "We agree on a suitable time and I give you the address. No call-out fee in this case.",
    ru: "Договоримся об удобном времени, и я сообщу адрес. В этом случае платы за выезд нет.",
    fi: "Sovimme sopivan ajan ja kerron osoitteen. Tällöin käyntimaksua ei ole.",
  },
  hind_pealkiri: { et: "Hind enne tööd", en: "Price before work", ru: "Цена до начала работ", fi: "Hinta ennen työtä" },
  hind_tekst: {
    et: "Enne remonti ütlen sulle hinna. Kui midagi selgub juurde, küsin enne sinu nõusolekut.",
    en: "I tell you the price before the repair. If anything new comes up, I ask for your approval first.",
    ru: "Я называю цену до ремонта. Если выяснится что-то ещё, сначала спрошу вашего согласия.",
    fi: "Kerron hinnan ennen korjausta. Jos jotain uutta ilmenee, kysyn ensin suostumuksesi.",
  },

  garantii_pealkiri: { et: "Garantii", en: "Warranty", ru: "Гарантия", fi: "Takuu" },
  garantii_tekst: {
    et: "Tehtud tööle annan 3 kuud garantiid. Uutele varuosadele kehtib tootja garantii.",
    en: "I give a 3-month warranty on my work. New parts are covered by the manufacturer's warranty.",
    ru: "На выполненную работу даю гарантию 3 месяца. На новые запчасти действует гарантия производителя.",
    fi: "Annan tekemälleni työlle 3 kuukauden takuun. Uusilla varaosilla on valmistajan takuu.",
  },
  tooaeg_pealkiri: { et: "Tööaeg", en: "Working hours", ru: "Время работы", fi: "Aukioloajat" },
  tooaeg_tekst: {
    et: "Esmaspäevast reedeni. Nädalavahetusel eelneval kokkuleppel.",
    en: "Monday to Friday. Weekends by prior arrangement.",
    ru: "С понедельника по пятницу. В выходные – по предварительной договорённости.",
    fi: "Maanantaista perjantaihin. Viikonloppuisin sopimuksen mukaan.",
  },
  maksmine_pealkiri: { et: "Maksmine", en: "Payment", ru: "Оплата", fi: "Maksaminen" },
  maksmine_tekst: {
    et: "Maksad alles pärast töö tegemist – sularahas või pangaülekandega.",
    en: "You pay only after the work is done – in cash or by bank transfer.",
    ru: "Оплата только после выполнения работы – наличными или банковским переводом.",
    fi: "Maksat vasta, kun työ on tehty – käteisellä tai tilisiirrolla.",
  },

  // Minust
  minust_pealkiri: { et: "Minust", en: "About me", ru: "Обо мне", fi: "Minusta" },
  minust_tekst: {
    et: "Olen seadmeid parandanud üle 15 aasta. Tegelen nii lihtsamate töödega, nagu puhastus ja tarkvara paigaldus, kui ka keerulisemate töödega, nagu emaplaatide ja videokaartide remont. Selgitan alati lihtsas keeles, mis seadmel viga on ja mida saab teha.",
    en: "I have been repairing devices for over 15 years. I handle both simple jobs, such as cleaning and software installation, and complex ones, such as motherboard and graphics card repair. I always explain in plain language what is wrong and what can be done.",
    ru: "Я ремонтирую технику более 15 лет. Выполняю как простые работы – чистку и установку программ, так и сложные – ремонт материнских плат и видеокарт. Всегда простыми словами объясняю, в чём неисправность и что можно сделать.",
    fi: "Olen korjannut laitteita yli 15 vuotta. Teen sekä yksinkertaisia töitä, kuten puhdistusta ja ohjelmistoasennuksia, että vaativampia, kuten emolevyjen ja näytönohjainten korjausta. Selitän aina selkeästi, mikä laitteessa on vikana ja mitä voidaan tehdä.",
  },
  aastat_kogemust: { et: "aastat kogemust", en: "years of experience", ru: "лет опыта", fi: "vuotta kokemusta" },

  // "Leia oma mure" abiline
  abiline_pealkiri: { et: "Leia oma mure", en: "Find your problem", ru: "Найдите свою проблему", fi: "Löydä ongelmasi" },
  abiline_tekst: {
    et: "Ei tea, mis teenust vajad? Vali seade ja mis juhtus – näed, mis võib viga olla ja mis see umbes maksab.",
    en: "Not sure what service you need? Choose the device and what happened – you'll see the likely cause and the approximate price.",
    ru: "Не знаете, какая услуга нужна? Выберите устройство и что случилось – увидите возможную причину и примерную цену.",
    fi: "Etkö tiedä, mitä palvelua tarvitset? Valitse laite ja mitä tapahtui – näet todennäköisen syyn ja suuntaa-antavan hinnan.",
  },
  abiline_samm1: { et: "1. Mis seade?", en: "1. Which device?", ru: "1. Какое устройство?", fi: "1. Mikä laite?" },
  abiline_samm2: { et: "2. Mis juhtus?", en: "2. What happened?", ru: "2. Что случилось?", fi: "2. Mitä tapahtui?" },
  abiline_pohjus: { et: "Võimalik põhjus", en: "Likely cause", ru: "Возможная причина", fi: "Todennäköinen syy" },
  abiline_teenus: { et: "Sobiv teenus", en: "Suitable service", ru: "Подходящая услуга", fi: "Sopiva palvelu" },
  abiline_markus: {
    et: "Täpse põhjuse ja hinna ütlen pärast seadme ülevaatamist. Varuosa hind lisandub.",
    en: "I confirm the exact cause and price after checking the device. Parts are extra.",
    ru: "Точную причину и цену назову после осмотра устройства. Запчасти оплачиваются отдельно.",
    fi: "Kerron tarkan syyn ja hinnan laitteen tarkastuksen jälkeen. Varaosat erikseen.",
  },
  abiline_kysi: { et: "Küsi pakkumist", en: "Ask for a quote", ru: "Запросить цену", fi: "Pyydä tarjous" },
  abiline_koik_hinnad: { et: "Vaata kõiki hindu", en: "See all prices", ru: "Все цены", fi: "Katso kaikki hinnat" },
  abiline_uuesti: { et: "Alusta uuesti", en: "Start over", ru: "Начать заново", fi: "Aloita alusta" },

  // Nõuanded
  menuu_nouanded: { et: "Nõuanded", en: "Tips", ru: "Советы", fi: "Vinkit" },
  nouanded_pealkiri: { et: "Kasulikud nõuanded", en: "Useful tips", ru: "Полезные советы", fi: "Hyödyllisiä vinkkejä" },
  nouanded_tekst: {
    et: "Lühikesed juhendid, mis aitavad sul seadet hoida ja hädaolukorras õigesti käituda.",
    en: "Short guides to help you look after your devices and act right in an emergency.",
    ru: "Короткие инструкции, которые помогут беречь технику и правильно действовать в экстренной ситуации.",
    fi: "Lyhyitä ohjeita laitteiden hoitoon ja oikeaan toimintaan hätätilanteessa.",
  },
  loe_edasi: { et: "Loe edasi", en: "Read more", ru: "Читать", fi: "Lue lisää" },
  koik_nouanded: { et: "← Kõik nõuanded", en: "← All tips", ru: "← Все советы", fi: "← Kaikki vinkit" },
  millal_pealkiri: { et: "Millal remonti tuua?", en: "When to bring it in?", ru: "Когда обращаться в ремонт?", fi: "Milloin tuoda korjattavaksi?" },
  nouanne_abi: {
    et: "Kas vajad abi? Kirjuta või helista – vastan esimesel võimalusel.",
    en: "Need help? Write or call – I'll reply as soon as possible.",
    ru: "Нужна помощь? Напишите или позвоните – отвечу при первой возможности.",
    fi: "Tarvitsetko apua? Kirjoita tai soita – vastaan mahdollisimman pian.",
  },
  nouannet_ei_leitud: { et: "Seda nõuannet ei leitud.", en: "Tip not found.", ru: "Совет не найден.", fi: "Vinkkiä ei löytynyt." },

  // KKK
  menuu_kkk: { et: "KKK", en: "FAQ", ru: "Вопросы", fi: "UKK" },
  kkk_pealkiri: {
    et: "Korduma kippuvad küsimused",
    en: "Frequently asked questions",
    ru: "Частые вопросы",
    fi: "Usein kysytyt kysymykset",
  },

  // Kontakt
  kontakt_pealkiri: { et: "Kontakt", en: "Contact", ru: "Контакты", fi: "Yhteystiedot" },
  kontakt_tekst: {
    et: "Kirjelda oma muret ja seadet. Vastan esimesel võimalusel.",
    en: "Describe your problem and device. I will reply as soon as possible.",
    ru: "Опишите проблему и устройство. Отвечу при первой возможности.",
    fi: "Kuvaile ongelmasi ja laitteesi. Vastaan mahdollisimman pian.",
  },
  telefon: { et: "Telefon", en: "Phone", ru: "Телефон", fi: "Puhelin" },
  email: { et: "E-post", en: "Email", ru: "Эл. почта", fi: "Sähköposti" },
  voi_kirjuta_otse: {
    et: "Või võta otse ühendust",
    en: "Or contact me directly",
    ru: "Или свяжитесь напрямую",
    fi: "Tai ota yhteyttä suoraan",
  },

  // Kirjutamisvorm
  vorm_pealkiri: { et: "Kirjelda oma muret", en: "Describe your problem", ru: "Опишите проблему", fi: "Kuvaile ongelmasi" },
  vorm_nimi: { et: "Sinu nimi", en: "Your name", ru: "Ваше имя", fi: "Nimesi" },
  vorm_kontakt: {
    et: "Telefon või e-post",
    en: "Phone or email",
    ru: "Телефон или эл. почта",
    fi: "Puhelin tai sähköposti",
  },
  vorm_seade: { et: "Seade", en: "Device", ru: "Устройство", fi: "Laite" },
  vorm_seade_vali: { et: "Vali seade…", en: "Choose a device…", ru: "Выберите устройство…", fi: "Valitse laite…" },
  vorm_muu: { et: "Muu seade", en: "Other device", ru: "Другое устройство", fi: "Muu laite" },
  vorm_viis: { et: "Kuidas sulle sobib?", en: "What suits you?", ru: "Как вам удобнее?", fi: "Mikä sopii sinulle?" },
  vorm_viis_koju: {
    et: "Tule minu juurde (+{tasu})",
    en: "Come to me (+{tasu})",
    ru: "Приезжайте ко мне (+{tasu})",
    fi: "Tule luokseni (+{tasu})",
  },
  vorm_viis_toon: { et: "Toon seadme ise", en: "I'll bring the device", ru: "Привезу сам(а)", fi: "Tuon laitteen itse" },
  vorm_viis_ei_tea: { et: "Ei tea veel", en: "Not sure yet", ru: "Пока не знаю", fi: "En tiedä vielä" },
  vorm_kirjeldus: { et: "Mis seadmega juhtus?", en: "What happened to the device?", ru: "Что случилось с устройством?", fi: "Mitä laitteelle tapahtui?" },
  vorm_kirjeldus_vihje: {
    et: "Nt: sülearvuti mudel, mis juhtus, millal probleem algas…",
    en: "E.g. laptop model, what happened, when the problem started…",
    ru: "Напр.: модель ноутбука, что случилось, когда началась проблема…",
    fi: "Esim. kannettavan malli, mitä tapahtui, milloin ongelma alkoi…",
  },
  vorm_saada: { et: "Saada", en: "Send", ru: "Отправить", fi: "Lähetä" },
  vorm_naidis_teade: {
    et: "See vorm on praegu näidis ja sõnumit veel ära ei saadeta. Palun helista või kirjuta e-posti teel.",
    en: "This form is a demo for now and the message is not sent yet. Please call or send an email.",
    ru: "Сейчас эта форма – образец, и сообщение пока не отправляется. Пожалуйста, позвоните или напишите на эл. почту.",
    fi: "Tämä lomake on toistaiseksi esimerkki, eikä viestiä vielä lähetetä. Soita tai lähetä sähköpostia.",
  },

  // Seadme leht
  tagasi: { et: "← Kõik seadmed", en: "← All devices", ru: "← Все устройства", fi: "← Kaikki laitteet" },
  libista_vihje: {
    et: "Libista sõrmega külgedele, et näha teisi seadmeid",
    en: "Swipe sideways to see other devices",
    ru: "Проведите пальцем в сторону, чтобы увидеть другие устройства",
    fi: "Pyyhkäise sivulle nähdäksesi muut laitteet",
  },
  mida_teen: { et: "Mida ma teen", en: "What I do", ru: "Что я делаю", fi: "Mitä teen" },
  hinnakiri: { et: "Hinnakiri", en: "Price list", ru: "Прайс-лист", fi: "Hinnasto" },
  too: { et: "Töö", en: "Service", ru: "Работа", fi: "Työ" },
  hind: { et: "Hind", en: "Price", ru: "Цена", fi: "Hinta" },
  alates: { et: "alates", en: "from", ru: "от", fi: "alkaen" },
  hinnakiri_markus: {
    et: "Hinnad on töö hinnad. Varuosa hind lisandub ja sõltub seadme mudelist. Kodukülastusel lisandub väljakutsetasu {tasu} (ainult Tartu linnas). Tööle 3 kuud garantiid, uutele varuosadele tootja garantii.",
    en: "Prices are for labour. The cost of parts is added and depends on the model. Home visits include a call-out fee of {tasu} (Tartu city only). 3-month warranty on work, manufacturer's warranty on new parts.",
    ru: "Указана стоимость работы. Цена запчастей добавляется и зависит от модели. При выезде на дом добавляется плата за выезд {tasu} (только в черте Тарту). Гарантия на работу 3 месяца, на новые запчасти – гарантия производителя.",
    fi: "Hinnat ovat työn hintoja. Varaosien hinta lisätään ja riippuu mallista. Kotikäynnillä lisätään käyntimaksu {tasu} (vain Tarton kaupunki). Työllä 3 kuukauden takuu, uusilla varaosilla valmistajan takuu.",
  },
  ei_leia: {
    et: "Ei leidnud oma muret nimekirjast? Kirjuta või helista – leiame lahenduse.",
    en: "Didn't find your problem on the list? Write or call – we'll find a solution.",
    ru: "Не нашли свою проблему в списке? Напишите или позвоните – найдём решение.",
    fi: "Etkö löytänyt ongelmaasi listalta? Kirjoita tai soita – löydämme ratkaisun.",
  },
  seadet_ei_leitud: {
    et: "Seda seadet ei leitud.",
    en: "Device not found.",
    ru: "Устройство не найдено.",
    fi: "Laitetta ei löytynyt.",
  },
};

// =====================================================================
//  SEADMED
//  Iga seade on üks plokk. Igal seadmel on:
//    id        – lühike nimi lehe aadressi jaoks (ära muuda)
//    ikoon     – pildi nimi (ära muuda)
//    nimi      – seadme nimi
//    lyhike    – lühike kirjeldus avalehe kaardil
//    kirjeldus – pikem tekst seadme lehel
//    mida      – nimekiri asjadest, mida teen
//    hinnad    – hinnakiri. alates: true tähendab, et hinna ette tuleb "alates"
// =====================================================================
const SEADMED = [
  {
    id: "lauaarvutid",
    ikoon: "lauaarvuti",
    nimi: { et: "Lauaarvutid", en: "Desktop computers", ru: "Настольные компьютеры", fi: "Pöytäkoneet" },
    lyhike: {
      et: "Remont, puhastus, osade vahetus, uue arvuti kokkupanek.",
      en: "Repair, cleaning, part replacement, building new PCs.",
      ru: "Ремонт, чистка, замена комплектующих, сборка новых ПК.",
      fi: "Korjaus, puhdistus, osien vaihto, uusien koneiden kokoaminen.",
    },
    kirjeldus: {
      et: "Kui arvuti ei käivitu, on aeglane, kuumeneb või teeb müra, leian põhjuse ja parandan. Aitan ka arvutit uuendada või uue arvuti osadest kokku panna.",
      en: "If your computer won't start, is slow, overheats or is noisy, I find the cause and fix it. I can also upgrade your PC or build a new one from parts.",
      ru: "Если компьютер не включается, тормозит, перегревается или шумит – найду причину и устраню. Также помогу модернизировать ПК или собрать новый из комплектующих.",
      fi: "Jos tietokone ei käynnisty, on hidas, kuumenee tai pitää ääntä, etsin syyn ja korjaan sen. Autan myös päivittämään koneen tai kokoamaan uuden osista.",
    },
    mida: [
      { et: "Rikete otsimine ja parandamine", en: "Fault finding and repair", ru: "Диагностика и устранение неисправностей", fi: "Vianetsintä ja korjaus" },
      { et: "Tolmust puhastus ja termopasta vahetus", en: "Dust cleaning and thermal paste replacement", ru: "Чистка от пыли и замена термопасты", fi: "Pölynpuhdistus ja lämpötahnan vaihto" },
      { et: "Osade vahetus (ketas, mälu, toiteplokk jne)", en: "Part replacement (drive, memory, power supply etc.)", ru: "Замена комплектующих (диск, память, блок питания и т. д.)", fi: "Osien vaihto (levy, muisti, virtalähde jne.)" },
      { et: "Windowsi ja programmide paigaldus", en: "Windows and software installation", ru: "Установка Windows и программ", fi: "Windowsin ja ohjelmien asennus" },
      { et: "Uue arvuti kokkupanek osadest", en: "Building a new PC from parts", ru: "Сборка нового компьютера", fi: "Uuden koneen kokoaminen osista" },
    ],
    hinnad: [
      { nimi: { et: "Diagnostika", en: "Diagnostics", ru: "Диагностика", fi: "Vianmääritys" }, hind: "20 €" },
      { nimi: { et: "Puhastus + termopasta vahetus", en: "Cleaning + thermal paste", ru: "Чистка + замена термопасты", fi: "Puhdistus + lämpötahna" }, hind: "35 €" },
      { nimi: { et: "Windowsi paigaldus koos draiveritega", en: "Windows installation with drivers", ru: "Установка Windows с драйверами", fi: "Windows-asennus ajureineen" }, hind: "40 €" },
      { nimi: { et: "Viiruste ja pahavara eemaldus", en: "Virus and malware removal", ru: "Удаление вирусов", fi: "Virusten poisto" }, hind: "35 €" },
      { nimi: { et: "Osa vahetus (ketas, mälu, toiteplokk)", en: "Part replacement (drive, RAM, PSU)", ru: "Замена детали (диск, ОЗУ, БП)", fi: "Osan vaihto (levy, muisti, virtalähde)" }, hind: "25 €" },
      { nimi: { et: "Andmete ülekanne vanast arvutist", en: "Data transfer from old computer", ru: "Перенос данных со старого ПК", fi: "Tietojen siirto vanhasta koneesta" }, hind: "30 €" },
      { nimi: { et: "Uue arvuti kokkupanek", en: "Building a new PC", ru: "Сборка нового ПК", fi: "Uuden koneen kokoaminen" }, hind: "60 €" },
    ],
  },
  {
    id: "sulearvutid",
    ikoon: "sulearvuti",
    nimi: { et: "Sülearvutid", en: "Laptops", ru: "Ноутбуки", fi: "Kannettavat" },
    lyhike: {
      et: "Ekraan, klaviatuur, aku, laadimispesa, puhastus, tarkvara.",
      en: "Screen, keyboard, battery, charging port, cleaning, software.",
      ru: "Экран, клавиатура, аккумулятор, разъём зарядки, чистка, ПО.",
      fi: "Näyttö, näppäimistö, akku, latausliitäntä, puhdistus, ohjelmistot.",
    },
    kirjeldus: {
      et: "Parandan kõiki levinumaid sülearvuteid. Vahetan katkise ekraani või klaviatuuri, puhastan ülekuumeneva arvuti ja aitan ka siis, kui arvutile on vedelikku peale läinud.",
      en: "I repair all common laptop brands. I replace broken screens and keyboards, clean overheating laptops and help when liquid has been spilled.",
      ru: "Ремонтирую ноутбуки всех распространённых марок. Меняю разбитые экраны и клавиатуры, чищу перегревающиеся ноутбуки и помогаю после залития жидкостью.",
      fi: "Korjaan kaikkia yleisiä kannettavia. Vaihdan rikkinäisen näytön tai näppäimistön, puhdistan ylikuumenevat koneet ja autan, jos koneelle on kaatunut nestettä.",
    },
    mida: [
      { et: "Ekraani ja klaviatuuri vahetus", en: "Screen and keyboard replacement", ru: "Замена экрана и клавиатуры", fi: "Näytön ja näppäimistön vaihto" },
      { et: "Puhastus ja termopasta vahetus", en: "Cleaning and thermal paste replacement", ru: "Чистка и замена термопасты", fi: "Puhdistus ja lämpötahnan vaihto" },
      { et: "Aku ja laadimispesa vahetus", en: "Battery and charging port replacement", ru: "Замена аккумулятора и разъёма зарядки", fi: "Akun ja latausliitännän vaihto" },
      { et: "SSD-ketta paigaldus ja süsteemi kopeerimine", en: "SSD installation and system cloning", ru: "Установка SSD и перенос системы", fi: "SSD-levyn asennus ja järjestelmän kloonaus" },
      { et: "Vedelikukahjustuse puhastus", en: "Liquid damage cleaning", ru: "Устранение последствий залития", fi: "Nestevaurion puhdistus" },
    ],
    hinnad: [
      { nimi: { et: "Diagnostika", en: "Diagnostics", ru: "Диагностика", fi: "Vianmääritys" }, hind: "20 €" },
      { nimi: { et: "Puhastus + termopasta vahetus", en: "Cleaning + thermal paste", ru: "Чистка + замена термопасты", fi: "Puhdistus + lämpötahna" }, hind: "40 €" },
      { nimi: { et: "Windowsi paigaldus koos draiveritega", en: "Windows installation with drivers", ru: "Установка Windows с драйверами", fi: "Windows-asennus ajureineen" }, hind: "40 €" },
      { nimi: { et: "Ekraani vahetus", en: "Screen replacement", ru: "Замена экрана", fi: "Näytön vaihto" }, hind: "40 €", alates: true },
      { nimi: { et: "Klaviatuuri vahetus", en: "Keyboard replacement", ru: "Замена клавиатуры", fi: "Näppäimistön vaihto" }, hind: "35 €", alates: true },
      { nimi: { et: "SSD paigaldus + süsteemi kopeerimine", en: "SSD install + system cloning", ru: "Установка SSD + перенос системы", fi: "SSD-asennus + kloonaus" }, hind: "35 €" },
      { nimi: { et: "Laadimispesa remont", en: "Charging port repair", ru: "Ремонт разъёма зарядки", fi: "Latausliitännän korjaus" }, hind: "50 €", alates: true },
      { nimi: { et: "Vedelikukahjustuse puhastus", en: "Liquid damage cleaning", ru: "Чистка после залития", fi: "Nestevaurion puhdistus" }, hind: "60 €", alates: true },
    ],
  },
  {
    id: "nutitelefonid",
    ikoon: "telefon",
    nimi: { et: "Nutitelefonid", en: "Smartphones", ru: "Смартфоны", fi: "Älypuhelimet" },
    lyhike: {
      et: "Ekraani ja aku vahetus, laadimispesa, kaamera, tarkvara.",
      en: "Screen and battery replacement, charging port, camera, software.",
      ru: "Замена экрана и аккумулятора, разъём зарядки, камера, ПО.",
      fi: "Näytön ja akun vaihto, latausliitäntä, kamera, ohjelmistot.",
    },
    kirjeldus: {
      et: "Parandan nii Androidi telefone (Samsung, Xiaomi, Huawei jt) kui ka iPhone'e. Kõige sagedasemad tööd on katkise ekraani ja nõrgaks jäänud aku vahetus.",
      en: "I repair both Android phones (Samsung, Xiaomi, Huawei etc.) and iPhones. The most common jobs are replacing broken screens and worn-out batteries.",
      ru: "Ремонтирую телефоны Android (Samsung, Xiaomi, Huawei и др.) и iPhone. Чаще всего меняю разбитые экраны и изношенные аккумуляторы.",
      fi: "Korjaan sekä Android-puhelimia (Samsung, Xiaomi, Huawei ym.) että iPhoneja. Yleisimmät työt ovat rikkinäisen näytön ja heikentyneen akun vaihto.",
    },
    mida: [
      { et: "Ekraani vahetus", en: "Screen replacement", ru: "Замена экрана", fi: "Näytön vaihto" },
      { et: "Aku vahetus", en: "Battery replacement", ru: "Замена аккумулятора", fi: "Akun vaihto" },
      { et: "Laadimispesa puhastus ja vahetus", en: "Charging port cleaning and replacement", ru: "Чистка и замена разъёма зарядки", fi: "Latausliitännän puhdistus ja vaihto" },
      { et: "Kaamera ja tagaklaasi vahetus", en: "Camera and back glass replacement", ru: "Замена камеры и заднего стекла", fi: "Kameran ja takalasin vaihto" },
      { et: "Tarkvara taastamine ja andmete ülekanne", en: "Software restore and data transfer", ru: "Восстановление ПО и перенос данных", fi: "Ohjelmiston palautus ja tietojen siirto" },
    ],
    hinnad: [
      { nimi: { et: "Diagnostika", en: "Diagnostics", ru: "Диагностика", fi: "Vianmääritys" }, hind: "15 €" },
      { nimi: { et: "Ekraani vahetus", en: "Screen replacement", ru: "Замена экрана", fi: "Näytön vaihto" }, hind: "40 €", alates: true },
      { nimi: { et: "Aku vahetus", en: "Battery replacement", ru: "Замена аккумулятора", fi: "Akun vaihto" }, hind: "30 €", alates: true },
      { nimi: { et: "Laadimispesa puhastus / vahetus", en: "Charging port cleaning / replacement", ru: "Чистка / замена разъёма", fi: "Latausliitännän puhdistus / vaihto" }, hind: "30 €", alates: true },
      { nimi: { et: "Tagaklaasi vahetus", en: "Back glass replacement", ru: "Замена заднего стекла", fi: "Takalasin vaihto" }, hind: "45 €", alates: true },
      { nimi: { et: "Kaamera vahetus", en: "Camera replacement", ru: "Замена камеры", fi: "Kameran vaihto" }, hind: "35 €", alates: true },
      { nimi: { et: "Tarkvara taastamine", en: "Software restore", ru: "Восстановление ПО", fi: "Ohjelmiston palautus" }, hind: "30 €" },
      { nimi: { et: "Andmete ülekanne uude telefoni", en: "Data transfer to new phone", ru: "Перенос данных на новый телефон", fi: "Tietojen siirto uuteen puhelimeen" }, hind: "25 €" },
    ],
  },
  {
    id: "tahvelarvutid",
    ikoon: "tahvel",
    nimi: { et: "Tahvelarvutid", en: "Tablets", ru: "Планшеты", fi: "Tabletit" },
    lyhike: {
      et: "Puuteklaas, ekraan, aku, laadimispesa, tarkvara.",
      en: "Touch glass, screen, battery, charging port, software.",
      ru: "Сенсорное стекло, экран, аккумулятор, разъём, ПО.",
      fi: "Kosketuslasi, näyttö, akku, latausliitäntä, ohjelmistot.",
    },
    kirjeldus: {
      et: "Parandan iPade ja Androidi tahvelarvuteid. Kõige sagedamini vahetan katkist puuteklaasi või ekraani ja kulunud akut.",
      en: "I repair iPads and Android tablets. Most often I replace broken touch glass or screens and worn-out batteries.",
      ru: "Ремонтирую iPad и планшеты на Android. Чаще всего меняю разбитое сенсорное стекло, экран и изношенный аккумулятор.",
      fi: "Korjaan iPadeja ja Android-tabletteja. Useimmiten vaihdan rikkinäisen kosketuslasin tai näytön ja kuluneen akun.",
    },
    mida: [
      { et: "Puuteklaasi ja ekraani vahetus", en: "Touch glass and screen replacement", ru: "Замена сенсорного стекла и экрана", fi: "Kosketuslasin ja näytön vaihto" },
      { et: "Aku vahetus", en: "Battery replacement", ru: "Замена аккумулятора", fi: "Akun vaihto" },
      { et: "Laadimispesa remont", en: "Charging port repair", ru: "Ремонт разъёма зарядки", fi: "Latausliitännän korjaus" },
      { et: "Tarkvara taastamine", en: "Software restore", ru: "Восстановление ПО", fi: "Ohjelmiston palautus" },
    ],
    hinnad: [
      { nimi: { et: "Diagnostika", en: "Diagnostics", ru: "Диагностика", fi: "Vianmääritys" }, hind: "15 €" },
      { nimi: { et: "Puuteklaasi / ekraani vahetus", en: "Touch glass / screen replacement", ru: "Замена стекла / экрана", fi: "Kosketuslasin / näytön vaihto" }, hind: "50 €", alates: true },
      { nimi: { et: "Aku vahetus", en: "Battery replacement", ru: "Замена аккумулятора", fi: "Akun vaihto" }, hind: "40 €", alates: true },
      { nimi: { et: "Laadimispesa remont", en: "Charging port repair", ru: "Ремонт разъёма зарядки", fi: "Latausliitännän korjaus" }, hind: "40 €", alates: true },
      { nimi: { et: "Tarkvara taastamine", en: "Software restore", ru: "Восстановление ПО", fi: "Ohjelmiston palautus" }, hind: "30 €" },
    ],
  },
  {
    id: "komponendid",
    ikoon: "kiip",
    nimi: { et: "Emaplaadid ja videokaardid", en: "Motherboards and graphics cards", ru: "Материнские платы и видеокарты", fi: "Emolevyt ja näytönohjaimet" },
    lyhike: {
      et: "Remont komponendi tasemel: jootmine, toiteahelad, vedelikukahjustus.",
      en: "Component-level repair: soldering, power circuits, liquid damage.",
      ru: "Ремонт на уровне компонентов: пайка, цепи питания, залитие.",
      fi: "Komponenttitason korjaus: juottaminen, virtapiirit, nestevauriot.",
    },
    kirjeldus: {
      et: "Kui teised ütlevad, et emaplaat või videokaart tuleb välja vahetada, saab selle sageli hoopis parandada. Otsin üles katkise komponendi ja vahetan selle – see on tavaliselt odavam kui uus plaat.",
      en: "When others say a motherboard or graphics card must be replaced, it can often be repaired instead. I find the faulty component and replace it – usually cheaper than a new board.",
      ru: "Когда говорят, что материнскую плату или видеокарту нужно менять, её часто можно отремонтировать. Нахожу неисправный компонент и заменяю его – обычно это дешевле новой платы.",
      fi: "Kun muut sanovat, että emolevy tai näytönohjain on vaihdettava, sen voi usein korjata. Etsin viallisen komponentin ja vaihdan sen – yleensä edullisempaa kuin uusi levy.",
    },
    mida: [
      { et: "Emaplaadi rikete otsimine", en: "Motherboard fault finding", ru: "Поиск неисправностей материнской платы", fi: "Emolevyn vianetsintä" },
      { et: "Toiteahelate remont", en: "Power circuit repair", ru: "Ремонт цепей питания", fi: "Virtapiirien korjaus" },
      { et: "Pistikute, kondensaatorite ja kiipide vahetus", en: "Replacing connectors, capacitors and chips", ru: "Замена разъёмов, конденсаторов и микросхем", fi: "Liittimien, kondensaattorien ja piirien vaihto" },
      { et: "Videokaardi puhastus ja termopatjade vahetus", en: "Graphics card cleaning and thermal pad replacement", ru: "Чистка видеокарты и замена термопрокладок", fi: "Näytönohjaimen puhdistus ja lämpötyynyjen vaihto" },
      { et: "Vedelikukahjustuse parandus", en: "Liquid damage repair", ru: "Ремонт после залития", fi: "Nestevaurion korjaus" },
    ],
    hinnad: [
      { nimi: { et: "Emaplaadi / videokaardi diagnostika", en: "Motherboard / GPU diagnostics", ru: "Диагностика платы / видеокарты", fi: "Emolevyn / näytönohjaimen vianmääritys" }, hind: "30 €" },
      { nimi: { et: "Videokaardi puhastus + termopasta ja -padjad", en: "GPU cleaning + thermal paste and pads", ru: "Чистка видеокарты + термопаста и прокладки", fi: "Näytönohjaimen puhdistus + tahna ja tyynyt" }, hind: "45 €" },
      { nimi: { et: "Pistiku või komponendi jootmine", en: "Connector or component soldering", ru: "Пайка разъёма или компонента", fi: "Liittimen tai komponentin juotos" }, hind: "40 €", alates: true },
      { nimi: { et: "Lauaarvuti emaplaadi remont", en: "Desktop motherboard repair", ru: "Ремонт материнской платы ПК", fi: "Pöytäkoneen emolevyn korjaus" }, hind: "60 €", alates: true },
      { nimi: { et: "Videokaardi remont", en: "Graphics card repair", ru: "Ремонт видеокарты", fi: "Näytönohjaimen korjaus" }, hind: "60 €", alates: true },
      { nimi: { et: "Sülearvuti emaplaadi remont", en: "Laptop motherboard repair", ru: "Ремонт платы ноутбука", fi: "Kannettavan emolevyn korjaus" }, hind: "90 €", alates: true },
    ],
  },
  {
    id: "konsoolid",
    ikoon: "konsool",
    nimi: { et: "Mängukonsoolid", en: "Game consoles", ru: "Игровые приставки", fi: "Pelikonsolit" },
    lyhike: {
      et: "PlayStation, Xbox, Nintendo: puhastus, HDMI pesa, pultide remont.",
      en: "PlayStation, Xbox, Nintendo: cleaning, HDMI port, controller repair.",
      ru: "PlayStation, Xbox, Nintendo: чистка, разъём HDMI, ремонт джойстиков.",
      fi: "PlayStation, Xbox, Nintendo: puhdistus, HDMI-liitäntä, ohjainten korjaus.",
    },
    kirjeldus: {
      et: "Remondin ja hooldan PlayStationi, Xboxi ja Nintendo konsoole. Kui konsool on mürarikas, kuumeneb, ei näita pilti või pult liigub ise, leian põhjuse ja parandan.",
      en: "I repair and service PlayStation, Xbox and Nintendo consoles. If your console is noisy, overheats, shows no picture or the controller drifts, I find the cause and fix it.",
      ru: "Ремонтирую и обслуживаю приставки PlayStation, Xbox и Nintendo. Если приставка шумит, перегревается, нет изображения или джойстик «дрейфует» – найду причину и устраню.",
      fi: "Korjaan ja huollan PlayStation-, Xbox- ja Nintendo-konsoleita. Jos konsoli pitää ääntä, kuumenee, ei näytä kuvaa tai ohjain liikkuu itsestään, etsin syyn ja korjaan sen.",
    },
    mida: [
      { et: "Tolmust puhastus ja termopasta vahetus", en: "Dust cleaning and thermal paste replacement", ru: "Чистка от пыли и замена термопасты", fi: "Pölynpuhdistus ja lämpötahnan vaihto" },
      { et: "HDMI pesa vahetus (pilti ei tule)", en: "HDMI port replacement (no picture)", ru: "Замена разъёма HDMI (нет изображения)", fi: "HDMI-liitännän vaihto (ei kuvaa)" },
      { et: "Pultide remont (juhtkang liigub ise, nupud ei tööta)", en: "Controller repair (stick drift, buttons not working)", ru: "Ремонт джойстиков (дрейф стика, не работают кнопки)", fi: "Ohjainten korjaus (tikku liikkuu itsestään, napit eivät toimi)" },
      { et: "Plaadilugeja ja toiteploki remont", en: "Disc drive and power supply repair", ru: "Ремонт дисковода и блока питания", fi: "Levyaseman ja virtalähteen korjaus" },
      { et: "Kõvaketta / SSD vahetus ja süsteemi taastamine", en: "Hard drive / SSD replacement and system restore", ru: "Замена диска / SSD и восстановление системы", fi: "Kiintolevyn / SSD:n vaihto ja järjestelmän palautus" },
    ],
    hinnad: [
      { nimi: { et: "Diagnostika", en: "Diagnostics", ru: "Диагностика", fi: "Vianmääritys" }, hind: "20 €" },
      { nimi: { et: "Puhastus + termopasta vahetus", en: "Cleaning + thermal paste", ru: "Чистка + замена термопасты", fi: "Puhdistus + lämpötahna" }, hind: "45 €" },
      { nimi: { et: "HDMI pesa vahetus", en: "HDMI port replacement", ru: "Замена разъёма HDMI", fi: "HDMI-liitännän vaihto" }, hind: "60 €", alates: true },
      { nimi: { et: "Puldi juhtkangi vahetus", en: "Controller stick replacement", ru: "Замена стика джойстика", fi: "Ohjaimen tikun vaihto" }, hind: "25 €", alates: true },
      { nimi: { et: "Plaadilugeja remont", en: "Disc drive repair", ru: "Ремонт дисковода", fi: "Levyaseman korjaus" }, hind: "50 €", alates: true },
      { nimi: { et: "Toiteploki remont", en: "Power supply repair", ru: "Ремонт блока питания", fi: "Virtalähteen korjaus" }, hind: "55 €", alates: true },
      { nimi: { et: "Ketta vahetus + süsteemi taastamine", en: "Drive replacement + system restore", ru: "Замена диска + восстановление системы", fi: "Levyn vaihto + järjestelmän palautus" }, hind: "35 €" },
    ],
  },
];

// =====================================================================
//  KKK – KORDUMA KIPPUVAD KÜSIMUSED
//  k = küsimus, v = vastus. Uue küsimuse lisamiseks kopeeri üks plokk.
// =====================================================================
const KKK = [
  {
    k: {
      et: "Kas mu failid ja pildid jäävad remondi ajal alles?",
      en: "Will my files and photos be kept during the repair?",
      ru: "Сохранятся ли мои файлы и фото во время ремонта?",
      fi: "Säilyvätkö tiedostoni ja kuvani korjauksen aikana?",
    },
    v: {
      et: "Enamasti jah – suurem osa remonditöödest andmeid ei puuduta. Kui töö võib andmeid ohustada (nt ketta vahetus või süsteemi uuesti paigaldamine), ütlen seda enne ja vajadusel teen varukoopia.",
      en: "In most cases, yes – most repairs don't touch your data. If a job could put data at risk (e.g. replacing a drive or reinstalling the system), I tell you beforehand and make a backup if needed.",
      ru: "Чаще всего да – большинство работ не затрагивает данные. Если работа может поставить данные под угрозу (например, замена диска или переустановка системы), я заранее предупрежу и при необходимости сделаю резервную копию.",
      fi: "Useimmiten kyllä – suurin osa korjauksista ei koske tietoihin. Jos työ voi vaarantaa tiedot (esim. levyn vaihto tai järjestelmän uudelleenasennus), kerron siitä etukäteen ja teen tarvittaessa varmuuskopion.",
    },
  },
  {
    k: {
      et: "Kas tasub parandada või osta uus?",
      en: "Is it worth repairing or should I buy a new one?",
      ru: "Стоит ли ремонтировать или лучше купить новое?",
      fi: "Kannattaako korjata vai ostaa uusi?",
    },
    v: {
      et: "Ütlen ausalt. Kui remont maksab peaaegu sama palju kui uus seade või seade on nii vana, et remont ei tasu end ära, ütlen seda kohe ja aitan leida parema lahenduse.",
      en: "I'll tell you honestly. If the repair costs almost as much as a new device, or the device is too old for the repair to pay off, I'll say so right away and help you find a better solution.",
      ru: "Скажу честно. Если ремонт стоит почти как новое устройство или устройство слишком старое, чтобы ремонт окупился, сразу об этом скажу и помогу найти лучшее решение.",
      fi: "Kerron rehellisesti. Jos korjaus maksaa lähes yhtä paljon kuin uusi laite tai laite on niin vanha, ettei korjaus kannata, sanon sen heti ja autan löytämään paremman ratkaisun.",
    },
  },
  {
    k: {
      et: "Mis saab siis, kui seadet ei õnnestu parandada?",
      en: "What if the device can't be repaired?",
      ru: "Что, если устройство не удастся отремонтировать?",
      fi: "Entä jos laitetta ei saada korjattua?",
    },
    v: {
      et: "Siis maksad ainult diagnostika eest. Selgitan, mis on viga ja millised on edasised võimalused.",
      en: "Then you only pay for the diagnostics. I explain what the fault is and what your options are.",
      ru: "Тогда вы платите только за диагностику. Я объясню, в чём неисправность и какие есть варианты.",
      fi: "Silloin maksat vain vianmäärityksestä. Selitän, mikä vika on ja mitkä ovat vaihtoehdot.",
    },
  },
  {
    k: {
      et: "Kui kaua remont aega võtab?",
      en: "How long does a repair take?",
      ru: "Сколько времени занимает ремонт?",
      fi: "Kauanko korjaus kestää?",
    },
    v: {
      et: "Lihtsamad tööd (puhastus, tarkvara, aku vahetus) saavad sageli valmis samal päeval. Kui varuosa tuleb tellida, võtab see tavaliselt mõnest päevast kuni nädalani. Ütlen aja enne töö algust.",
      en: "Simple jobs (cleaning, software, battery replacement) are often done the same day. If a part has to be ordered, it usually takes a few days to a week. I tell you the time before starting.",
      ru: "Простые работы (чистка, ПО, замена аккумулятора) часто выполняются в тот же день. Если нужно заказать запчасть, обычно это занимает от нескольких дней до недели. Срок назову до начала работ.",
      fi: "Yksinkertaiset työt (puhdistus, ohjelmistot, akun vaihto) valmistuvat usein samana päivänä. Jos varaosa on tilattava, se kestää yleensä muutamasta päivästä viikkoon. Kerron ajan ennen työn aloittamista.",
    },
  },
  {
    k: {
      et: "Kas kasutad originaalvaruosi?",
      en: "Do you use original parts?",
      ru: "Вы используете оригинальные запчасти?",
      fi: "Käytätkö alkuperäisiä varaosia?",
    },
    v: {
      et: "Võimalusel pakun valikut: originaalosa või kvaliteetne asendusosa, mis on tavaliselt odavam. Selgitan erinevuse ja hinna ning sina otsustad.",
      en: "Where possible I offer a choice: an original part or a quality replacement part, which is usually cheaper. I explain the difference and the price, and you decide.",
      ru: "По возможности предлагаю выбор: оригинальная запчасть или качественный аналог, который обычно дешевле. Объясню разницу и цену, а решение за вами.",
      fi: "Mahdollisuuksien mukaan tarjoan valinnan: alkuperäinen osa tai laadukas korvaava osa, joka on yleensä edullisempi. Selitän eron ja hinnan, ja sinä päätät.",
    },
  },
  {
    k: {
      et: "Kas pean seadme ise sinu juurde tooma?",
      en: "Do I have to bring the device to you?",
      ru: "Нужно ли самому привозить устройство?",
      fi: "Pitääkö minun tuoda laite sinulle?",
    },
    v: {
      et: "Ei pea. Tartu linnas tulen ka koju või kontorisse – väljakutsetasu on {tasu}. Kui tood seadme ise, väljakutsetasu ei ole.",
      en: "No. Within Tartu I also come to your home or office – the call-out fee is {tasu}. If you bring the device yourself, there is no call-out fee.",
      ru: "Нет. В пределах Тарту приеду домой или в офис – плата за выезд {tasu}. Если привезёте устройство сами, платы за выезд нет.",
      fi: "Ei tarvitse. Tarton kaupungissa tulen myös kotiin tai toimistoon – käyntimaksu on {tasu}. Jos tuot laitteen itse, käyntimaksua ei ole.",
    },
  },
  {
    k: {
      et: "Kas parandad ka vanemaid seadmeid?",
      en: "Do you repair older devices too?",
      ru: "Ремонтируете ли вы старые устройства?",
      fi: "Korjaatko myös vanhempia laitteita?",
    },
    v: {
      et: "Jah. Vanemate seadmete puhul sõltub palju sellest, kas varuosi on veel saada – selle kontrollin enne ja annan teada.",
      en: "Yes. With older devices a lot depends on whether parts are still available – I check this beforehand and let you know.",
      ru: "Да. Для старых устройств многое зависит от наличия запчастей – я заранее это проверю и сообщу.",
      fi: "Kyllä. Vanhemmissa laitteissa paljon riippuu siitä, onko varaosia vielä saatavilla – tarkistan sen etukäteen ja kerron.",
    },
  },
];

// =====================================================================
//  "LEIA OMA MURE" ABILINE
//  Iga seadme jaoks nimekiri muredest:
//    mure   – mida klient näeb (nupu tekst)
//    pohjus – võimalik põhjus
//    too    – hinnakirja rea nimi (eesti keeles, täpselt nagu hinnakirjas).
//             Selle järgi leitakse hind automaatselt.
// =====================================================================
const MURED = {
  lauaarvutid: [
    {
      mure: { et: "Ei lülitu sisse", en: "Won't turn on", ru: "Не включается", fi: "Ei käynnisty" },
      pohjus: {
        et: "Sageli on rikkis toiteplokk, harvem emaplaat. Diagnostikaga selgub täpne põhjus.",
        en: "Often a faulty power supply, less often the motherboard. Diagnostics reveal the exact cause.",
        ru: "Часто неисправен блок питания, реже материнская плата. Диагностика покажет точную причину.",
        fi: "Usein vika on virtalähteessä, harvemmin emolevyssä. Vianmääritys selvittää tarkan syyn.",
      },
      too: "Diagnostika",
    },
    {
      mure: { et: "On väga aeglane", en: "Very slow", ru: "Очень медленный", fi: "Todella hidas" },
      pohjus: {
        et: "Tavaliselt aitab vana kõvaketta asendamine kiire SSD-kettaga või mälu lisamine.",
        en: "Usually replacing an old hard drive with a fast SSD or adding memory helps.",
        ru: "Обычно помогает замена старого жёсткого диска на быстрый SSD или добавление памяти.",
        fi: "Yleensä auttaa vanhan kiintolevyn vaihto nopeaan SSD-levyyn tai muistin lisääminen.",
      },
      too: "Osa vahetus (ketas, mälu, toiteplokk)",
    },
    {
      mure: { et: "Teeb müra või kuumeneb", en: "Noisy or overheating", ru: "Шумит или греется", fi: "Pitää ääntä tai kuumenee" },
      pohjus: {
        et: "Tõenäoliselt on sees tolm ja termopasta on kuivanud. Puhastus teeb arvuti jälle vaikseks ja jahedaks.",
        en: "Most likely dust inside and dried thermal paste. Cleaning makes it quiet and cool again.",
        ru: "Скорее всего, внутри пыль и высохла термопаста. Чистка вернёт тишину и нормальную температуру.",
        fi: "Todennäköisesti sisällä on pölyä ja lämpötahna on kuivunut. Puhdistus tekee koneesta taas hiljaisen ja viileän.",
      },
      too: "Puhastus + termopasta vahetus",
    },
    {
      mure: { et: "Viirused või imelikud aknad", en: "Viruses or strange pop-ups", ru: "Вирусы или странные окна", fi: "Viruksia tai outoja ikkunoita" },
      pohjus: {
        et: "Arvutisse on tõenäoliselt sattunud pahavara. Eemaldan selle ja kontrollin, et arvuti oleks puhas.",
        en: "Malware has probably got onto the computer. I remove it and make sure the computer is clean.",
        ru: "Вероятно, на компьютер попала вредоносная программа. Удалю её и проверю, что компьютер чист.",
        fi: "Koneelle on todennäköisesti päässyt haittaohjelma. Poistan sen ja varmistan, että kone on puhdas.",
      },
      too: "Viiruste ja pahavara eemaldus",
    },
    {
      mure: { et: "Windows ei käivitu", en: "Windows won't start", ru: "Windows не загружается", fi: "Windows ei käynnisty" },
      pohjus: {
        et: "Süsteem võib olla rikutud või ketas vigane. Vajadusel paigaldan Windowsi uuesti ja püüan failid päästa.",
        en: "The system may be corrupted or the drive faulty. If needed I reinstall Windows and try to save your files.",
        ru: "Система может быть повреждена или диск неисправен. При необходимости переустановлю Windows и постараюсь сохранить файлы.",
        fi: "Järjestelmä voi olla vioittunut tai levy viallinen. Tarvittaessa asennan Windowsin uudelleen ja yritän pelastaa tiedostot.",
      },
      too: "Windowsi paigaldus koos draiveritega",
    },
  ],
  sulearvutid: [
    {
      mure: { et: "Ekraan on katki", en: "Broken screen", ru: "Разбит экран", fi: "Näyttö rikki" },
      pohjus: {
        et: "Katkine või triipudega ekraan tuleb tavaliselt välja vahetada. Hind sõltub mudelist.",
        en: "A broken or striped screen usually needs replacing. The price depends on the model.",
        ru: "Разбитый экран или экран с полосами обычно нужно менять. Цена зависит от модели.",
        fi: "Rikkinäinen tai raidallinen näyttö on yleensä vaihdettava. Hinta riippuu mallista.",
      },
      too: "Ekraani vahetus",
    },
    {
      mure: { et: "Kuumeneb, ventilaator müriseb", en: "Overheats, fan is loud", ru: "Греется, шумит вентилятор", fi: "Kuumenee, tuuletin pitää ääntä" },
      pohjus: {
        et: "Jahutus on tolmu täis ja termopasta kuivanud. Puhastus lahendab selle enamasti täielikult.",
        en: "The cooling is clogged with dust and the thermal paste has dried. Cleaning usually solves it completely.",
        ru: "Система охлаждения забита пылью, термопаста высохла. Чистка обычно полностью решает проблему.",
        fi: "Jäähdytys on täynnä pölyä ja lämpötahna kuivunut. Puhdistus ratkaisee asian yleensä kokonaan.",
      },
      too: "Puhastus + termopasta vahetus",
    },
    {
      mure: { et: "Ei lae", en: "Won't charge", ru: "Не заряжается", fi: "Ei lataudu" },
      pohjus: {
        et: "Viga võib olla laadijas, laadimispesas või akus. Kontrollin kõik üle ja ütlen, mida on vaja vahetada.",
        en: "The fault may be in the charger, the charging port or the battery. I check everything and tell you what needs replacing.",
        ru: "Неисправность может быть в зарядке, разъёме или аккумуляторе. Проверю всё и скажу, что нужно заменить.",
        fi: "Vika voi olla laturissa, latausliitännässä tai akussa. Tarkistan kaiken ja kerron, mitä pitää vaihtaa.",
      },
      too: "Laadimispesa remont",
    },
    {
      mure: { et: "Vedelik läks peale", en: "Liquid spilled on it", ru: "Залит жидкостью", fi: "Nestettä kaatui päälle" },
      pohjus: {
        et: "Lülita arvuti kohe välja ja ära käivita seda uuesti. Mida kiiremini selle tood, seda suurem on võimalus see päästa.",
        en: "Turn the laptop off right away and don't switch it on again. The sooner you bring it, the better the chance of saving it.",
        ru: "Сразу выключите ноутбук и не включайте его снова. Чем быстрее привезёте, тем выше шанс его спасти.",
        fi: "Sammuta kone heti äläkä käynnistä sitä uudelleen. Mitä nopeammin tuot sen, sitä paremmat mahdollisuudet sen pelastamiseen.",
      },
      too: "Vedelikukahjustuse puhastus",
    },
    {
      mure: { et: "Klahvid ei tööta", en: "Keys don't work", ru: "Не работают клавиши", fi: "Näppäimet eivät toimi" },
      pohjus: {
        et: "Kui mitu klahvi ei tööta või need jäävad kinni, tuleb klaviatuur tavaliselt välja vahetada.",
        en: "If several keys don't work or they stick, the keyboard usually needs replacing.",
        ru: "Если не работают или залипают несколько клавиш, клавиатуру обычно нужно заменить.",
        fi: "Jos useampi näppäin ei toimi tai ne juuttuvat, näppäimistö on yleensä vaihdettava.",
      },
      too: "Klaviatuuri vahetus",
    },
    {
      mure: { et: "On väga aeglane", en: "Very slow", ru: "Очень медленный", fi: "Todella hidas" },
      pohjus: {
        et: "Vana kõvaketta asendamine SSD-kettaga teeb sülearvuti mitu korda kiiremaks. Failid ja programmid jäävad alles.",
        en: "Replacing an old hard drive with an SSD makes a laptop several times faster. Your files and programs stay.",
        ru: "Замена старого жёсткого диска на SSD ускоряет ноутбук в разы. Файлы и программы сохраняются.",
        fi: "Vanhan kiintolevyn vaihto SSD-levyyn tekee koneesta moninkertaisesti nopeamman. Tiedostot ja ohjelmat säilyvät.",
      },
      too: "SSD paigaldus + süsteemi kopeerimine",
    },
  ],
  nutitelefonid: [
    {
      mure: { et: "Ekraan on katki", en: "Broken screen", ru: "Разбит экран", fi: "Näyttö rikki" },
      pohjus: {
        et: "Katkine klaas või ekraan vahetatakse välja. Hind sõltub telefoni mudelist.",
        en: "Broken glass or a broken display is replaced. The price depends on the phone model.",
        ru: "Разбитое стекло или дисплей заменяется. Цена зависит от модели телефона.",
        fi: "Rikkinäinen lasi tai näyttö vaihdetaan. Hinta riippuu puhelimen mallista.",
      },
      too: "Ekraani vahetus",
    },
    {
      mure: { et: "Aku tühjeneb kiiresti", en: "Battery drains fast", ru: "Быстро садится батарея", fi: "Akku tyhjenee nopeasti" },
      pohjus: {
        et: "Aku on kulunud. Uus aku annab telefonile jälle terve päeva tööaega.",
        en: "The battery is worn out. A new battery gives the phone a full day of use again.",
        ru: "Аккумулятор изношен. С новым аккумулятором телефон снова проработает целый день.",
        fi: "Akku on kulunut. Uusi akku antaa puhelimelle taas koko päivän käyttöajan.",
      },
      too: "Aku vahetus",
    },
    {
      mure: { et: "Ei lae", en: "Won't charge", ru: "Не заряжается", fi: "Ei lataudu" },
      pohjus: {
        et: "Sageli on laadimispesas tolm või ebemed. Tihti aitab juba puhastus, vahel tuleb pesa vahetada.",
        en: "Often there is dust or lint in the charging port. Cleaning often helps, sometimes the port must be replaced.",
        ru: "Часто в разъёме зарядки пыль или ворс. Нередко помогает чистка, иногда разъём нужно заменить.",
        fi: "Latausliitännässä on usein pölyä tai nukkaa. Puhdistus auttaa usein, joskus liitäntä on vaihdettava.",
      },
      too: "Laadimispesa puhastus / vahetus",
    },
    {
      mure: { et: "Kukkus vette", en: "Dropped in water", ru: "Упал в воду", fi: "Putosi veteen" },
      pohjus: {
        et: "Lülita telefon välja, ära lae seda ega pane riisi sisse. Too see võimalikult kiiresti, siis on suurem võimalus see päästa.",
        en: "Turn the phone off, don't charge it and don't put it in rice. Bring it as soon as possible for the best chance of saving it.",
        ru: "Выключите телефон, не заряжайте и не кладите в рис. Привезите как можно скорее – так больше шансов его спасти.",
        fi: "Sammuta puhelin, älä lataa sitä äläkä laita riisiin. Tuo se mahdollisimman pian, niin pelastamisen mahdollisuus on suurempi.",
      },
      too: "Diagnostika",
    },
    {
      mure: { et: "Tagaklaas on katki", en: "Broken back glass", ru: "Разбито заднее стекло", fi: "Takalasi rikki" },
      pohjus: {
        et: "Katkine tagaklaas laseb sisse niiskust ja tolmu. Selle vahetamine kaitseb telefoni.",
        en: "Broken back glass lets in moisture and dust. Replacing it protects the phone.",
        ru: "Через разбитое заднее стекло внутрь попадают влага и пыль. Замена защитит телефон.",
        fi: "Rikkinäisestä takalasista pääsee sisään kosteutta ja pölyä. Vaihto suojaa puhelinta.",
      },
      too: "Tagaklaasi vahetus",
    },
    {
      mure: { et: "Hangub või taaskäivitub", en: "Freezes or restarts", ru: "Зависает или перезагружается", fi: "Jumittuu tai käynnistyy uudelleen" },
      pohjus: {
        et: "Sageli on põhjus tarkvaras. Taastan tarkvara ja kontrollin, et aku ja muu riistvara oleks korras.",
        en: "Often the cause is software. I restore the software and check that the battery and other hardware are fine.",
        ru: "Часто причина в программном обеспечении. Восстановлю ПО и проверю аккумулятор и другое железо.",
        fi: "Syy on usein ohjelmistossa. Palautan ohjelmiston ja tarkistan, että akku ja muu laitteisto ovat kunnossa.",
      },
      too: "Tarkvara taastamine",
    },
  ],
  tahvelarvutid: [
    {
      mure: { et: "Klaas või ekraan on katki", en: "Broken glass or screen", ru: "Разбито стекло или экран", fi: "Lasi tai näyttö rikki" },
      pohjus: {
        et: "Mõnel mudelil saab vahetada ainult klaasi, mõnel tuleb vahetada kogu ekraan. Ütlen enne täpse hinna.",
        en: "On some models only the glass can be replaced, on others the whole screen. I tell you the exact price first.",
        ru: "На одних моделях можно заменить только стекло, на других – весь экран. Сначала назову точную цену.",
        fi: "Joissain malleissa voi vaihtaa pelkän lasin, toisissa koko näytön. Kerron tarkan hinnan ensin.",
      },
      too: "Puuteklaasi / ekraani vahetus",
    },
    {
      mure: { et: "Aku tühjeneb kiiresti", en: "Battery drains fast", ru: "Быстро садится батарея", fi: "Akku tyhjenee nopeasti" },
      pohjus: {
        et: "Aku on kulunud. Uue akuga töötab tahvel jälle kaua.",
        en: "The battery is worn out. With a new battery the tablet lasts long again.",
        ru: "Аккумулятор изношен. С новым аккумулятором планшет снова работает долго.",
        fi: "Akku on kulunut. Uudella akulla tabletti kestää taas pitkään.",
      },
      too: "Aku vahetus",
    },
    {
      mure: { et: "Ei lae", en: "Won't charge", ru: "Не заряжается", fi: "Ei lataudu" },
      pohjus: {
        et: "Tavaliselt on viga laadimispesas või kaablis. Kontrollin ja parandan.",
        en: "Usually the fault is in the charging port or cable. I check and repair it.",
        ru: "Обычно неисправен разъём зарядки или кабель. Проверю и отремонтирую.",
        fi: "Yleensä vika on latausliitännässä tai kaapelissa. Tarkistan ja korjaan.",
      },
      too: "Laadimispesa remont",
    },
    {
      mure: { et: "Hangub või on aeglane", en: "Freezes or is slow", ru: "Зависает или тормозит", fi: "Jumittuu tai on hidas" },
      pohjus: {
        et: "Sageli aitab tarkvara taastamine. Enne seda salvestan võimalusel su andmed.",
        en: "Restoring the software often helps. Before that I save your data if possible.",
        ru: "Часто помогает восстановление ПО. Перед этим по возможности сохраню ваши данные.",
        fi: "Ohjelmiston palautus auttaa usein. Sitä ennen tallennan tietosi, jos mahdollista.",
      },
      too: "Tarkvara taastamine",
    },
  ],
  komponendid: [
    {
      mure: { et: "Mängides tekivad pildivead", en: "Graphics glitches while gaming", ru: "Артефакты в играх", fi: "Kuvavirheitä pelatessa" },
      pohjus: {
        et: "Ruudud, triibud või kaduv pilt viitavad tavaliselt videokaardi rikkele. Sageli saab selle parandada.",
        en: "Squares, stripes or a disappearing picture usually point to a graphics card fault. It can often be repaired.",
        ru: "Квадраты, полосы или пропадающее изображение обычно указывают на неисправность видеокарты. Часто её можно отремонтировать.",
        fi: "Neliöt, raidat tai katoava kuva viittaavat yleensä näytönohjaimen vikaan. Sen voi usein korjata.",
      },
      too: "Videokaardi remont",
    },
    {
      mure: { et: "Videokaart on kuum ja vali", en: "Graphics card hot and loud", ru: "Видеокарта горячая и шумная", fi: "Näytönohjain kuuma ja äänekäs" },
      pohjus: {
        et: "Termopasta ja termopadjad on aja jooksul kuivanud. Nende vahetus langetab temperatuuri ja müra.",
        en: "The thermal paste and pads have dried over time. Replacing them lowers temperature and noise.",
        ru: "Термопаста и термопрокладки со временем высохли. Их замена снижает температуру и шум.",
        fi: "Lämpötahna ja lämpötyynyt ovat ajan myötä kuivuneet. Niiden vaihto laskee lämpötilaa ja melua.",
      },
      too: "Videokaardi puhastus + termopasta ja -padjad",
    },
    {
      mure: { et: "Ei käivitu pärast vedelikku või äikest", en: "Dead after liquid or a power surge", ru: "Не включается после залития или грозы", fi: "Ei käynnisty nesteen tai ukkosen jälkeen" },
      pohjus: {
        et: "Tõenäoliselt on emaplaadil mõni komponent läbi põlenud. Diagnostikaga leian selle üles.",
        en: "A component on the motherboard has probably burned out. I find it with diagnostics.",
        ru: "Вероятно, на материнской плате сгорел какой-то компонент. Найду его при диагностике.",
        fi: "Emolevyltä on todennäköisesti palanut jokin komponentti. Löydän sen vianmäärityksellä.",
      },
      too: "Emaplaadi / videokaardi diagnostika",
    },
    {
      mure: { et: "Pesa või pistik on katki", en: "Broken port or connector", ru: "Сломан разъём", fi: "Liitäntä tai liitin rikki" },
      pohjus: {
        et: "Katkise USB-, toite- või muu pesa saab tavaliselt uue vastu välja joota.",
        en: "A broken USB, power or other port can usually be desoldered and replaced with a new one.",
        ru: "Сломанный USB-, силовой или другой разъём обычно можно перепаять на новый.",
        fi: "Rikkinäinen USB-, virta- tai muu liitäntä voidaan yleensä juottaa uuteen.",
      },
      too: "Pistiku või komponendi jootmine",
    },
  ],
  konsoolid: [
    {
      mure: { et: "Pilti ei tule", en: "No picture", ru: "Нет изображения", fi: "Ei kuvaa" },
      pohjus: {
        et: "Sageli on HDMI pesa kahjustunud, näiteks kui konsooli on liigutatud nii, et kaabel oli küljes.",
        en: "Often the HDMI port is damaged, for example if the console was moved with the cable attached.",
        ru: "Часто повреждён разъём HDMI, например если приставку двигали с подключённым кабелем.",
        fi: "Usein HDMI-liitäntä on vaurioitunut, esimerkiksi jos konsolia on liikutettu kaapelin ollessa kiinni.",
      },
      too: "HDMI pesa vahetus",
    },
    {
      mure: { et: "Müriseb või lülitub ise välja", en: "Loud or shuts itself off", ru: "Шумит или сама выключается", fi: "Pitää ääntä tai sammuu itsestään" },
      pohjus: {
        et: "Konsool kuumeneb üle, sest sees on tolm ja termopasta on kuivanud. Puhastus aitab.",
        en: "The console overheats because of dust inside and dried thermal paste. Cleaning helps.",
        ru: "Приставка перегревается из-за пыли и высохшей термопасты. Поможет чистка.",
        fi: "Konsoli ylikuumenee sisällä olevan pölyn ja kuivuneen lämpötahnan takia. Puhdistus auttaa.",
      },
      too: "Puhastus + termopasta vahetus",
    },
    {
      mure: { et: "Pult liigub ise", en: "Controller drifts", ru: "Джойстик «дрейфует»", fi: "Ohjain liikkuu itsestään" },
      pohjus: {
        et: "Puldi juhtkang on kulunud. Juhtkangi vahetus on palju odavam kui uus pult.",
        en: "The controller stick is worn. Replacing the stick is much cheaper than a new controller.",
        ru: "Стик джойстика изношен. Замена стика намного дешевле нового джойстика.",
        fi: "Ohjaimen tikku on kulunut. Tikun vaihto on paljon edullisempaa kuin uusi ohjain.",
      },
      too: "Puldi juhtkangi vahetus",
    },
    {
      mure: { et: "Ei loe plaate", en: "Won't read discs", ru: "Не читает диски", fi: "Ei lue levyjä" },
      pohjus: {
        et: "Plaadilugeja lääts või mehhanism on kulunud. Parandan või vahetan lugeja.",
        en: "The disc drive's lens or mechanism is worn. I repair or replace the drive.",
        ru: "Изношена линза или механизм дисковода. Отремонтирую или заменю привод.",
        fi: "Levyaseman linssi tai mekanismi on kulunut. Korjaan tai vaihdan aseman.",
      },
      too: "Plaadilugeja remont",
    },
    {
      mure: { et: "Ei lülitu sisse", en: "Won't turn on", ru: "Не включается", fi: "Ei käynnisty" },
      pohjus: {
        et: "Sageli on rikkis toiteplokk. Kontrollin ja parandan selle.",
        en: "Often the power supply is faulty. I check and repair it.",
        ru: "Часто неисправен блок питания. Проверю и отремонтирую.",
        fi: "Usein vika on virtalähteessä. Tarkistan ja korjaan sen.",
      },
      too: "Toiteploki remont",
    },
  ],
};

// =====================================================================
//  NÕUANDED (juhendid)
//  Igal juhendil on:
//    id, ikoon     – ära muuda
//    pealkiri      – juhendi pealkiri
//    lyhike        – lühike tekst avalehe kaardil
//    sissejuhatus  – esimene lõik juhendi lehel
//    plokid        – nimekirjad; hoiatus: true teeb ploki punaseks ääreks
//    millal        – "Millal remonti tuua?" vastus
// =====================================================================
const NOUANDED = [
  {
    id: "vesi",
    ikoon: "tilk",
    pealkiri: {
      et: "Telefon kukkus vette – mida teha kohe",
      en: "Phone fell in water – what to do right away",
      ru: "Телефон упал в воду – что делать сразу",
      fi: "Puhelin putosi veteen – mitä tehdä heti",
    },
    lyhike: {
      et: "Esimesed minutid on kõige tähtsamad. Need sammud suurendavad võimalust telefon päästa.",
      en: "The first minutes matter most. These steps improve the chance of saving your phone.",
      ru: "Первые минуты – самые важные. Эти шаги повышают шанс спасти телефон.",
      fi: "Ensimmäiset minuutit ovat tärkeimmät. Nämä askeleet parantavat mahdollisuutta pelastaa puhelin.",
    },
    sissejuhatus: {
      et: "Vesi ise ei riku telefoni kohe. Kahju teeb elektrivool, mis läheb märjas telefonis valesse kohta, ja aja jooksul tekkiv korrosioon (roostetamine). Seepärast on tähtis tegutseda kiiresti.",
      en: "Water itself doesn't ruin a phone instantly. The damage is done by electric current going where it shouldn't inside a wet phone, and by corrosion that develops over time. That's why acting quickly matters.",
      ru: "Сама вода не портит телефон мгновенно. Вред наносит электрический ток, который во влажном телефоне идёт не туда, и коррозия, развивающаяся со временем. Поэтому важно действовать быстро.",
      fi: "Vesi itsessään ei riko puhelinta heti. Vahingon tekee märässä puhelimessa väärään paikkaan kulkeva sähkövirta ja ajan myötä syntyvä korroosio. Siksi on tärkeää toimia nopeasti.",
    },
    plokid: [
      {
        pealkiri: { et: "Tee kohe", en: "Do right away", ru: "Сделайте сразу", fi: "Tee heti" },
        punktid: [
          { et: "Võta telefon veest välja ja lülita see välja.", en: "Take the phone out of the water and turn it off.", ru: "Достаньте телефон из воды и выключите его.", fi: "Ota puhelin vedestä ja sammuta se." },
          { et: "Ära pane telefoni laadima ega ühenda ühtegi juhet.", en: "Don't charge it or connect any cables.", ru: "Не ставьте на зарядку и не подключайте никаких проводов.", fi: "Älä lataa puhelinta äläkä kytke mitään johtoja." },
          { et: "Eemalda ümbris ja SIM-kaardi alus.", en: "Remove the case and the SIM tray.", ru: "Снимите чехол и выньте лоток SIM-карты.", fi: "Poista suojakuori ja SIM-korttikelkka." },
          { et: "Kuivata telefon väljast pehme lapiga ja hoia seda laadimispesaga allapoole.", en: "Dry the outside with a soft cloth and hold it with the charging port facing down.", ru: "Протрите телефон снаружи мягкой тканью и держите разъёмом зарядки вниз.", fi: "Kuivaa puhelin ulkoa pehmeällä liinalla ja pidä latausliitäntä alaspäin." },
          { et: "Too telefon võimalikult kiiresti remonti – kõige parem samal päeval.", en: "Bring the phone for repair as soon as possible – ideally the same day.", ru: "Как можно скорее принесите телефон в ремонт – лучше в тот же день.", fi: "Tuo puhelin korjattavaksi mahdollisimman pian – mieluiten samana päivänä." },
        ],
      },
      {
        pealkiri: { et: "Ära tee", en: "Don't", ru: "Не делайте", fi: "Älä tee" },
        hoiatus: true,
        punktid: [
          { et: "Ära pane telefoni riisi sisse – see ei kuivata telefoni seest ja riisitolm võib pesadesse minna.", en: "Don't put it in rice – it doesn't dry the inside and rice dust can get into the ports.", ru: "Не кладите в рис – он не высушит телефон внутри, а рисовая пыль может попасть в разъёмы.", fi: "Älä laita puhelinta riisiin – se ei kuivaa sisältä ja riisipöly voi mennä liitäntöihin." },
          { et: "Ära kuivata fööniga ega radiaatoril – kuumus võib telefoni kahjustada.", en: "Don't use a hair dryer or a radiator – heat can damage the phone.", ru: "Не сушите феном или на батарее – тепло может повредить телефон.", fi: "Älä kuivaa hiustenkuivaajalla tai patterilla – kuumuus voi vahingoittaa puhelinta." },
          { et: "Ära raputa telefoni – vesi võib liikuda veel sügavamale.", en: "Don't shake the phone – water can move even deeper inside.", ru: "Не трясите телефон – вода может проникнуть ещё глубже.", fi: "Älä ravista puhelinta – vesi voi siirtyä vielä syvemmälle." },
          { et: "Ära lülita telefoni sisse \"proovimiseks\".", en: "Don't switch it on \"just to check\".", ru: "Не включайте телефон «для проверки».", fi: "Älä käynnistä puhelinta \"kokeeksi\"." },
        ],
      },
    ],
    millal: {
      et: "Kohe. Isegi kui telefon tundub töötavat, võib korrosioon selle mõne päeva või nädala pärast rikkuda. Mida varem telefon puhastatakse, seda suurem on võimalus see päästa.",
      en: "Right away. Even if the phone seems to work, corrosion can break it within days or weeks. The sooner it is cleaned, the better the chance of saving it.",
      ru: "Сразу. Даже если телефон кажется рабочим, коррозия может вывести его из строя через несколько дней или недель. Чем раньше его почистить, тем выше шанс спасти.",
      fi: "Heti. Vaikka puhelin näyttäisi toimivan, korroosio voi rikkoa sen päivien tai viikkojen kuluttua. Mitä aiemmin se puhdistetaan, sitä paremmat mahdollisuudet sen pelastamiseen.",
    },
  },
  {
    id: "kuumus",
    ikoon: "kraadiklaas",
    pealkiri: {
      et: "Kuidas hoida sülearvutit jahedana",
      en: "How to keep your laptop cool",
      ru: "Как не допустить перегрева ноутбука",
      fi: "Miten pitää kannettava viileänä",
    },
    lyhike: {
      et: "Ülekuumenemine teeb arvuti aeglaseks ja lühendab selle eluiga. Mõned lihtsad nipid aitavad.",
      en: "Overheating makes a computer slow and shortens its life. A few simple tips help.",
      ru: "Перегрев замедляет компьютер и сокращает срок его службы. Помогут несколько простых советов.",
      fi: "Ylikuumeneminen hidastaa konetta ja lyhentää sen ikää. Muutama yksinkertainen vinkki auttaa.",
    },
    sissejuhatus: {
      et: "Kui arvuti läheb liiga kuumaks, aeglustab see end ise, et mitte kahjustuda. Pikemas plaanis kannatavad kuumuse tõttu aku ja teised osad.",
      en: "When a computer gets too hot, it slows itself down to avoid damage. In the long run the battery and other parts suffer from the heat.",
      ru: "Когда компьютер слишком нагревается, он сам снижает скорость, чтобы не повредиться. В долгосрочной перспективе от жары страдают аккумулятор и другие детали.",
      fi: "Kun kone kuumenee liikaa, se hidastaa itseään välttääkseen vauriot. Pitkällä aikavälillä kuumuudesta kärsivät akku ja muut osat.",
    },
    plokid: [
      {
        pealkiri: { et: "Mida saad ise teha", en: "What you can do yourself", ru: "Что можно сделать самому", fi: "Mitä voit tehdä itse" },
        punktid: [
          { et: "Kasuta arvutit kõval ja tasasel pinnal – laual, mitte voodis ega diivanil.", en: "Use the laptop on a hard, flat surface – a desk, not a bed or sofa.", ru: "Ставьте ноутбук на твёрдую ровную поверхность – стол, а не кровать или диван.", fi: "Käytä konetta kovalla ja tasaisella alustalla – pöydällä, ei sängyllä tai sohvalla." },
          { et: "Ära kata kinni õhuavasid (tavaliselt arvuti all ja küljel).", en: "Don't block the air vents (usually on the bottom and sides).", ru: "Не закрывайте вентиляционные отверстия (обычно снизу и сбоку).", fi: "Älä peitä tuuletusaukkoja (yleensä pohjassa ja sivuilla)." },
          { et: "Sulge programmid, mida sa parajasti ei kasuta.", en: "Close programs you are not using.", ru: "Закрывайте программы, которыми не пользуетесь.", fi: "Sulje ohjelmat, joita et juuri käytä." },
          { et: "Hoia Windows ja draiverid uuendatud.", en: "Keep Windows and drivers up to date.", ru: "Своевременно обновляйте Windows и драйверы.", fi: "Pidä Windows ja ajurit ajan tasalla." },
          { et: "Vajadusel kasuta jahutusalust.", en: "Use a cooling pad if needed.", ru: "При необходимости используйте охлаждающую подставку.", fi: "Käytä tarvittaessa jäähdytysalustaa." },
        ],
      },
      {
        pealkiri: { et: "Märgid, et arvuti kuumeneb üle", en: "Signs of overheating", ru: "Признаки перегрева", fi: "Merkit ylikuumenemisesta" },
        punktid: [
          { et: "Ventilaator müriseb pidevalt valjult.", en: "The fan is constantly loud.", ru: "Вентилятор постоянно громко шумит.", fi: "Tuuletin pitää jatkuvasti kovaa ääntä." },
          { et: "Arvuti põhi on nii kuum, et seda on ebamugav süles hoida.", en: "The bottom is too hot to keep on your lap comfortably.", ru: "Дно ноутбука настолько горячее, что его неудобно держать на коленях.", fi: "Pohja on niin kuuma, ettei konetta voi pitää sylissä." },
          { et: "Arvuti aeglustub või lülitub ootamatult välja.", en: "The computer slows down or shuts off unexpectedly.", ru: "Компьютер тормозит или неожиданно выключается.", fi: "Kone hidastuu tai sammuu yllättäen." },
        ],
      },
    ],
    millal: {
      et: "Kui arvuti on üle kahe aasta vana ja seda pole kunagi puhastatud, on sees peaaegu kindlasti tolm. Puhastus ja termopasta vahetus annab enamasti suure vahe.",
      en: "If the laptop is over two years old and has never been cleaned, there is almost certainly dust inside. Cleaning and new thermal paste usually make a big difference.",
      ru: "Если ноутбуку больше двух лет и его ни разу не чистили, внутри почти наверняка пыль. Чистка и замена термопасты обычно дают заметный результат.",
      fi: "Jos kone on yli kaksi vuotta vanha eikä sitä ole koskaan puhdistettu, sisällä on lähes varmasti pölyä. Puhdistus ja lämpötahnan vaihto tekevät yleensä suuren eron.",
    },
  },
  {
    id: "aku",
    ikoon: "aku",
    pealkiri: {
      et: "Märgid, et aku hakkab otsa saama",
      en: "Signs your battery is wearing out",
      ru: "Признаки того, что аккумулятор изнашивается",
      fi: "Merkit siitä, että akku on loppumassa",
    },
    lyhike: {
      et: "Kuidas aru saada, et telefoni või sülearvuti aku vajab vahetust – ja millal on asi ohtlik.",
      en: "How to tell that a phone or laptop battery needs replacing – and when it's dangerous.",
      ru: "Как понять, что аккумулятор телефона или ноутбука пора менять – и когда это опасно.",
      fi: "Miten tunnistaa, että puhelimen tai kannettavan akku on vaihdettava – ja milloin se on vaarallista.",
    },
    sissejuhatus: {
      et: "Aku kulub iga laadimisega natuke. Tavaliselt on telefoni aku paari-kolme aasta pärast märgatavalt nõrgem kui uuena.",
      en: "A battery wears a little with every charge. Usually a phone battery is noticeably weaker after two or three years.",
      ru: "Аккумулятор немного изнашивается с каждой зарядкой. Обычно через два-три года аккумулятор телефона заметно слабее, чем новый.",
      fi: "Akku kuluu hieman jokaisella latauksella. Yleensä puhelimen akku on parin–kolmen vuoden jälkeen selvästi heikompi kuin uutena.",
    },
    plokid: [
      {
        pealkiri: { et: "Tavalised märgid", en: "Common signs", ru: "Обычные признаки", fi: "Tavalliset merkit" },
        punktid: [
          { et: "Aku tühjeneb palju kiiremini kui varem.", en: "The battery drains much faster than before.", ru: "Батарея садится гораздо быстрее, чем раньше.", fi: "Akku tyhjenee paljon nopeammin kuin ennen." },
          { et: "Seade lülitub välja, kuigi näitab veel 10–30% laetust.", en: "The device shuts off even though it still shows 10–30% charge.", ru: "Устройство выключается, хотя показывает ещё 10–30 % заряда.", fi: "Laite sammuu, vaikka näyttää vielä 10–30 % varausta." },
          { et: "Laetus hüppab järsku, näiteks 40% pealt 10% peale.", en: "The charge level jumps suddenly, e.g. from 40% to 10%.", ru: "Заряд резко скачет, например с 40 % до 10 %.", fi: "Varaus hyppää äkillisesti, esim. 40 %:sta 10 %:iin." },
          { et: "Seade läheb laadimise ajal tavalisest kuumemaks.", en: "The device gets hotter than usual while charging.", ru: "Во время зарядки устройство греется сильнее обычного.", fi: "Laite kuumenee latauksen aikana tavallista enemmän." },
        ],
      },
      {
        pealkiri: { et: "Ohtlik: paisunud aku", en: "Dangerous: swollen battery", ru: "Опасно: вздутый аккумулятор", fi: "Vaarallista: turvonnut akku" },
        hoiatus: true,
        punktid: [
          { et: "Kui ekraan või tagakaas kerkib üles või seade ei ole enam sirge, võib aku olla paisunud.", en: "If the screen or back cover lifts up or the device is no longer flat, the battery may be swollen.", ru: "Если экран или задняя крышка приподнимаются или корпус перестал быть ровным, аккумулятор может быть вздут.", fi: "Jos näyttö tai takakansi nousee tai laite ei ole enää suora, akku voi olla turvonnut." },
          { et: "Lõpeta kohe seadme kasutamine ja laadimine.", en: "Stop using and charging the device immediately.", ru: "Немедленно прекратите пользоваться устройством и заряжать его.", fi: "Lopeta laitteen käyttö ja lataus heti." },
          { et: "Ära vajuta ega torka akut – paisunud aku võib süttida.", en: "Don't press or puncture the battery – a swollen battery can catch fire.", ru: "Не давите и не прокалывайте аккумулятор – вздутый аккумулятор может загореться.", fi: "Älä paina tai puhkaise akkua – turvonnut akku voi syttyä palamaan." },
        ],
      },
    ],
    millal: {
      et: "Kui märkad tavalisi märke, tasub aku vahetada – uue akuga on seade jälle nagu uus. Paisunud aku puhul too seade remonti kohe.",
      en: "If you notice the common signs, it's worth replacing the battery – with a new one the device feels new again. With a swollen battery, bring the device in immediately.",
      ru: "Если заметили обычные признаки, стоит заменить аккумулятор – с новым устройство снова как новое. При вздутом аккумуляторе принесите устройство в ремонт сразу.",
      fi: "Jos huomaat tavalliset merkit, akku kannattaa vaihtaa – uudella akulla laite on taas kuin uusi. Turvonneen akun kanssa tuo laite korjattavaksi heti.",
    },
  },
  {
    id: "aeglane",
    ikoon: "kiirus",
    pealkiri: {
      et: "Arvuti on aeglane – mida ise proovida",
      en: "Slow computer – what to try yourself",
      ru: "Компьютер тормозит – что попробовать самому",
      fi: "Hidas tietokone – mitä kokeilla itse",
    },
    lyhike: {
      et: "Enne remonti tasub proovida neid lihtsaid samme. Sageli aitavad juba need.",
      en: "Before a repair, try these simple steps. Often they are enough.",
      ru: "Перед ремонтом стоит попробовать эти простые шаги. Часто их уже достаточно.",
      fi: "Ennen korjausta kannattaa kokeilla näitä yksinkertaisia askeleita. Usein ne riittävät.",
    },
    sissejuhatus: {
      et: "Aeglusel võib olla palju põhjuseid. Osa neist saad ise mõne minutiga kõrvaldada.",
      en: "Slowness can have many causes. Some you can fix yourself in a few minutes.",
      ru: "У медленной работы может быть много причин. Некоторые из них можно устранить самому за несколько минут.",
      fi: "Hitaudella voi olla monta syytä. Osan voit korjata itse muutamassa minuutissa.",
    },
    plokid: [
      {
        pealkiri: { et: "Proovi ise", en: "Try yourself", ru: "Попробуйте сами", fi: "Kokeile itse" },
        punktid: [
          { et: "Taaskäivita arvuti – vali menüüst \"Taaskäivita\", mitte ainult kaas kinni ja lahti.", en: "Restart the computer – choose \"Restart\" from the menu, don't just close and open the lid.", ru: "Перезагрузите компьютер – выберите «Перезагрузка» в меню, а не просто закройте и откройте крышку.", fi: "Käynnistä kone uudelleen – valitse valikosta \"Käynnistä uudelleen\", älä vain sulje ja avaa kantta." },
          { et: "Vaata, mitu programmi käivitub koos arvutiga: vajuta Ctrl + Shift + Esc ja ava vahekaart \"Käivitus\". Lülita välja need, mida sa kohe ei vaja.", en: "Check how many programs start with the computer: press Ctrl + Shift + Esc and open the \"Startup\" tab. Disable the ones you don't need right away.", ru: "Посмотрите, сколько программ запускается вместе с компьютером: нажмите Ctrl + Shift + Esc и откройте вкладку «Автозагрузка». Отключите ненужные.", fi: "Katso, montako ohjelmaa käynnistyy koneen mukana: paina Ctrl + Shift + Esc ja avaa \"Käynnistys\"-välilehti. Poista käytöstä ne, joita et heti tarvitse." },
          { et: "Kontrolli, et kettal oleks vaba ruumi – vähemalt 10–15%.", en: "Make sure the drive has free space – at least 10–15%.", ru: "Проверьте, что на диске есть свободное место – хотя бы 10–15 %.", fi: "Varmista, että levyllä on vapaata tilaa – vähintään 10–15 %." },
          { et: "Tee Windowsi uuendused ära.", en: "Install Windows updates.", ru: "Установите обновления Windows.", fi: "Asenna Windows-päivitykset." },
          { et: "Kontrolli arvutit viirusetõrjega – Windowsi enda turbeprogramm on selleks piisav.", en: "Scan the computer for viruses – Windows' own security app is enough.", ru: "Проверьте компьютер антивирусом – встроенной защиты Windows достаточно.", fi: "Tarkista kone virustorjunnalla – Windowsin oma suojaus riittää." },
        ],
      },
    ],
    millal: {
      et: "Kui ükski samm ei aidanud, on arvutis tõenäoliselt vana kõvaketas, liiga vähe mälu või riistvara viga. Vana kõvaketta vahetus SSD vastu on sageli suurim kiiruse tõus, mida arvutile teha saab.",
      en: "If none of the steps helped, the computer probably has an old hard drive, too little memory or a hardware fault. Replacing an old hard drive with an SSD is often the biggest speed boost you can give a computer.",
      ru: "Если ничего не помогло, вероятно, в компьютере старый жёсткий диск, мало памяти или аппаратная неисправность. Замена старого диска на SSD – часто самое большое ускорение, которое можно дать компьютеру.",
      fi: "Jos mikään ei auttanut, koneessa on todennäköisesti vanha kiintolevy, liian vähän muistia tai laitevika. Vanhan kiintolevyn vaihto SSD:hen on usein suurin nopeusparannus, jonka koneelle voi tehdä.",
    },
  },
];
