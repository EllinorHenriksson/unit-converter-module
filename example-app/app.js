import { converter } from '../src/index.js'

// --- General ---
//
//
console.log('\n--- General ---\n')

console.log('Measurement types:', converter.measurementTypes)

console.log('Length units:', converter.lengthUnits)
console.log('Time units:', converter.timeUnits)
console.log('Weight units:', converter.weightUnits)
console.log('Volume units:', converter.volumeUnits)
console.log('Speed units:', converter.speedUnits)

// --- Single Measurement (Length) ---
//
//
console.log('\n--- Single Measurement (Length) ---\n')

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

// --- Combined Measurement (Speed) ---
//
//
console.log('\n--- Combined Measurement (Speed) ---\n')

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
