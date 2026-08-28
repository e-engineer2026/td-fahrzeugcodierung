# TD Fahrzeugcodierung

Komplett neu aufgebaute Next.js-Website in Weiß/Blau.

## Starten

1. ZIP entpacken
2. Terminal im Projektordner öffnen
3. `npm install`
4. `npm run dev`
5. `http://localhost:3000` öffnen

## Enthalten

- weiß-blaues Design
- klare Trennung Vor Ort / Remote
- Fahrzeug-Dropdown
- Modell-Dropdown
- Baujahr-Dropdown
- vollständige Codierliste mit Preisen
- Mehrfachauswahl
- automatische Preisberechnung
- 10 % Rabatt ab 100 €
- Cal.com-Buchung für Remote und Vor Ort
- Impressum

## Cal.com

Remote:
https://cal.com/timo-drechsler-lej6jm/remote-codierung

Vor Ort:
https://cal.com/timo-drechsler-lej6jm/vag-codierung-vor-ort


## Ergänzungen v2
- Remote-Voraussetzungen: eigenes Diagnoseinterface (VCP, VCDS oder OBD11), stabile Internetverbindung, Windows-PC/Laptop und AnyDesk
- Zahlung vor Ort: Bar oder PayPal
- Zahlung Remote: PayPal
- Impressum mit vorhandenen Unternehmensdaten


## v3
Umgesetzt: FIN optional, Machbarkeitscheck, Remote-Checkliste, gestaffelte Rabatte 5/10/15/20 %, Kontaktbereich, Bewertungsbereich, beliebte Codierungen, Auftragszusammenfassung und vorbereitete Rechtstext-Seiten.


## v4
- Remote-Voraussetzungen nur noch als Informationstext
- Bewertungsbereich entfernt
- Remote-Zahlung: PayPal 70 % vorab / 30 % nach Durchführung
- Fahrzeugliste auf Modell-/Generationsbasis entsprechend der AS.Coding-Fahrzeugübersicht erweitert
- Codierauswahl wird fahrzeugspezifisch nach Baureihe gefiltert
- Hinweis: Verfügbarkeit bleibt abhängig von Ausstattung, Steuergerät, Softwarestand und Hardware


## v5
- echte Baujahrauswahl innerhalb jeder Baureihe
- zentrale, admin-freundliche Datenbank in app/data/catalog.ts
- konkrete 70/30-Berechnung für Remote
- Übergabe von Name, E-Mail, Fahrzeug, Baujahr, FIN, Codierungen, Preis und Zahlung über Cal.com-URL-Parameter
- Hinweis: passende Custom Questions in Cal.com müssen mit den verwendeten Feldnamen angelegt werden


## v5.1 – Cal.com Prefill
Die Website verwendet nun feste Cal.com-Identifier:
`fahrzeug`, `baujahr`, `fin`, `codierungen`, `gesamtpreis`, `zahlung`.

Siehe `CALCOM-EINRICHTUNG.md` für die exakte Einrichtung der Buchungsfragen in beiden Cal.com-Events.


## v5.2
- Bereich 4 auf reine Zahlung reduziert
- Name/E-Mail werden nur noch in Cal.com abgefragt
- PayPal-Adresse für Remote: elektronikermeister@gmail.com
- Bei Schritt 5 steht der Hinweis: 70 % nach Buchung und vor Termin, 30 % nach Durchführung

## v5.3
- Bereich „Meist zusammen gewählt“ vollständig entfernt.


## v6
- Interface-Kompatibilität pro Codierung
- Hardware-Voraussetzungen pro Codierung
- technische Prüfhinweise, teilweise mit direkter VCDS-Wiki-Quelle
- VCDS-Wiki-Angaben werden nicht als Garantie dargestellt; Steuergerät/PR-Code/Softwarestand bleiben prüfpflichtig
- PayPal-Vorab-Betrag wird konkret berechnet und ein PayPal-Öffnen-Button angezeigt
- Für einen echten vorausgefüllten PayPal-Zahlungslink ist ein PayPal.Me- oder Business-Zahlungslink nötig


