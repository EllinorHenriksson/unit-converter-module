# Unit converter module
This module lets the user create measurments of different types, convert them to different units, merge them with each other and check if they are equal, less than or greater than other measurements.

```
import { converter } from '../src/index.js'

console.log('Length units:', converter.lengthUnits) // ['m',  'km', 'dm', 'cm', 'mm', 'µm',
  'nm', 'mi', 'yd', 'ft', 'in']

const myLengthInM = converter.length(1, 'm')
console.log(myLengthInM.toString()) // 1m (1m)

const myLengthInCm = myLengthInM.convertTo('cm')
console.log(myLengthInCm.toString()) // 100cm (1m)

console.log(myLengthInM.isEqualTo(myLengthInCm)) // true
console.log(myLengthInM.isLessThan(myLengthInCm)) // false
console.log(myLengthInM.isGreaterThan(myLengthInCm)) // false

const merge = myLengthInM.mergeWithInto(myLengthInCm, 'mm')
console.log(merge.toString()) // 2000mm (2m)
```

## Measurements
Below are the measurement types that the module supports.

### Single measurements
- Length
- Time
- Weight
- Volume

### Combined measurements
- Speed

## Units
Below are the abbreviations of the available units of the respective measurement type. You use these as strings when working with the module, for example when you want to create a measurement:

```
const myLengthInM = converter.length(1, 'm')
```
<details>
<summary>Length</summary>

- m
- km
- dm
- cm
- mm
- µm
- nm
- mi
- yd
- ft
- in
</details>

<details>
<summary>Time</summary>

- s
- ms
- min
- h
- d
- week
- month
- y
- decade
- century
- millenium
</details>

<details>
<summary>Weight</summary>

- kg
- hg
- g
- mg
- µg
- t
- lbs
- oz
</details>

<details>
<summary>Volume</summary>

- m^3
- km^3
- dm^3
- cm^3
- mm^3
- L
- dl
- cl
- ml
- µl
- galUS
- galUK
- qtUS
- qtUK
- ptUS
- ptUK
- cup
- tbsp
- tsp
</details>

<details>
<summary>Speed</summary>

- m/s
- km/h
- km/min
- km/s
- m/h
- m/min
- cm/h
- cm/min
- cm/s
- mm/h
- mm/min
- mm/s
- mi/h
- mi/min
- mi/s
- yd/h
- yd/min
- yd/s
- ft/h
- ft/min
- ft/s
- kn
</details>

## Getting started
Download the module to the root folder of your project.

Import the converter object to your source code:

```
import { converter } from './converter/src/index.js'
```

## Methods

### Converter
<details>
<summary>measurementTypes()</summary>
Returns an array of the available measurement types (length, time, weight, volume, speed).

Example:
```
const types = converter.measurementTypes()
console.log(types) // ["length", "time", "weight", "volume", "speed"]
```
</details>

<details>
<summary>lengthUnits()</summary>
Returns an array of abbreviations of the available length units.

Example:
```
const units = converter.lengthUnits()
console.log(units) // ["m", "km", "dm" ...]
```
</details>

<details>
<summary>timeUnits()</summary>
Returns an array of abbreviations of the available time units.

Example:
```
const units = converter.timeUnits()
console.log(units) // ["s", "ms", "min" ...]
```
</details>

<details>
<summary>weightUnits()</summary>
Returns an array of abbreviations of the available weight units.

Example:
```
const units = converter.weightUnits()
console.log(units) // ["kg", "hg", "g" ...]
```
</details>

<details>
<summary>volumeUnits()</summary>
Returns an array of abbreviations of the available volume units.

Example:
```
const units = converter.volumeUnits()
console.log(units) // ["m^3", "km^3", "dm^3" ...]
```
</details>

<details>
<summary>speedUnits()</summary>
Returns an array of abbreviations of the available speed units.

Example:
```
const units = converter.speedUnits()
console.log(units) // ["m/s", "km/h", "km/min" ...]
```
</details>

<details>
<summary>length(quantity, unitAbbreviation)</summary>

Parameters:   
- quantity [number]: The quantity of the measurement. 
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Length] a length object of the given quantity and unit.

Example:
```
const length = converter.length(1, 'm')
console.log(length.constructor.name) // "Length"
```
</details>

<details>
<summary>time(quantity, unitAbbreviation)</summary>

Parameters:   
- quantity [number]: The quantity of the measurement. 
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Time] a time object of the given quantity and unit.

Example:
```
const time = converter.time(1, 'm/s')
console.log(time.constructor.name) // "Time"
```
</details>

<details>
<summary>weight(quantity, unitAbbreviation)</summary>

Parameters: 
- quantity [number]: The quantity of the measurement. 
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Weight] a weight object of the given quantity and unit.

Example:
```
const weight = converter.weight(1, 'kg')
console.log(weight.constructor.name) // "Weight"
```
</details>

<details>
<summary>volume(quantity, unitAbbreviation)</summary>

Parameters: 
- quantity [number]: The quantity of the measurement. 
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Volume] a volume object of the given quantity and unit.

Example:
```
const volume = converter.volume(1, 'm')
console.log(volume.constructor.name) // "Volume"
```
</details>

<details>
<summary>speed(quantity, unitAbbreviation)</summary>

Parameters: 
- quantity [number]: The quantity of the measurement. 
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Speed] a speed object of the given quantity and unit.

Example:
```
const speed = converter.speed(1, 'm')
console.log(speed.constructor.name) // "Speed"
```
</details>

