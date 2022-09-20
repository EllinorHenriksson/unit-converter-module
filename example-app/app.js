import { converter } from '../src/index.js'

// --- General ---
//
//
console.log('--- General ---')

console.log('Measurement types:', converter.measurementTypes)

console.log('Length units:', converter.lengthUnits)
console.log('Time units:', converter.timeUnits)
console.log('Speed units:', converter.speedUnits)

// --- Length ---
//
//
console.log('--- Length ---')

const myLengthInM = converter.length(1, 'm')
console.log('My length in meters:', myLengthInM.toString())

const myLengthInCm = myLengthInM.convertTo('cm')
console.log(`My length converted to centimeters: ${myLengthInCm.quantity}${myLengthInCm.unit} (${myLengthInCm.standardUnitQuantity}${myLengthInCm.standardUnit})`)

const myStandardLength = myLengthInCm.convertToStandard()
console.log('My length converted to the standard unit:', myStandardLength.toString())

const length1 = converter.length(1, 'm')
const length2 = converter.length(3, 'dm')
const length3 = converter.length(30, 'cm')

const totalLengthFromTwo = length1.mergeWith(length2)
console.log(`Total length from ${length1.toString()} and ${length2.toString()}: ${totalLengthFromTwo.toString()}`)

const totalLengthFromAll = converter.mergeAll([length1, length2, length3])
console.log(`Total length from ${length1.toString()}, ${length2.toString()} and ${length3.toString()}: ${totalLengthFromAll.toString()}`)

console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is equal?', length2.isEqualTo(length3))
console.log('Length 1:', length1.toString(), 'Length 3:', length3.toString(), 'Is equal?', length1.isEqualTo(length3))

console.log('Length 2:', length2.toString(), 'Length 1:', length1.toString(), 'Is less?', length2.isLessThan(length1))
console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is less?', length2.isLessThan(length3))

console.log('Length 1:', length1.toString(), 'Length 2:', length2.toString(), 'Is greater?', length1.isGreaterThan(length2))
console.log('Length 2:', length2.toString(), 'Length 3:', length3.toString(), 'Is greater?', length2.isGreaterThan(length3))

// --- Time ---
//
//
console.log('--- Time ---')

const myTimeInS = converter.time(60, 's')
console.log('My time in seconds:', myTimeInS.toString())

const myTimeInMin = myTimeInS.convertTo('min')
console.log(`My time converted to minutes: ${myTimeInMin.quantity}${myTimeInMin.unit} (${myTimeInMin.standardUnitQuantity}${myTimeInMin.standardUnit})`)

const myStandardTime = myTimeInMin.convertToStandard()
console.log('My time converted to the standard unit:', myStandardTime.toString())

const time1 = converter.time(1, 'h')
const time2 = converter.time(3, 'min')
const time3 = converter.time(180, 's')

const totalTimeFromTwo = time1.mergeWith(time2)
console.log(`Total time from ${time1.toString()} and ${time2.toString()}: ${totalTimeFromTwo.toString()}`)

const totalTimeFromAll = converter.mergeAll([time1, time2, time3])
console.log(`Total time from ${time1.toString()}, ${time2.toString()} and ${time3.toString()}: ${totalTimeFromAll.toString()}`)

console.log('Time 2:', time2.toString(), 'Time 3:', time3.toString(), 'Is equal?', time2.isEqualTo(time3))
console.log('Time 1:', time1.toString(), 'Time 3:', time3.toString(), 'Is equal?', time1.isEqualTo(time3))

console.log('Time 2:', time2.toString(), 'Time 1:', time1.toString(), 'Is less?', time2.isLessThan(time1))
console.log('Time 2:', time2.toString(), 'Time 3:', time3.toString(), 'Is less?', time2.isLessThan(time3))

console.log('Time 1:', time1.toString(), 'Time 2:', time2.toString(), 'Is greater?', time1.isGreaterThan(time2))
console.log('Time 2:', time2.toString(), 'Time 3:', time3.toString(), 'Is greater?', time2.isGreaterThan(time3))

// --- Speed ---
//
//
console.log('--- Speed ---')

const mySpeedInMPerS = converter.speed(50, 'm/s')
console.log('My speed in m/s:', mySpeedInMPerS.toString())

const mySpeedInKmPerH = mySpeedInMPerS.convertTo('km/h')
console.log(`My speed converted to km/h: ${mySpeedInKmPerH.quantity}${mySpeedInKmPerH.unit} (${mySpeedInKmPerH.standardUnitQuantity}${mySpeedInKmPerH.standardUnit})`)

const myStandardSpeed = mySpeedInKmPerH.convertToStandard()
console.log('My speed converted to the standard unit:', myStandardSpeed.toString())

const myLength = converter.length(2, 'm')
const myTime = converter.time(4, 's')
const mySpeedFromLengthAndTime = converter.speedFromLengthAndTime(myLength, myTime)
console.log(`My speed from length ${myLength} and time ${myTime}: ${mySpeedFromLengthAndTime.toString()}`)
