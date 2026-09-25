"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactBox() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [year, setYear] = useState("");
  const [coding, setCoding] = useState("");

  const whatsappNumber = "4915563047044";
  const phoneDisplay = "01556 3047044";
  const email = "elektronikermeister@gmail.com";

  const whatsappText = encodeURIComponent(
    `Hallo, ich möchte eine Codierung prüfen lassen.\n\nName: ${name || "-"}\nFahrzeug: ${vehicle || "-"}\nBaujahr: ${year || "-"}\nCodierung: ${coding || "-"}`
  );

  const mailSubject = encodeURIComponent("Anfrage zur Fahrzeugcodierung");
  const mailBody = encodeURIComponent(
    `Name: ${name || "-"}\nFahrzeug: ${vehicle || "-"}\nBaujahr: ${year || "-"}\nCodierung: ${coding || "-"}`
  );

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <div className="card p-7 sm:p-8">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white">
          <MessageCircle className="h-7 w-7" />
        </div>

        <h3 className="mt-6 text-2xl font-black">Direkt Kontakt aufnehmen</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Schick uns Fahrzeug, Baujahr und Codierung. Wir prüfen vorab, ob die gewünschte Codierung grundsätzlich möglich ist.
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp: {phoneDisplay}
          </a>

          <a
            href={`tel:+${whatsappNumber}`}
            className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 font-semibold text-blue-800 transition hover:bg-blue-100"
          >
            <Phone className="h-5 w-5" />
            {phoneDisplay}
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Mail className="h-5 w-5" />
            {email}
          </a>
        </div>
      </div>

      <form onSubmit={submit} className="card p-7 sm:p-8">
        <h3 className="text-2xl font-black">Codierung prüfen lassen</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Formular ausfüllen und Anfrage per E-Mail senden.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={vehicle}
            onChange={e => setVehicle(e.target.value)}
            placeholder="Fahrzeug, z. B. Audi A4 B9"
            required
          />
          <input
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="Baujahr"
            required
          />
          <input
            value={coding}
            onChange={e => setCoding(e.target.value)}
            placeholder="Codierung"
            required
          />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="btn-primary">
            <Mail className="mr-2 h-4 w-4" />
            Anfrage per E-Mail
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:brightness-95"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Per WhatsApp senden
          </a>
        </div>
      </form>
    </div>
  );
}