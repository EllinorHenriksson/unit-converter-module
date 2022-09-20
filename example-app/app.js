import { converter } from '../src/index.js'

/*
// General
console.log(converter.measurementTypes)

console.log(converter.lengthUnits)
console.log(converter.timeUnits)
console.log(converter.speedUnits)
*/

/*
// Length
const myLengthInM = converter.length(1, 'm')
console.log(myLengthInM.toString())

const myLengthInCm = myLengthInM.convertTo('cm')
console.log(`${myLengthInCm.quantity}${myLengthInCm.unit} (${myLengthInCm.standardUnitQuantity}${myLengthInCm.standardUnit})`)

const myStandardLength = myLengthInCm.convertToStandard()
console.log(myStandardLength.toString())

const length1 = converter.length(1, 'm')
const length2 = converter.length(3, 'dm')
const length3 = converter.length(30, 'cm')

const totalLengthFromTwo = length1.mergeWith(length2)
console.log(totalLengthFromTwo.toString())

const totalLengthFromAll = converter.mergeAll([length1, length2, length3])
console.log(totalLengthFromAll.toString())

console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is equal?', length2.isEqualTo(length3))
console.log('Length 1:', length1.toString(), 'Length 3:', length3.toString(), 'Is equal?', length1.isEqualTo(length3))

console.log('Length 2:', length2.toString(), 'Length 1:', length1.toString(), 'Is less?', length2.isLessThan(length1))
console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is less?', length2.isLessThan(length3))

console.log('Length 1:', length1.toString(), 'Length 2:', length2.toString(), 'Is greater?', length1.isGreaterThan(length2))
console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is greater?', length2.isGreaterThan(length3))
*/

/*
// Time
const myTimeInS = converter.time(60, 's')
console.log(myTimeInS.toString())

const myTimeInMin = myTimeInS.convertTo('min')
console.log(myTimeInMin.quantity, myTimeInMin.unit)

const time1 = converter.time(1, 'h')
const time2 = converter.time(3, 'min')
const time3 = converter.time(23, 's')

const totalTime = converter.convertManyTo([time1, time2, time3], 's')
console.log(totalTime.toString())

*/

/*

// Speed
const mySpeedInKmPerH = converter.speed(120, 'km/h')
console.log(mySpeedInKmPerH.toString())

const mySpeedInMPerS = mySpeedInKmPerH.convertTo('m/s')
console.log(mySpeedInMPerS.quantity, mySpeedInMPerS.unit)

const myLength = converter.length(2, 'm')
const myTime = converter.time(4, 's')
const mySpeedFromLengthAndTime = converter.speedFromLengthAndTime(myLength, myTime)
console.log(mySpeedFromLengthAndTime.toString())

*/
