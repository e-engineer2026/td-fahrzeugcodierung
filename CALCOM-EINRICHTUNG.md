# Cal.com – Buchungsfragen für TD Fahrzeugcodierung

Damit die Website die bereits ausgewählten Daten in Cal.com vorausfüllen kann, müssen in BEIDEN Events dieselben Buchungsfragen angelegt werden:

- Remote-Codierung
- VAG-Codierung vor Ort

## In Cal.com einrichten

Öffne jeweils:

Event → Erweitert → Buchungsfragen → + Buchungsfrage

Lege folgende Felder an.

| Identifier | Bezeichnung im Formular | Typ | Pflicht |
|---|---|---|---|
| `fahrzeug` | Fahrzeug | Kurzer Text | Ja |
| `baujahr` | Baujahr | Kurzer Text | Ja |
| `fin` | FIN | Kurzer Text | Nein |
| `codierungen` | Ausgewählte Codierungen | Langer Text | Ja |
| `gesamtpreis` | Gesamtpreis | Kurzer Text | Ja |
| `zahlung` | Zahlungsvereinbarung | Langer Text | Ja |

Die **Identifier müssen exakt** geschrieben werden. Die sichtbaren Bezeichnungen können abweichen.

Die Standardfelder `name` und `email` werden direkt in Cal.com bei der Terminbuchung abgefragt und nicht mehr von der Website vorausgefüllt.

## Website-Übergabe

Beispielhaft wird ein Link erzeugt wie:

`...?name=Max%20Mustermann&email=max@example.de&fahrzeug=Audi%20A4%20B9&baujahr=2020&fin=...&codierungen=Lane%20Assist...&gesamtpreis=106.20%20EUR&zahlung=PayPal...`

Cal.com kann Name, E-Mail und eingerichtete benutzerdefinierte Felder über URL-Query-Parameter vorausfüllen.

## Wichtig

Wenn ein Identifier in Cal.com anders heißt, wird das entsprechende Feld nicht zuverlässig vorausgefüllt. Deshalb die oben genannten Identifier in beiden Events identisch verwenden.