## v6.1
- Interface-Hinweise nur bei Remote
- SFD1: +10 EUR Freischaltung bei bekannten SFD1-Baureihen
- SFD2: Modelljahr 2024+ für Codierungsbuchungen ausgeschlossen
- 2023: zusätzlicher Vorprüfungshinweis wegen teils früher Einführung
- Fehlerdiagnose Steuergeräte ergänzt (39 EUR)

## v6.2
- Fehler behoben: isSfd2/isSfd1 werden jetzt vor der Verwendung initialisiert.

## v6.3 FIXED
- isSfd2/isSfd1 order hard-fixed and verified before packaging.


## v7.1
- Kontaktbereich erweitert
- Telefonnummer direkt sichtbar
- WhatsApp-Button mit vorbefüllter Anfrage
- Kontaktformular für Fahrzeug, Baujahr und Wunschfunktion
- E-Mail- und Telefonkontakt integriert


## v7.2
- Bei Assistenzsystemen wurde „ab“ vor dem Preis entfernt.
- Bei SFD1-Fahrzeugen sind Verkehrszeichenerkennung und Spurhalteassistent nur als Anpassung bereits vorhandener Systeme gekennzeichnet.


## v7.3
- SFD1: „Anpassung Verkehrszeichenerkennung“ statt „Verkehrszeichenerkennung“.
- SFD1: „Anpassung Spurhalteassistent / Lane Assist“ statt „Spurhalteassistent / Lane Assist“.
- Angepasste Bezeichnungen werden in Auswahl und Buchungszusammenfassung verwendet.


## v7.4
- Bei allen SFD-Fahrzeugen wird „Verkehrszeichenerkennung“ als „Anpassung Verkehrszeichenerkennung“ angezeigt.
- Bei allen SFD-Fahrzeugen wird „Spurhalteassistent / Lane Assist“ als „Anpassung Spurhalteassistent / Lane Assist“ angezeigt.
- Zusätzliche Hinweistexte zu diesen beiden SFD-Anpassungen wurden entfernt.

## v8.0 – Plattformbasierte Codierdatenbank
- Codierlisten vollständig auf Plattformlogik umgestellt.
- Fahrzeuge erhalten eine technische Plattform (u. a. PQ26/PQ35/PQ46/MQB/MQBevo/MLB/MLBevo/MEB).
- Codierungen werden automatisch aus `platformCodingMap` geladen statt pro Fahrzeug dupliziert.
- VCDS-Wiki-Referenzen an Fahrzeugen und ausgewählten Codierungen hinterlegt.
- Modellgenerationen für eine genauere Plattformzuordnung teilweise getrennt (z. B. Polo 6R/6C, Tiguan II/III).
- Neue wiki-basierte Einträge: HUD-Anpassung und RS Monitor/Sportanzeige.
- Die Plattformzuordnung ist eine technische Vorauswahl; tatsächliche Machbarkeit bleibt von Steuergerät, Softwarestand, Ausstattung und PR-Codes abhängig.

## v8.1 – Markenfilter
Die Fahrzeug-/Codierdatenbank ist auf Volkswagen, Audi, Škoda, SEAT und CUPRA begrenzt.
Bugatti, Lamborghini, Bentley, Porsche und sonstige Konzernmarken sind nicht Bestandteil des Angebots.


## v8.2
- Bei allen Fahrzeugen mit SFD-Schutz werden sämtliche Assistenzsysteme als „Anpassung …“ dargestellt.
- Keine Assistenzfunktion wird bei SFD als Freischaltung bezeichnet.
- Rabattüberschrift geändert auf „Automatischer Staffelrabatt“.


