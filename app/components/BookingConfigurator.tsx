"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Laptop, MapPin } from "lucide-react";
import { brands, codingCatalog, vehicles, codingsForVehicle } from "../data/catalog";

function discountRate(v:number){ return v>=200?.20:v>=150?.15:v>=100?.10:v>=50?.05:0; }
function nextTier(v:number){ return v<50?50:v<100?100:v<150?150:v<200?200:null; }

export default function BookingConfigurator(){
  const [mode,setMode]=useState<"remote"|"onsite">("remote");
  const [brand,setBrand]=useState("Volkswagen");
  const first=vehicles.find(v=>v.brand==="Volkswagen")!;
  const [vehicleModel,setVehicleModel]=useState(first.model);
  const [year,setYear]=useState(first.startYear);
  const [vin,setVin]=useState("");
  const [selected,setSelected]=useState<string[]>([]);
  const [search,setSearch]=useState("");
  const [payment,setPayment]=useState<"paypal"|"bar">("paypal");

  const models=vehicles.filter(v=>v.brand===brand);
  const vehicle=vehicles.find(v=>v.brand===brand&&v.model===vehicleModel) || models[0];
  const years=Array.from({length:vehicle.endYear-vehicle.startYear+1},(_,i)=>vehicle.endYear-i);

  const isSfd1 = !!vehicle.sfd1From && year >= vehicle.sfd1From && year < 2024;
  const isSfd2 = year >= 2024;

  const sfd1BlockedAssistantIds = new Set(["lane","park","side","acc","frontkamera","trailer","travel","stau"]);
  const vehicleCodingIds = codingsForVehicle(vehicle);
  const available=isSfd2 ? [] : codingCatalog.filter(c=>vehicleCodingIds.includes(c.id) && !(isSfd1 && c.category==="Assistenzsysteme" && sfd1BlockedAssistantIds.has(c.id)));
  const mqbevoAssistantIds = ["muedigkeit","ops","rueckfahrkamera","fernlicht","vze","lane","park","side","acc","frontkamera","emergency","travel"];
  const brandNameForMqbevo = brand || "";
  const isMqbevoBooking =
    vehicle?.platform === "MQBevo" &&
    ["Volkswagen","VW","SEAT","Seat","Škoda","Skoda","CUPRA","Cupra"].includes(brandNameForMqbevo);

  const shown=available
    .filter(c => !(isMqbevoBooking && c.category === "Assistenzsysteme" && !mqbevoAssistantIds.includes(c.id)))
    .filter(c=>c.name.toLowerCase().includes(search.toLowerCase()));
  const sfd1AdaptationOnlyIds = ["vze","lane"];
  const displayCodingName = (c: any) => {
    const isSfdVehicle = isSfd1 || isSfd2;
    const brandName = brand || "";
    const isMqbevoGroup =
      vehicle?.platform === "MQBevo" &&
      ["Volkswagen", "VW", "SEAT", "Seat", "Škoda", "Skoda", "CUPRA", "Cupra"].includes(brandName);

    if (isMqbevoGroup && c.id === "frontkamera") {
      return "Frontkamera parametrieren";
    }

    if (c.category === "Assistenzsysteme" && (isSfdVehicle || isMqbevoGroup)) {
      const cleaned = c.name
        .replace(/^Anpassung\s+/i, "")
        .replace(/^Freischaltung\s+/i, "")
        .replace(/\s+codieren\s*\/\s*parametrisieren$/i, "")
        .replace(/\s+codieren$/i, "");
      return `Anpassung ${cleaned}`;
    }

    return c.name;
  };

  const subtotal=selected.reduce((s,id)=>s+(codingCatalog.find(c=>c.id===id)?.price||0),0);
  const sfdFee = isSfd1 && selected.length > 0 ? 10 : 0;
  const rate=discountRate(subtotal), discount=subtotal*rate, total=(subtotal-discount)+sfdFee, next=nextTier(subtotal);

  const chosen = selected.map(id=>{const c=codingCatalog.find(c=>c.id===id); return c?displayCodingName(c):null}).filter(Boolean).join(", ");
  const prepay=total*.70, finalpay=total*.30;

  const calBase=mode==="remote"
    ?"https://cal.com/timo-drechsler-lej6jm/remote-codierung"
    :"https://cal.com/timo-drechsler-lej6jm/vag-codierung-vor-ort";

  const calParams=new URLSearchParams();
  calParams.set("fahrzeug",`${brand} ${vehicle.model}`);
  calParams.set("baujahr",String(year));
  if(vin) calParams.set("fin",vin);
  if(chosen) calParams.set("codierungen",chosen);
  calParams.set("gesamtpreis",`${total.toFixed(2)} EUR${sfdFee ? " inkl. 10 EUR SFD1" : ""}`);
  if(mode==="remote"){
    calParams.set("zahlung",`PayPal 70% vorab (${prepay.toFixed(2)} EUR) / 30% danach (${finalpay.toFixed(2)} EUR)`);
  } else {
    calParams.set("zahlung",payment==="bar"?"Bar (beim Termin)":"PayPal");
  }
  const calUrl=`${calBase}?${calParams.toString()}`;

  const changeBrand=(b:string)=>{
    setBrand(b);
    const v=vehicles.find(x=>x.brand===b)!;
    setVehicleModel(v.model);
    setYear(v.endYear);
    setSelected([]);
  };
  const changeModel=(m:string)=>{
    const v=vehicles.find(x=>x.brand===brand&&x.model===m)!;
    setVehicleModel(m);
    setYear(v.endYear);
    setSelected([]);
  };
  const toggle=(id:string)=>setSelected(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);

  return <div className="space-y-8">
    <section className="card p-6 sm:p-8">
      <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">1 · Terminart</div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <button onClick={()=>setMode("onsite")} className={`rounded-2xl border p-5 text-left ${mode==="onsite"?"border-blue-600 bg-blue-50":"border-slate-200"}`}>
          <MapPin className="h-7 w-7 text-blue-600"/><b className="mt-3 block">Vor Ort in Leipzig-Süd</b><span className="text-sm text-slate-600">Schenkendorfstraße 33, 04275 Leipzig</span>
        </button>
        <button onClick={()=>{setMode("remote");setPayment("paypal")}} className={`rounded-2xl border p-5 text-left ${mode==="remote"?"border-blue-600 bg-blue-50":"border-slate-200"}`}>
          <Laptop className="h-7 w-7 text-blue-600"/><b className="mt-3 block">Remote-Codierung</b><span className="text-sm text-slate-600">Termin bequem von zu Hause durchführen.</span>
        </button>
      </div>
      {mode==="remote"&&<div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-slate-700">
        <b>Voraussetzungen für Remote:</b> Eigenes kompatibles Diagnoseinterface (z. B. VCP, VCDS oder OBD11), stabile Internetverbindung, Windows-PC/Laptop am Fahrzeug und installierte Remote-Software (Auswahl wird bei Terminbuchung angezeigt). Je nach Codierung kann ein bestimmtes Interface oder eine bestimmte Softwareversion erforderlich sein.
      </div>}
    </section>

    <section className="card p-6 sm:p-8">
      <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">2 · Fahrzeug</div>
      <h3 className="mt-2 text-2xl font-black">Marke, Baureihe und Baujahr</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label><span className="mb-2 block text-sm font-semibold">Marke</span><select value={brand} onChange={e=>changeBrand(e.target.value)}>{brands.map(b=><option key={b}>{b}</option>)}</select></label>
        <label><span className="mb-2 block text-sm font-semibold">Modell / Generation</span><select value={vehicleModel} onChange={e=>changeModel(e.target.value)}>{models.map(v=><option key={v.model}>{v.model}</option>)}</select></label>
        <label><span className="mb-2 block text-sm font-semibold">Baujahr</span><select value={year} onChange={e=>setYear(Number(e.target.value))}>{years.map(y=><option key={y}>{y}</option>)}</select></label>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_2fr]">
        <div>
          <input
            value={vin}
            onChange={e=>setVin(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g,"").slice(0,17))}
            maxLength={17}
            placeholder="FIN optional"
          />
          {vin.length>0 && vin.length!==17 && (
            <p className="mt-2 text-xs font-semibold text-amber-600">FIN muss 17 Zeichen enthalten · {vin.length}/17</p>
          )}
          {vin.length===17 && (
            <p className="mt-2 text-xs font-semibold text-emerald-600">FIN vollständig · 17/17</p>
          )}
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">Plattform: <strong>{vehicle.platform}</strong>. Die Codierliste wird automatisch anhand der Fahrzeugplattform zugeordnet. Die endgültige Machbarkeit wird anhand von Ausstattung, Steuergerät, Softwarestand und Hardware geprüft.{vehicle.sourceUrl&&<> <a href={vehicle.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-blue-700 hover:underline">VCDS-Wiki Referenz</a></>}</div>
      </div>
      {!isSfd2&&<div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">{isSfd1&&<> Bei SFD1-Fahrzeugen werden Assistenzfunktionen mit möglichem SVM-/Datensatz-, Parametrierungs- oder Kalibrierungsbedarf nicht regulär zur Buchung angeboten.</>}</div>}

      {isSfd2 ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-900">
          <b>SFD2 / UNECE:</b> Fahrzeuge ab Modelljahr 2024 werden für Codierungsaufträge ausgeschlossen.
        </div>
      ) : isSfd1 ? (
        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          <b>SFD1:</b> Für die Freischaltung geschützter Steuergeräte werden einmalig <strong>10,00 €</strong> zum Auftrag addiert.
        </div>
      ) : year===2023 ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <b>Hinweis:</b> Einige VAG-Modelle erhielten SFD2 bereits 2023. Vor Durchführung ist daher ein SFD-Check sinnvoll.
        </div>
      ) : null}
    </section>

    <section className="card p-6 sm:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
