export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <a href="/" className="font-semibold text-blue-700 hover:underline">← Zur Startseite</a>
        <h1 className="mt-8 text-4xl font-black">Impressum</h1>

        <div className="mt-8 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              <strong>TD Fahrzeugcodierung</strong><br />
              Inhaber: Timo Drechsler<br />
              Schenkendorfstraße 33<br />
              04275 Leipzig<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Kontakt</h2>
            <p className="mt-3">
              Telefon: 01556 3047044<br />
              E-Mail: elektronikermeister@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Umsatzsteuer</h2>
            <p className="mt-3">
              Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer ausgewiesen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}