## v8.3
- Bei allen VW-, SEAT-, Škoda- und CUPRA-Fahrzeugen auf MQBevo werden Assistenzsysteme als „Anpassung …“ dargestellt.
- Bestehende SFD-Regel bleibt erhalten: Assistenzsysteme bei SFD ebenfalls nur als Anpassung.
- Beim Punkt „Fehlerdiagnose Steuergeräte“ wurde die Hardware-Angabe entfernt.


## v8.4
- Hinweistext zu Assistenzsystemen aus dem Buchungsbereich entfernt.


## v8.5 – MQBevo Assistenzsysteme
Direkte Buchung für VW/SEAT/Škoda/CUPRA MQBevo auf folgende Auswahl reduziert:
- Anpassung Müdigkeitserkennung
- Anpassung Einparkhilfe / OPS
- Anpassung Rückfahrkamera
- Anpassung Fernlichtassistent
- Anpassung Verkehrszeichenerkennung
- Anpassung Spurhalteassistent / Lane Assist
- Anpassung Park Assist
- Anpassung Side Assist / Totwinkelassistent
- Anpassung ACC
- Frontkamera parametrieren
- Anpassung Emergency Assist
- Anpassung Travel Assist

Trailer Assist und Stauassistent werden bei MQBevo nicht mehr in der direkten Assistenz-Auswahl angeboten.


## v8.6
- Volkswagen Passat B9 bleibt als MQBevo hinterlegt.
- SFD1 ab Baujahr 2023 ergänzt.
- Die SFD1- und MQBevo-Assistenzlogik greift damit automatisch.


## v8.7
- Im Kopfbereich wurde ein Button „Direkt anfragen“ ergänzt.
- Der Button springt direkt zum Kontakt-/Vorprüfungsbereich.


## v8.8 – Preisanpassung
- Alle hinterlegten Codierungs-/Servicepreise, die auf 0 endeten, wurden um 1 € reduziert (z. B. 20 € → 19 €, 30 € → 29 €).
- Rabattgrenzen, Baujahre und sonstige Zahlenwerte bleiben unverändert.


## v8.9
- Bei Zahlung für Codierung vor Ort wurde „PayPal“ zu „PayPal (beim Termin)“ geändert.


## v8.10
- „Bar vor Ort“ wurde zu „Bar (beim Termin)“ geändert.


## v8.11
- Bei Remote-Codierung wird bei allen auswählbaren Optionen „Diagnoseinterface erforderlich“ als Voraussetzung angezeigt.
- Zusätzlich wird im Remote-Bereich ein allgemeiner Hinweis auf ein kompatibles, am PC angeschlossenes Diagnoseinterface angezeigt.


## v8.12
- Hinweistext zum PayPal.Me-/PayPal-Business-Zahlungslink entfernt.


## v8.13
- PayPal-Empfänger-/Zahlungslink-Hinweis vollständig aus der Website entfernt.


## v8.14
- Reihenfolge im Buchungsablauf geändert: Punkt 5 wird vor Punkt 4 angezeigt.


## v8.15
- Sichtbaren Hinweis zu den Cal.com-Identifiern entfernt.


## v8.16
- Buchungsablauf konsistent neu nummeriert:
  4 · Termin
  5 · Zahlung
- Die bestehenden Termin-Funktionen bleiben dem Terminbereich und die Zahlungsfunktionen dem Zahlungsbereich zugeordnet.


## v8.17
- Allgemeinen Hinweis „Voraussetzung für alle Remote-Codierungen“ entfernt.


## v8.18
- Anzeige „Voraussetzung: Diagnoseinterface erforderlich“ bei allen einzelnen Codierungen entfernt.


## v8.19
- Bei allen Remote-Codierungen wird einheitlich angezeigt:
  „Benötigtes Interface: VCDS, VCP“
- Die Anzeige erfolgt auch bei Codierungen, bei denen zuvor kein Interface hinterlegt war.


## v8.20
- Button „Direkt anfragen“ direkt neben „Termin buchen“ positioniert.


