# Mall för inlämning laboration 1, 1dv610
​
## Checklista
- [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
- [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
- [x] Koden är objektorienterad
- [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
- [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
- [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
  - [x] De flesta testfall fungerar
  - [x] Koden är förberedd på Återanvändning
  - [x] All kod samt historik finns i git 
  - [ ] Kodkvaliterskraven är ifyllda
  - [ ] Reflektion är skriven utifrån bokens kapitel 
- [x] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
  - [x] Samtliga testfall är skrivna
  - [x] Testfall är automatiserade
  - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
  - [ ] Kodkvalitetskraven är varierade 
- [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Instruktionerna är skrivna på engelska i en README.md-fil för att vara tillgängliga för så många programmerare som möjligt oavsett nationalitet och för att de lätt ska gå att upptäcka i repositoriet. Metoderna i modulen beskrivs under rubriker för repektive klass och går att expandera/kollapsa för extra överskådlighet. Till varje metod finns parametrar och returvärden beskrivna samt ett kodexempel. Metod-, parameter- och variabelnamnen är valda för att tydligt indikera för användaren hur metoderna ska anropas och vilken funktionalitet som de erbjuder.

[Instruktioner](./README.md)
​
## Beskrivning av min kod
Modulen exporterar ett objekt av typen Converter, vars metoder användaren anropar för att skapa mätningar (Measurement) så som längd (Length), tid (Time) och hastighet (Speed). Converter har även metoder för att returnera tillgängliga mättyper, tillgängliga enheter för varje mättyp samt för att slå samman flera mätningar av samma typ, t.ex. flera Length-objekt.

Measurement-objekten (d.v.s. objekt av subtyperna Length, Time, Weight, Volume och Speed) har metoder för att hämta kvantitet, enhet och en sträng-representation, samt metoder för att konvertera mätningen till en ny mätning i valfri tillgänglig enhet.

SingleMeasurement-objekten (d.v.s. objekt av subtyperna Length, Time, Weight, Volume och Speed) har metoder för att slå samman två mätningar av samma subtyp till valfri tillgänglig enhet, samt för att jämföra två mätningar avseende storlek.

[Klassdiagram](./images/class-diagram.jpeg)
​
## Hur jag testat
Koden är testad med automatiska enhetsteter i testningsramverket Jest. Dessutom testar exempelapplikationen alla metoder.
​
### Testfall
Allt testas med automatiska enhetstester förutom en if-sats i konstruktorerna i de abstrakta klasserna Measurement, SingleMeasurement och CombinedMeasurement, samt metoden mergeAllInto() i klassen Converter. Anledningen till det är att jag inte lyckades komma fram till hur jag skulle skriva testerna trots att jag sökt information om det. (Jag har väldigt liten erfarenhet av att skriva automatiska enhetstester men har försökt så gott jag kunnat.) Dessa enheter testas dock av exempelappen.
​
[Testrapport](./images/testrapport.jpg)

Allt som är testat fungerar och jag har förökt att göra testerna så heltäckande av kodbasen som möjligt. 
​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |
​
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 