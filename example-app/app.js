import { converter } from '../src/index.js'

/*
console.log(converter.lengthUnits)
console.log(converter.timeUnits)
console.log(converter.speedUnits)

const myLengthInM = converter.length(1, 'm')
console.log(myLengthInM.toString())

const myLengthInCm = myLengthInM.convertTo('cm')
console.log(myLengthInCm.quantity, myLengthInCm.unit)

const length1 = converter.length(1, 'm')
const length2 = converter.length(3, 'dm')
const length3 = converter.length(23, 'cm')

const totalLength = converter.convertManyTo([length1, length2, length3], 'cm')
console.log(totalLength.toString())

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

// Speed
const mySpeedInKmPerH = converter.speed(120, 'km/h')
console.log(mySpeedInKmPerH.toString())

const mySpeedInMPerS = mySpeedInKmPerH.convertTo('m/s')
console.log(mySpeedInMPerS.quantity, mySpeedInMPerS.unit)

const myLength = converter.length(2, 'm')
const myTime = converter.time(4, 's')
const mySpeedFromLengthAndTime = converter.speedFromLengthAndTime(myLength, myTime)
console.log(mySpeedFromLengthAndTime.toString())