## v8.21
- Navigations-/Kopftext „Buchen“ entfernt; Buchungsbuttons bleiben erhalten.


## v8.22
- Überschrift geändert zu „Marke, Baureihe und Baujahr“.


## v8.23
- „Benötigtes Interface: VCDS, VCP“ aus allen einzelnen Codierungspunkten entfernt.


## v8.24
- Remote-Voraussetzungen: AnyDesk durch allgemeine Remote-Software mit Auswahl bei der Terminbuchung ersetzt.


## v8.25
- Auswahlfeld „Remote“ zusätzlich blau hinterlegt.


## v8.26
- Komplette Schrittanordnung korrigiert:
  4 · Termin inklusive aller Termin-/Cal.com-Funktionen
  5 · Zahlung inklusive aller Zahlungsfunktionen
- Termin wird vollständig vor Zahlung angezeigt.


## v8.27
- Hauptüberschrift „Fahrzeugcodierung“ blau dargestellt.


## v8.28
- Schritt 4 · Termin: Fahrzeug-/Buchungszusammenfassung, Anzahl Codierungen, Rabatt, Gesamtpreis und 70/30-Beträge zugeordnet.
- Schritt 5 · Zahlung: Zahlungsart, PayPal-Adresse, 70-%-/30-%-Beträge und PayPal-Button zugeordnet.


## v8.29
- In der Hauptüberschrift „TD Fahrzeugcodierung“ wird nur „TD“ schwarz dargestellt; „Fahrzeugcodierung“ bleibt blau.


## v8.30
- Hauptüberschrift „TD Fahrzeugcodierung“ wird in einer Zeile dargestellt.


## v8.31
- Text „Remote oder vor Ort in Leipzig-Süd“ entfernt.


## v8.32
- Nur bei Remote gilt: 4 · Termin, danach 5 · Zahlung.
- Bei persönlicher Codierung gilt wieder: 4 · Zahlung, danach 5 · Termin.


## v8.33
- Syntaxfehler aus v8.32 behoben.
- Remote: 4 · Termin, danach 5 · Zahlung.
- Persönlich: 4 · Zahlung, danach 5 · Termin.
- Termin- und Zahlungsfunktionen sauber in getrennten JSX-Abschnitten zugeordnet.
- TypeScript-Zugriff auf `brand?.name` korrigiert.


## v8.34
- Datenschutzseite unter /datenschutz ergänzt.
- Widerrufsbelehrung unter /widerruf ergänzt.
- AGB unter /agb ergänzt.


## v8.35
- AnyDesk/RustDesk-Auswahl bei Remote ergänzt und als `remote_software` an Cal.com übertragen.
- FIN: automatische Großschreibung, zulässige Zeichen, maximal 17 Zeichen und 17-Zeichen-Prüfung ergänzt.


## v8.36
- AnyDesk/RustDesk-Auswahl wieder entfernt.
- `remote_software` wird nicht mehr an Cal.com übertragen.
- FIN-Prüfung aus v8.35 bleibt bestehen.


## v8.37
- JSX-Syntaxfehler in BookingConfigurator.tsx behoben.
- Beschädigtes FIN-Eingabefeld vollständig repariert.
- FIN-Prüfung bleibt erhalten: Großschreibung, erlaubte Zeichen, max. 17 Zeichen und Statusanzeige.
- AnyDesk/RustDesk-Auswahl bleibt entfernt.


## v8.38
- Im Bereich „Codierung vorprüfen lassen“ die Felder „Gewünschte Funktion“ entfernt.
- WhatsApp- und E-Mail-Anfrage enthalten dort nur noch Name, Fahrzeug und Baujahr.


## v8.39
- Im Bereich „Codierung vorprüfen lassen“ ein Feld „Codierung“ ergänzt.
- Codierung wird in E-Mail- und WhatsApp-Anfrage übernommen.
