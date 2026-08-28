export type Coding = {
  id: string;
  name: string;
  price: number;
  category: "Standard-Codierungen" | "Assistenzsysteme";
  interfaceInfo?: string;
  hardware?: string;
  requirements?: string;
  sourceUrl?: string;
};

export type Platform = "PQ35" | "PQ46" | "PQ26" | "MQB" | "MQBevo" | "MLB" | "MLBevo" | "MEB" | "T5" | "PL71" | "PQ25";

export type Vehicle = {
  brand: string;
  model: string;
  startYear: number;
  endYear: number;
  platform: Platform;
  sfd1From?: number;
  sourceUrl?: string;
};

export const codingCatalog: Coding[] = [
  {id:"diagnose",name:"Fehlerdiagnose Steuergeräte",price:39,category:"Standard-Codierungen",interfaceInfo:"VCDS / VCP / OBD11 – abhängig vom Fahrzeug",requirements:"Fehlerspeicher auslesen, Steuergeräte prüfen und Fehlerbild vorbewerten."},
  {id:"needle",name:"Zeigertest / Needle Sweep / Staging",price:15,category:"Standard-Codierungen"},
  {id:"gurt",name:"Gurtwarner anpassen",price:15,category:"Standard-Codierungen"},
  {id:"autolock",name:"Auto-Lock / Auto-Unlock",price:15,category:"Standard-Codierungen"},
  {id:"komfortblinken",name:"Komfortblinken anpassen",price:15,category:"Standard-Codierungen"},
  {id:"cominghome",name:"Coming-/Leaving-Home anpassen",price:15,category:"Standard-Codierungen"},
  {id:"fenster",name:"Fenster-Komfortöffnung / -schließung",price:15,category:"Standard-Codierungen",interfaceInfo:"VCDS; VCP/OBD11 nach Vorprüfung",hardware:"Kompatibles Bordnetz-/Türsteuergerät",requirements:"Für MQB sind passende Anpassungskanäle dokumentiert.",sourceUrl:"https://wiki-online.vcds.de/de/Codierungen/MQB/Komfort/Fenster"},
  {id:"tfl",name:"Tagfahrlicht konfigurieren",price:19,category:"Standard-Codierungen",interfaceInfo:"VCDS; weitere Interfaces nach Vorprüfung",hardware:"Lichtsteuerung muss die Funktion unterstützen",requirements:"Für PQ26 ist Tagfahrlicht als Plattform-Codierung dokumentiert.",sourceUrl:"https://wiki-online.vcds.de/de/Plattformen/PQ26"},
  {id:"hecktfl",name:"Heckleuchten mit Tagfahrlicht",price:19,category:"Standard-Codierungen"},
  {id:"tflmenu",name:"Tagfahrlicht-Menü aktivieren",price:15,category:"Standard-Codierungen"},
  {id:"spiegelabsenkung",name:"Beifahrerspiegelabsenkung",price:25,category:"Standard-Codierungen"},
  {id:"spiegelanklappen",name:"Spiegelanklappen per Fernbedienung",price:29,category:"Standard-Codierungen",interfaceInfo:"VCDS; weitere Interfaces nach Vorprüfung",hardware:"Elektrisch anklappbare Spiegel und kompatible Tür-/Komfortsteuergeräte",requirements:"Für PQ46 ist Spiegelanklappen per FFB dokumentiert.",sourceUrl:"https://wiki-online.vcds.de/de/Plattformen/PQ46"},
  {id:"regenschliessen",name:"Regenschließen",price:29,category:"Standard-Codierungen"},
  {id:"startstop",name:"Start-Stopp Anpassung / Memory",price:25,category:"Standard-Codierungen"},
  {id:"laptimer",name:"Laptimer / Öltemperaturanzeige",price:15,category:"Standard-Codierungen"},
  {id:"nachtank",name:"Nachtankmenge anzeigen",price:15,category:"Standard-Codierungen"},
  {id:"tacho",name:"Tacho-/Displaydarstellung anpassen",price:19,category:"Standard-Codierungen",interfaceInfo:"VCDS; abhängig von Plattform und Kombiinstrument",hardware:"Kompatibles Kombiinstrument",requirements:"Software- und Steuergerätevariante vorab prüfen."},
  {id:"ambient",name:"Ambientebeleuchtung anpassen",price:35,category:"Standard-Codierungen"},
  {id:"hiddenmenu",name:"Hidden-/Engineering-Menü",price:19,category:"Standard-Codierungen",interfaceInfo:"VCDS; je nach Infotainment ggf. VCP",hardware:"Kompatibles Infotainment",requirements:"Geräte- und Softwarevariante vorab prüfen."},
  {id:"rsmonitor",name:"RS Monitor / Sportanzeige anpassen",price:25,category:"Standard-Codierungen",interfaceInfo:"VCDS",hardware:"Kompatibles MLBevo-Infotainment",requirements:"Abhängig vom Software-Train des Infotainments.",sourceUrl:"https://wiki-online.vcds.de/de/Codierungen/MLBevo/RS_Monitor"},
  {id:"hud",name:"Head-up-Display Position anpassen",price:19,category:"Standard-Codierungen",interfaceInfo:"VCDS",hardware:"Head-up-Display muss vorhanden sein",requirements:"Horizontale/vertikale Bildverschiebung ist für MQB dokumentiert.",sourceUrl:"https://wiki-online.vcds.de/de/Codierungen/MQB/HUD"},
  {id:"sra",name:"Scheinwerferreinigungsanlage anpassen",price:25,category:"Standard-Codierungen"},
  {id:"easyentry",name:"Easy Entry / Einstiegshilfe",price:29,category:"Standard-Codierungen"},
  {id:"heckklappe",name:"Heckklappen-Komfortfunktionen",price:25,category:"Standard-Codierungen"},
  {id:"xds",name:"XDS / Fahrdynamik-Anpassung",price:25,category:"Standard-Codierungen"},
  {id:"hillhold",name:"Berganfahrassistent anpassen",price:25,category:"Standard-Codierungen"},
  {id:"rdk",name:"Reifendruckkontrolle über ABS",price:25,category:"Standard-Codierungen",interfaceInfo:"VCDS; weitere Interfaces nach Vorprüfung",hardware:"Kompatibles ABS/ESP-Steuergerät",requirements:"Codierung kann von Steuergerät, Bremsanlage, Motor, Getriebe und PR-Codes abhängen.",sourceUrl:"https://wiki-online.vcds.de/de/ABS-ESP/Audi-A6-4B-Bosch-57"},
  {id:"fahrprofil",name:"Fahrprofilauswahl / Drive Select",price:39,category:"Standard-Codierungen"},

  {id:"muedigkeit",name:"Müdigkeitserkennung",price:39,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. weitere Interfaces nach Vorprüfung",hardware:"Unterstütztes Kombiinstrument/Gateway",requirements:"Vorprüfung anhand Ausstattung und Steuergeräte."},
  {id:"ops",name:"Einparkhilfe / OPS",price:49,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"PDC/OPS-Hardware bzw. kompatible Steuergeräte",requirements:"Vorhandene Ausstattung muss unterstützt werden."},
  {id:"rueckfahrkamera",name:"Rückfahrkamera codieren",price:39,category:"Assistenzsysteme",interfaceInfo:"VCDS / ggf. VCP",hardware:"Rückfahrkamera, Verkabelung und kompatibles Infotainment",requirements:"Codierung nach Hardware-/Steuergeräteprüfung."},
  {id:"fernlicht",name:"Fernlichtassistent",price:59,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Geeignete Kamera/Lichtsensorik und Lichtsteuerung",requirements:"Kamera, Lichtsteuergerät und Softwarestand prüfen."},
  {id:"vze",name:"Verkehrszeichenerkennung",price:59,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Geeignete Frontkamera und kompatibles Infotainment/Kombiinstrument",requirements:"Ausstattungs- und Softwareprüfung erforderlich."},
  {id:"lane",name:"Spurhalteassistent / Lane Assist",price:59,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Geeignete Frontkamera / Fahrerassistenzkamera",requirements:"Kalibrierung bzw. Parametrierung kann erforderlich sein."},
  {id:"park",name:"Park Assist",price:59,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Passende PDC-/Parklenk-Hardware und Sensorik",requirements:"Vorprüfung und ggf. Grundeinstellung/Kalibrierung."},
  {id:"side",name:"Side Assist / Totwinkelassistent",price:69,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Radarsensoren und kompatible Steuergeräte",requirements:"Hardware, Datensatz und Softwarestand prüfen."},
  {id:"acc",name:"ACC / Adaptive Geschwindigkeitsregelung",price:79,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP/ODIS",hardware:"ACC-Radarsensor und kompatible Steuergeräte",requirements:"Kalibrierung/Parametrierung kann erforderlich sein."},
  {id:"frontkamera",name:"Frontkamera codieren / parametrisieren",price:79,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP/ODIS",hardware:"Kompatible Frontkamera und Halterung",requirements:"Kalibrierung/Parametrierung kann erforderlich sein."},
  {id:"trailer",name:"Trailer Assist / Anhängerassistent",price:69,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Kompatible Anhänger-/Kamera-/Assistenzhardware",requirements:"Vorprüfung der Ausstattung und Steuergeräte."},
  {id:"emergency",name:"Emergency Assist",price:59,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP",hardware:"Kompatible Fahrerassistenz-Hardware",requirements:"Nur bei unterstützter Plattform/Ausstattung."},
  {id:"travel",name:"Travel Assist",price:79,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP/ODIS",hardware:"Frontkamera, ACC und kompatible Lenkrad-/Assistenzhardware",requirements:"Hardware, Software und SFD prüfen."},
  {id:"stau",name:"Stauassistent",price:69,category:"Assistenzsysteme",interfaceInfo:"VCDS; ggf. VCP/ODIS",hardware:"ACC, Frontkamera und kompatible Assistenzsteuergeräte",requirements:"Hardware, Software und ggf. Kalibrierung prüfen."},
];

const basicComfort = ["diagnose","needle","gurt","autolock","komfortblinken","cominghome","fenster","tfl","hecktfl","tflmenu","spiegelabsenkung","spiegelanklappen","regenschliessen","sra"];
const pqExtras = ["startstop","laptimer","nachtank","hiddenmenu","xds","hillhold","rdk"];
const mqbComfort = [...basicComfort,"startstop","laptimer","nachtank","tacho","ambient","hud","fahrprofil"];
const mqbAssist = ["muedigkeit","ops","rueckfahrkamera","fernlicht","vze","lane","park","side","acc","frontkamera","trailer","emergency","stau"];
const mqbevoAssist = ["muedigkeit","ops","rueckfahrkamera","fernlicht","vze","lane","park","side","acc","frontkamera","trailer","emergency","travel","stau"];
const mlbComfort = [...basicComfort,"laptimer","nachtank","tacho","ambient","hiddenmenu","easyentry","heckklappe","fahrprofil"];
const mlbevoComfort = [...mlbComfort,"rsmonitor"];
const premiumAssist = ["ops","rueckfahrkamera","fernlicht","vze","lane","side","acc","frontkamera","stau"];
const evComfort = ["diagnose","autolock","komfortblinken","cominghome","spiegelabsenkung","spiegelanklappen","tacho","ambient"];
const evAssist = ["ops","rueckfahrkamera","fernlicht","vze","lane","side","acc","travel"];

export const platformCodingMap: Record<Platform,string[]> = {
  PQ35: [...basicComfort,...pqExtras],
  PQ46: [...basicComfort,...pqExtras],
  PQ26: ["diagnose","gurt","autolock","komfortblinken","cominghome","fenster","tfl","spiegelabsenkung","spiegelanklappen","startstop"],
  PQ25: ["diagnose","gurt","autolock","komfortblinken","cominghome","fenster","tfl","spiegelabsenkung"],
  MQB: [...mqbComfort,...mqbAssist],
  MQBevo: [...mqbComfort,...mqbevoAssist],
  MLB: [...mlbComfort,...premiumAssist],
  MLBevo: [...mlbevoComfort,...premiumAssist],
  MEB: [...evComfort,...evAssist],
  T5: [...basicComfort,"startstop","laptimer","tacho","ops","rueckfahrkamera"],
  PL71: [...basicComfort,"hiddenmenu","easyentry","heckklappe","rdk","ops","rueckfahrkamera"],
};

const src = {
  mqb:"https://wiki-online.vcds.de/de/Plattformen/MQB",
  mqbevo:"https://wiki-online.vcds.de/de/Plattformen/MQBevo",
  mlbevo:"https://wiki-online.vcds.de/de/Plattformen/MLBevo",
  pq35:"https://wiki-online.vcds.de/de/Plattformen/PQ35",
  pq46:"https://wiki-online.vcds.de/de/Plattformen/PQ46",
  pq26:"https://wiki-online.vcds.de/de/Plattformen/PQ26",
};

export const vehicles: Vehicle[] = [
  {brand:"Volkswagen",model:"Golf 5 (1K)",startYear:2003,endYear:2008,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Volkswagen",model:"Golf 6 (1K)",startYear:2008,endYear:2012,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Volkswagen",model:"Golf 7 (5G)",startYear:2012,endYear:2020,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Golf 8 (CD)",startYear:2019,endYear:2026,platform:"MQBevo",sfd1From:2019,sourceUrl:src.mqbevo},
  {brand:"Volkswagen",model:"Passat B6 (3C)",startYear:2005,endYear:2010,platform:"PQ46",sourceUrl:src.pq46},
  {brand:"Volkswagen",model:"Passat B7 (3C)",startYear:2010,endYear:2014,platform:"PQ46",sourceUrl:src.pq46},
  {brand:"Volkswagen",model:"Passat B8 (3G)",startYear:2014,endYear:2023,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Passat B9",startYear:2023,endYear:2026,platform:"MQBevo",sfd1From:2023,sourceUrl:src.mqbevo},
  {brand:"Volkswagen",model:"Polo 6R",startYear:2009,endYear:2014,platform:"PQ25"},
  {brand:"Volkswagen",model:"Polo 6C",startYear:2014,endYear:2017,platform:"PQ26",sourceUrl:src.pq26},
  {brand:"Volkswagen",model:"Polo AW",startYear:2017,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Tiguan 5N",startYear:2007,endYear:2016,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Volkswagen",model:"Tiguan II (AD/BW)",startYear:2016,endYear:2023,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Tiguan III",startYear:2024,endYear:2026,platform:"MQBevo",sourceUrl:src.mqbevo},
  {brand:"Volkswagen",model:"T-Roc A11",startYear:2017,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Touran 1T",startYear:2003,endYear:2015,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Volkswagen",model:"Touran 5T",startYear:2015,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Volkswagen",model:"Touareg 7L",startYear:2002,endYear:2010,platform:"PL71"},
  {brand:"Volkswagen",model:"Touareg 7P",startYear:2010,endYear:2018,platform:"MLB"},
  {brand:"Volkswagen",model:"Transporter T5",startYear:2003,endYear:2015,platform:"T5"},
  {brand:"Volkswagen",model:"Transporter T6",startYear:2015,endYear:2019,platform:"T5"},
  {brand:"Volkswagen",model:"Transporter / Multivan T6.1",startYear:2019,endYear:2024,platform:"T5"},

  {brand:"Audi",model:"A1 8X",startYear:2010,endYear:2018,platform:"PQ25"},
  {brand:"Audi",model:"A1 GB",startYear:2018,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Audi",model:"A3 / S3 8P",startYear:2003,endYear:2013,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Audi",model:"A3 / S3 8V",startYear:2012,endYear:2020,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Audi",model:"A3 / S3 8Y",startYear:2020,endYear:2026,platform:"MQBevo",sfd1From:2020,sourceUrl:src.mqbevo},
  {brand:"Audi",model:"A4 / S4 8K",startYear:2007,endYear:2015,platform:"MLB"},
  {brand:"Audi",model:"A4 / S4 B9",startYear:2015,endYear:2024,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"A5 / S5 8T",startYear:2007,endYear:2016,platform:"MLB"},
  {brand:"Audi",model:"A5 / S5 F5",startYear:2016,endYear:2024,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"A6 / S6 C7",startYear:2011,endYear:2018,platform:"MLB"},
  {brand:"Audi",model:"A6 / S6 C8",startYear:2018,endYear:2026,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"Q2 GA",startYear:2016,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Audi",model:"Q3 8U",startYear:2011,endYear:2018,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Audi",model:"Q3 F3",startYear:2018,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Audi",model:"Q5 8R",startYear:2008,endYear:2017,platform:"MLB"},
  {brand:"Audi",model:"Q5 FY",startYear:2017,endYear:2024,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"Q7 4L",startYear:2005,endYear:2015,platform:"PL71"},
  {brand:"Audi",model:"Q7 4M",startYear:2015,endYear:2026,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"Q8 4M",startYear:2018,endYear:2026,platform:"MLBevo",sourceUrl:src.mlbevo},
  {brand:"Audi",model:"e-tron GE",startYear:2018,endYear:2026,platform:"MLBevo",sourceUrl:src.mlbevo},

  {brand:"Škoda",model:"Octavia 2 1Z",startYear:2004,endYear:2013,platform:"PQ35",sourceUrl:src.pq35},
  {brand:"Škoda",model:"Octavia 3 5E",startYear:2012,endYear:2020,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Škoda",model:"Octavia 4 NX",startYear:2020,endYear:2026,platform:"MQBevo",sfd1From:2020,sourceUrl:src.mqbevo},
  {brand:"Škoda",model:"Superb 2 3T",startYear:2008,endYear:2015,platform:"PQ46",sourceUrl:src.pq46},
  {brand:"Škoda",model:"Superb 3V",startYear:2015,endYear:2023,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Škoda",model:"Fabia 2 5J",startYear:2007,endYear:2014,platform:"PQ25"},
  {brand:"Škoda",model:"Fabia 3 NJ",startYear:2014,endYear:2021,platform:"PQ26",sourceUrl:src.pq26},
  {brand:"Škoda",model:"Kodiaq NS",startYear:2016,endYear:2023,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Škoda",model:"Karoq NU",startYear:2017,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Škoda",model:"Kamiq NW",startYear:2019,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"Škoda",model:"Enyaq 5A",startYear:2020,endYear:2026,platform:"MEB",sfd1From:2020},

  {brand:"SEAT / CUPRA",model:"SEAT Leon 5F",startYear:2012,endYear:2020,platform:"MQB",sourceUrl:"https://wiki-online.vcds.de/de/Fahrzeuge/Seat-Cupra/Leon-5F"},
  {brand:"SEAT / CUPRA",model:"SEAT Ibiza KJ",startYear:2017,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"SEAT / CUPRA",model:"SEAT Arona KJ7",startYear:2017,endYear:2026,platform:"MQB",sourceUrl:src.mqb},
  {brand:"SEAT / CUPRA",model:"SEAT Tarraco KN2",startYear:2018,endYear:2024,platform:"MQB",sourceUrl:src.mqb},
  {brand:"SEAT / CUPRA",model:"CUPRA Ateca KH7",startYear:2018,endYear:2024,platform:"MQB",sourceUrl:src.mqb},
  {brand:"SEAT / CUPRA",model:"CUPRA Leon KL",startYear:2020,endYear:2026,platform:"MQBevo",sfd1From:2020,sourceUrl:src.mqbevo},
  {brand:"SEAT / CUPRA",model:"CUPRA Formentor KM",startYear:2020,endYear:2026,platform:"MQBevo",sfd1From:2020,sourceUrl:src.mqbevo},
  {brand:"SEAT / CUPRA",model:"CUPRA Born K11",startYear:2021,endYear:2026,platform:"MEB",sfd1From:2021},
];

export function codingsForVehicle(vehicle: Vehicle): string[] {
  return platformCodingMap[vehicle.platform] || ["diagnose"];
}

export const brands = ["Volkswagen","Audi","Škoda","SEAT / CUPRA"];