<details>
<summary>speedFromLengthAndTime(length, time)</summary>

Parameters:
- length [Length]: A length object.
- time [Time]: A time object.

Returns [Speed] a speed object with the quantity calculated from the length object and the time object and set to the speed standard unit (i.e. m/s).

Example:
```
const speed = converter.speedFromLengthAndTime(converter.length(1, 'm'), converter.time(1, 's'))
console.log(speed.constructor.name) // Speed
console.log(speed.toString()) // "1m/s (1m/s)"
```
</details>

<details>
<summary>mergeAllInto(singleMeasurements, unitAbbreviation)</summary>

Parameters:
- singleMeasurements [SingleMeasurement[]]: An array of SingleMeasurement objects of the same subtype (i.e. Length, Time, Weight, Volume).
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [SingleMeasurement] an object of a SingleMeasurement subtype (e.g. Length) with the quantity calculated from all given measurements and set to the given unit.

Example: 
```
const length = converter.mergeAllInto([converter.length(1, 'm'), converter.length(5, 'dm'), converter.length(2, 'cm)], 'cm')
console.log(length.toString()) // "152cm (1.52m)"
```
</details>

### Length, Time, Weight, Volume, Speed (i.e. Measurement)
<details>
<summary>quantity</summary>
Returns [number] the quantity of the measurement.

Example:
```
const length = converter.length(5, 'dm')
console.log(length.quantity) // 5
```
</details>

<details>
<summary>unit</summary>
Returns [string] the abbreviation of the measurement unit.

Example:
```
const length = converter.length(5, 'dm')
console.log(length.unit) // "dm"
```
</details>

<details>
<summary>standardUnitQuantity</summary>
Returns [number] the corresponding quantity in the standard unit.

Example:
```
const length = converter.length(5, 'dm')
console.log(length.standardUnitQuantity) // 0.5
```
</details>

<details>
<summary>standardUnit</summary>
Returns [string] the abbreviation of the measurement's standard unit.

Example:
```
const length = converter.length(5, 'dm')
console.log(length.standardUnit) // "m"
```
</details>

<details>
<summary>convertTo(unitAbbreviation)</summary>

Parameters:
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [Measurement] a new measurement of the same type converted to the given unit.

Example:
```
const lengthInDm = converter.length(5, 'dm')
const lengthInCm = lengthInDm.convertTo('cm')
console.log(lengthInCm.quantity) // 50
console.log(lengthInCm.unit) // "cm"
```
</details>

<details>
<summary>convertToStandard()</summary>
Returns [Measurement] a new measurement of the same type converted to the measurement's standard unit.

Example:
```
const lengthInDm = converter.length(5, 'dm')
const lengthStandard = lengthInDm.convertToStandard()
console.log(lengthStandard.quantity) // 0.5
console.log(lengthStandard.unit) // "m"
```
</details>

<details>
<summary>toString()</summary>
Returns [string] a string representation of the measurement.

Example:
```
const length = converter.length(5, 'dm')
console.log(length.toString()) // "5dm (0.5m)"
```
</details>

### Length, Time, Weight, Volume (i.e. SingleMeasurement)
<details>
<summary>mergeWithInto(singleMeasurement, unitAbbreviation)</summary>

Parameters:
- singleMeasurement [SingleMeasurement]: A SingleMeasurement object of the same subtype (i.e. Length, Time, Weight, Volume).
- unitAbbreviation [string]: The abbreviation of the measurement unit.

Returns [SingleMeasurement] an object of the same SingleMeasurement subtype (e.g. Length) with quantity set to the total quantity in the given unit.

Example:
``` 
const length = converter.length(5, 'dm')
const mergeInMm = length.mergeWithInto(converter.length(2, 'cm'), 'mm')
console.log(mergeInMm.toString()) // "520mm (0.52m)"
```
</details>

<details>
<summary>isEqualTo(singleMeasurement)</summary>

Parameters:
- singleMeasurement [SingleMeasurement]: A SingleMeasurement object of the same subtype (i.e. Length, Time, Weight, Volume).

Returns [boolean] true if the measurements are equal (e.g. 1m vs. 100cm), or false if not.

Example:
```
const length1 = converter.length(1, 'm')
const length2 = converter.length(100, 'cm')
console.log(length1.isEqualTo(length2)) // true
```
</details>

<details>
<summary>isLessThan(singleMeasurement)</summary>

Parameters:
- singleMeasurement [SingleMeasurement]: A SingleMeasurement object of the same subtype (i.e. Length, Time, Weight, Volume).

Returns [boolean] true if the measurement is less than the argument measurement (e.g. 1m vs. 0.1km), or false if not.

Example:
```
const length1 = converter.length(1, 'm')
const length2 = converter.length(0.1, 'km')
console.log(length1.isLessThan(length2)) // true
```
</details>

<details>
<summary>isGreaterThan(singleMeasurement)</summary>

Parameters:
- singleMeasurement [SingleMeasurement]: A SingleMeasurement object of the same subtype (i.e. Length, Time, Weight, Volume).

Returns [boolean] true if the measurement is greater than the argument measurement (e.g. 0.1km vs. 1m), or false if not.

Example:
```
const length1 = converter.length(0.1, 'km')
const length2 = converter.length(1, 'm')
console.log(length1.isGreaterThan(length2)) // true
```
</details>

## Example application
The example-app directory contains code that imports and uses the module to exemplify the usage of it. To run the example app, enter `npm start` in the command prompt.