<div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">3 · Fahrzeugbezogene Codierungen</div><h3 className="mt-2 text-2xl font-black">{brand} {vehicle.model} · {year}</h3></div>
        <input className="md:max-w-xs" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Codierung suchen …"/>
      </div>

      {isSfd2 ? (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-900">
          Für dieses Baujahr werden keine Codierungsleistungen angeboten.
        </div>
      ) : (["Standard-Codierungen","Assistenzsysteme"] as const).map(cat=>{
        const list=shown.filter(c=>c.category===cat);
        if(!list.length) return null;
        return <div className="mt-8" key={cat}><h4 className="font-black text-blue-700">{cat}</h4><div className="mt-3 grid gap-3 lg:grid-cols-2">
          {list.map(c=><div key={c.id} className={`rounded-xl border p-4 ${selected.includes(c.id)?"border-blue-500 bg-blue-50":"border-slate-200"}`}>
            <label className="flex cursor-pointer justify-between gap-3">
              <span><input className="mr-3 h-4 w-4" type="checkbox" checked={selected.includes(c.id)} onChange={()=>toggle(c.id)}/>{displayCodingName(c)}</span>
              <b>{c.price} €</b>
            </label>
            {(c.interfaceInfo||c.hardware||c.requirements)&&<div className="mt-3 space-y-1 border-t border-slate-200 pt-3 text-xs leading-5 text-slate-600">
              
                  
              
                  {c.hardware&&<div><b>Hardware:</b> {c.hardware}</div>}
              {c.requirements&&<div><b>Voraussetzung:</b> {c.requirements}</div>}
              {c.sourceUrl&&<div><a href={c.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-blue-700 hover:underline">VCDS-Wiki Quelle</a></div>}
            </div>}
          </div>)}
        </div></div>
      })}

      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <div className="flex justify-between"><span>Zwischensumme</span><b>{subtotal.toFixed(2)} €</b></div>
        <div className="mt-2 flex justify-between text-blue-700"><span>Rabatt ({Math.round(rate*100)} %)</span><b>-{discount.toFixed(2)} €</b></div>
        <div className="mt-4 flex justify-between border-t pt-4 text-xl"><b>Gesamt</b><b>{total.toFixed(2)} €</b></div>
        {next?<p className="mt-3 text-sm text-slate-600">Noch {(next-subtotal).toFixed(2)} € bis zur nächsten Rabattstufe ({next===50?5:next===100?10:next===150?15:20} %).</p>:<p className="mt-3 text-sm font-semibold text-blue-700">20 % Maximalrabatt erreicht.</p>}
        {sfdFee>0&&<div className="mt-3 flex justify-between border-t pt-3 text-sm text-blue-700"><span>SFD1-Freischaltung</span><b>+10,00 €</b></div>}
      </div>
    </section>

    {mode==="remote" ? (
      <>
        <section className="card p-6 sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">4 · Termin</div>
          <div className="mt-5 rounded-2xl border border-blue-100 p-5 text-sm leading-7">
            <b>Remote</b> · {brand} {vehicle.model} · Baujahr {year}<br/>
            {selected.length} Codierung(en) · {Math.round(rate*100)} % Rabatt · <b>{total.toFixed(2)} €</b><br/>
            70 % vorab: {prepay.toFixed(2)} € · 30 % danach: {finalpay.toFixed(2)} €
          </div>
          {isSfd2 ? (
            <div className="mt-6 rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-500">Terminbuchung für Codierungen deaktiviert</div>
          ) : (
            <a href={calUrl} target="_blank" rel="noreferrer" className="btn-primary mt-6"><CalendarDays className="mr-2 h-5 w-5"/>Termin mit Daten an Cal.com übergeben</a>
          )}
          <p className="mt-3 text-xs leading-5 text-slate-500">Name und E-Mail werden direkt von Cal.com bei der Terminbuchung abgefragt.</p>
        </section>

        <section className="card p-6 sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">5 · Zahlung</div>
          <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <b>Remote: PayPal · 70 % vorab / 30 % danach</b>
            <p className="mt-2 text-sm text-slate-600">PayPal-Adresse: <strong>elektronikermeister@gmail.com</strong></p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4"><span className="text-sm text-slate-500">70 % vorab</span><b className="mt-1 block text-2xl">{prepay.toFixed(2)} €</b></div>
              <div className="rounded-xl bg-white p-4"><span className="text-sm text-slate-500">30 % nach Durchführung</span><b className="mt-1 block text-2xl">{finalpay.toFixed(2)} €</b></div>
            </div>
            <a href="https://www.paypal.com/" target="_blank" rel="noreferrer" className="btn-primary mt-4">PayPal öffnen · {prepay.toFixed(2)} € vorab</a>
          </div>
          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-slate-700">
            <b>Zahlung vor dem Termin:</b> Nach der Terminbuchung und vor dem vereinbarten Remote-Termin sind 70 % des Gesamtbetrags per PayPal an <strong>elektronikermeister@gmail.com</strong> zu zahlen. Die verbleibenden 30 % werden nach Durchführung der vereinbarten Codierung fällig.
          </div>
        </section>
      </>
    ) : (
      <>
        <section className="card p-6 sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">4 · Zahlung</div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button onClick={()=>setPayment("bar")} className={`rounded-xl border p-4 text-left ${payment==="bar"?"border-blue-600 bg-blue-50":"border-slate-200"}`}><b>Bar (beim Termin)</b></button>
            <button onClick={()=>setPayment("paypal")} className={`rounded-xl border p-4 text-left ${payment==="paypal"?"border-blue-600 bg-blue-50":"border-slate-200"}`}><b>PayPal (beim Termin)</b></button>
          </div>
        </section>

        <section className="card p-6 sm:p-8">
          <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">5 · Termin</div>
          <div className="mt-5 rounded-2xl border border-blue-100 p-5 text-sm leading-7">
            <b>Vor Ort</b> · {brand} {vehicle.model} · Baujahr {year}<br/>
            {selected.length} Codierung(en) · {Math.round(rate*100)} % Rabatt · <b>{total.toFixed(2)} €</b>
          </div>
          {isSfd2 ? (
            <div className="mt-6 rounded-xl bg-slate-100 px-5 py-3 font-semibold text-slate-500">Terminbuchung für Codierungen deaktiviert</div>
          ) : (
            <a href={calUrl} target="_blank" rel="noreferrer" className="btn-primary mt-6"><CalendarDays className="mr-2 h-5 w-5"/>Termin mit Daten an Cal.com übergeben</a>
          )}
          <p className="mt-3 text-xs leading-5 text-slate-500">Name und E-Mail werden direkt von Cal.com bei der Terminbuchung abgefragt.</p>
        </section>
      </>
    )}

  </div>
}