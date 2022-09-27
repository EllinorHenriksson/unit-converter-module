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
| __Converter__ Namn på modulens huvudklass | __Use intention-revealing names__ Jag tycker att namnet Converter beskriver syftes med modulen och klassen till hälften. Namnet antyder att modulen ska används till någon form av konvertering. Namnet UnitConverter hade bättre preciserat användningsområdet för konverteraren. Eftersom hela repositoriet är namngett till converter väljer jag dock att behålla namnet i nuläget för att undvika sidoeffekter. __Class names__ Klassen är namngiven efter ett substantiv som antyder vilka egenskaper och beteenden den har. |
| __unitAbbreviation__ Namn på parameter i flera metoder | __Add meaningful context__ Namnet beskriver en parameter av typen string som representerar en enhetsförkortning, så som 'm' för meter. Delnamnet unit förtydligar vad abbreviation avser, vilket inte framgår helt av kontexten i övrigt. __Make meaningful distinctions__ Namnet är tydligt skilt från det kortare namnet unit, som används för att beskriva parametrar och variabler i form av ett objekt (med egenskaperna abbreviation och ratio) i privata delar av koden. |
| __isEqualTo__ Namn för metod i den abstrakta superklassen SingleMeasurement | __Method names__ Namnet beskriver en metod som jämför två storheter med varandra och returnerar ett boolskt värde. Prefixet 'is' används i enlighet med boken och the javabean standard då metoden är ett predikat. |
| __mergeWithInto__ Namn för metod i den abstrakta superklassen SingleMeasurement | __Pick one word per concept__ Delnamnet 'merge' används även i Converter-metoden mergeAllInto(). Båda metoderna utför samma typ av ihopslagning av flera SingleMeasurement-objekt till ett gemensamt som sedan returneras till användaren. Tack vare 'merge' blir det tydligt att båda metoderna delar samma koncept. |
| __convertTo__ Namn för metod i den abstrakta superklassen Measurement | __Avoid disinformation__ Namnet kan vara missvisande beroende på hur det tolkas. Det metoden gör är att den omvandlar kvantiteten hos ett Measurement-objekt till motsvarande kvantitet i en annan enhet och returnerar ett nytt objekt som representerar konverteringen. Metodnamnet tolkas förhoppningsvis på detta sätt men skulle även kunna tolkas som att metoden påverkar objektets inre tillstånd genom att kalkylera och omvandla attributet quantity samt ändra attributet unit. Jag väljer dock att behålla metodnamnet då jag tycker att det beskriver problemdomänen bäst. |

​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| __mergeAllInto()__ (Converter) | __Use descriptive names__ 'merge' syftar till en sammanslagning, 'all' syftar till att sammanslagningen gäller flera, 'into' syftar till att sammanslagningen sker till en bestämd form. Dessa delar av metodnamnet skapar tillsammans med parameternamnen 'measurements' och 'unitAbbreviation'  en beskrivande bild av metodens användningsområde. __Function arguments__ Metoden är dyadisk, alltså har två parametrar, vilket gör koden mindre lättläst. Dock fann jag inget lämpligt alternativ för att göra metoden monadisk. |
| __mergeWithInto()__ (SingleMeasurement) | __One level of abstraction per function__ Metoden bryter mot den här regeln då den blandar hög abstraktionsnivå (metodanrop) med låg abstraktionsnivå (addition). __Do one thing__ Metoden gör endast en sak, vilket jag tycker motiverar blandningen av abstraktionsnivåer. Additionen är så enkel att jag tycker det är oberättigat att bryta ut den till en separat metod vars enda syfte är att addera två värden. Detta är dock en avvägning och kan diskuteras.                                               |
| __validateSingleMeasurements()__ (Validator) | __Function arguments__ Metoden är monadisk, d.v.s. har endast en parameter i form av 'singleMeasurements', vilket gör att den är lätt att förstå i jämörelse med metoder som har två, eller till och med 3 eller fler parametrar. Anledningen till att metoden tar en parameter är att den opererar på parametern i form av validering, vilket blir tydligt i och med namngivningen.                                             |
| __validateQuantity()__ (Validator) | __Small__ Blocks and indenting Metoden har endast en rad kod i blocken i if-else-if satserna och håller på så sätt ned storleken på metoden. __Do one thing__ Metoden gör endast en sak, validerar den parameter som skickas in.                                             |
| __#retrieveUnit(unitAbbreviation)__ (Measurement) | __Function arguments__ (Verbs and keywords) This rule is not very well followed with this method. It would be an improvement to change the name to #retrieveUnitWithAbbreviation(unitAbbreviation) to more clearly couple the method name to the argument. __Have no side effects__ There are no side effects in this method - the method does not change the state of the object or the argument, it only looks up the unit for the abbreviation and returns it.                                              |
​
## Laborationsreflektion
Jag tycker att jag har lyckats skapa små metoder för klasserna som i mångt och mycket håller en hög abstraktionsnivå – de gör en sak och anropar andra metoder som endast gör en sak. Metoderna är namngivna med åtanken att metodnamnet tydligt ska kunna kopplas ihop med eventuella parameternamn för att användaren ska få en förståelse för hur metoden fungerar och vilka argument som ska skickas in. Jag har i första hand valt att skriva metoder utan argument (niladisk form), i andra hand med endast ett argument (monadisk form) och i tredje hand med två argument (dyadisk form) för att minimera risken för användaren att göra fel.   

Valideringsmetoderna kastar undantag i stället för att returnera felkoder så att undantagen kan fångas av användaren på en högre abstraktionsnivå i koden. Modulen tillämpar arv från superklasser till subklasser för att undvika duplicering av kod och samtidigt kunna definiera subtyper för enklare validering och typhantering i metoderna. SingleMeasurement och CombinedMeasurement ärver av Measurement, Length, Time, Weight och Volume ärver av SingleMeasurement, och Speed ärver av CombinedMeasurement.   

Namngivningen av parametrar, argument och variabler är så konsekvent och enhetlig som möjligt för att göra koden tydlig för läsaren. Namnet unit betyder alltid en och samma sak, namnet unitAbbreviation betyder alltid en och samma sak. Metoder med ’convert’ i namnet gör utför alltid samma grundhandling, likaså metoder med ’merge’ i namnet. Om det bedömts nödvändigt för tydligheten har namnet gjorts relativt långa, men korta namn har använts när de samtidigt är tydliga. Det tar längre tid att läsa ett längre namn, men tydligheten är i slutändan viktigast.
