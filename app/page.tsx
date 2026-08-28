import { CalendarDays, CarFront, Laptop, MapPin, MessageCircle, ShieldCheck, Star, Wrench } from "lucide-react";
import BookingConfigurator from "./components/BookingConfigurator";
import ContactBox from "./components/ContactBox";

export default function Home(){
 return <main>
  <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur"><div className="container-x flex h-16 items-center justify-between"><a href="#" className="text-lg font-black">TD <span className="text-blue-600">Fahrzeugcodierung</span></a><nav className="hidden gap-6 text-sm text-slate-600 md:flex"><a href="#faq">FAQ</a>
          </nav><div className="flex flex-wrap items-center gap-3">
              <a href="#buchen" className="btn-primary px-4 py-2 text-sm">Termin buchen</a>
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">
              Direkt anfragen
            </a>
            </div></div></header>

  <section className="hero-grid border-b border-blue-100 bg-white"><div className="container-x grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]"><div><div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-blue-700">VAG Codierung & Diagnose</div><h1 className="mt-6 text-5xl font-black leading-none sm:text-7xl text-blue-600 whitespace-nowrap"><span className="text-black">TD</span> Fahrzeugcodierung</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Codierung und Diagnose für Volkswagen, Audi, SEAT und Škoda – mit Fahrzeugauswahl, transparenter Kalkulation und direkter Terminbuchung.</p>
  <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 max-w-xl"><b className="text-blue-900">Staffelrabatt automatisch:</b><div className="mt-2 text-sm text-blue-800">ab 50 €: 5 % · ab 100 €: 10 % · ab 150 €: 15 % · ab 200 €: 20 %</div></div>
  <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#buchen" className="btn-primary">Codierungen auswählen</a><a href="#kontakt" className="btn-secondary"><MessageCircle className="mr-2 h-4 w-4"/>Machbarkeit anfragen</a></div></div>
  <div className="card p-8"><CarFront className="h-16 w-16 text-blue-600"/><h2 className="mt-7 text-3xl font-black">Persönlich oder per Remote</h2><div className="mt-6 space-y-4"><div className="rounded-2xl bg-blue-50 p-5"><MapPin className="h-6 w-6 text-blue-600"/><b className="mt-3 block">Leipzig-Süd</b><span className="text-sm text-slate-600">Schenkendorfstraße 33, 04275 Leipzig</span></div><div className="rounded-2xl border border-blue-100 p-5 bg-blue-50 border-blue-300"><Laptop className="h-6 w-6 text-blue-600"/><b className="mt-3 block">Remote</b><span className="text-sm text-slate-600">Remote mit eigenem Diagnoseinterface, PC/Laptop, stabiler Internetverbindung und AnyDesk.</span></div></div></div></div></section>

  <section className="border-y border-blue-100 bg-blue-600 text-white"><div className="container-x py-14 text-center"><h2 className="text-3xl font-black">Mehr auswählen. Mehr sparen.</h2><p className="mt-3 text-blue-100">5 % ab 50 €, 10 % ab 100 €, 15 % ab 150 € und 20 % ab 200 € Auftragswert.</p></div></section>

  <section id="buchen" className="container-x py-24"><div className="max-w-3xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">Buchung</div><h2 className="mt-3 text-4xl font-black">Fahrzeug prüfen & Termin konfigurieren.</h2><p className="mt-4 leading-7 text-slate-600">Die Auswahl wird vor Durchführung auf technische Machbarkeit geprüft.</p></div><div className="mt-10"><BookingConfigurator/></div></section>

  <section id="kontakt" className="border-y border-blue-100 bg-white">
        <div className="container-x py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">Kontakt & Vorprüfung</div>
            <h2 className="mt-3 text-4xl font-black">Unsicher, ob deine Codierung möglich ist?</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Sende Fahrzeug, Baujahr und gewünschte Funktion zur Vorprüfung – direkt per WhatsApp oder über das Kontaktformular.
            </p>
          </div>
          <div className="mt-10">
            <ContactBox />
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-blue-100 bg-white"><div className="container-x py-24"><h2 className="text-4xl font-black">FAQ</h2><div className="mt-8 space-y-3">
   <details className="card p-6"><summary className="cursor-pointer font-bold">Was brauche ich für Remote?</summary><p className="mt-4 text-slate-600">Ein eigenes kompatibles Diagnoseinterface (z. B. VCDS, VCP oder OBD11), Windows-PC/Laptop, stabile Internetverbindung und AnyDesk.</p></details>
   <details className="card p-6"><summary className="cursor-pointer font-bold">Sind alle Funktionen garantiert möglich?</summary><p className="mt-4 text-slate-600">Nein. Die Machbarkeit hängt von Hardware, Steuergeräten, Softwarestand und Fahrzeugkonfiguration ab und wird vor Durchführung geprüft.</p></details>
   <details className="card p-6"><summary className="cursor-pointer font-bold">Wie bezahle ich?</summary><p className="mt-4 text-slate-600">Vor Ort bar oder per PayPal. Remote per PayPal: 70 % vor Beginn und 30 % nach Durchführung der vereinbarten Codierung.</p></details>
  </div></div></section>

  <footer className="border-t border-blue-100 bg-white"><div className="container-x flex flex-col gap-5 py-10 text-sm text-slate-500 sm:flex-row sm:justify-between"><div>© 2026 TD Fahrzeugcodierung</div><div className="flex flex-wrap gap-5"><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/widerruf">Widerruf</a><a href="/agb">AGB</a></div></div></footer>
 </main>
}