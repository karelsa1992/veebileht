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
  email: "karelsaega1992@gmail.com",
  facebook: "", // kui siin on link, ilmub lehele Facebooki kaart
};

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
  hero_tekst: {
    et: "Üle 15 aasta kogemust. Parandan lauaarvuteid, sülearvuteid, nutitelefone, tahvelarvuteid ja mängukonsoole – vajadusel kuni emaplaadi ja videokaardi tasemeni.",
    en: "Over 15 years of experience. I repair desktops, laptops, smartphones, tablets and game consoles – down to motherboard and graphics card level if needed.",
    ru: "Опыт более 15 лет. Ремонтирую настольные компьютеры, ноутбуки, смартфоны, планшеты и игровые приставки – при необходимости вплоть до материнской платы и видеокарты.",
    fi: "Yli 15 vuoden kokemus. Korjaan pöytäkoneita, kannettavia, älypuhelimia, tabletteja ja pelikonsoleita – tarvittaessa emolevy- ja näytönohjaintasolle asti.",
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

  // Minust
  minust_pealkiri: { et: "Minust", en: "About me", ru: "Обо мне", fi: "Minusta" },
  minust_tekst: {
    et: "Olen seadmeid parandanud üle 15 aasta. Tegelen nii lihtsamate töödega, nagu puhastus ja tarkvara paigaldus, kui ka keerulisemate töödega, nagu emaplaatide ja videokaartide remont. Selgitan alati lihtsas keeles, mis seadmel viga on ja mida saab teha.",
    en: "I have been repairing devices for over 15 years. I handle both simple jobs, such as cleaning and software installation, and complex ones, such as motherboard and graphics card repair. I always explain in plain language what is wrong and what can be done.",
    ru: "Я ремонтирую технику более 15 лет. Выполняю как простые работы – чистку и установку программ, так и сложные – ремонт материнских плат и видеокарт. Всегда простыми словами объясняю, в чём неисправность и что можно сделать.",
    fi: "Olen korjannut laitteita yli 15 vuotta. Teen sekä yksinkertaisia töitä, kuten puhdistusta ja ohjelmistoasennuksia, että vaativampia, kuten emolevyjen ja näytönohjainten korjausta. Selitän aina selkeästi, mikä laitteessa on vikana ja mitä voidaan tehdä.",
  },
  aastat_kogemust: { et: "aastat kogemust", en: "years of experience", ru: "лет опыта", fi: "vuotta kokemusta" },

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
  facebook: { et: "Facebook", en: "Facebook", ru: "Facebook", fi: "Facebook" },
  facebook_tekst: { et: "Kirjuta mulle", en: "Message me", ru: "Напишите мне", fi: "Lähetä viesti" },
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
  mida_teen: { et: "Mida ma teen", en: "What I do", ru: "Что я делаю", fi: "Mitä teen" },
  hinnakiri: { et: "Hinnakiri", en: "Price list", ru: "Прайс-лист", fi: "Hinnasto" },
  too: { et: "Töö", en: "Service", ru: "Работа", fi: "Työ" },
  hind: { et: "Hind", en: "Price", ru: "Цена", fi: "Hinta" },
  alates: { et: "alates", en: "from", ru: "от", fi: "alkaen" },
  hinnakiri_markus: {
    et: "Hinnad on töö hinnad. Varuosa hind lisandub ja sõltub seadme mudelist. Kodukülastusel lisandub väljakutsetasu {tasu} (ainult Tartu linnas).",
    en: "Prices are for labour. The cost of parts is added and depends on the model. Home visits include a call-out fee of {tasu} (Tartu city only).",
    ru: "Указана стоимость работы. Цена запчастей добавляется и зависит от модели. При выезде на дом добавляется плата за выезд {tasu} (только в черте Тарту).",
    fi: "Hinnat ovat työn hintoja. Varaosien hinta lisätään ja riippuu mallista. Kotikäynnillä lisätään käyntimaksu {tasu} (vain Tarton kaupunki).",
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
