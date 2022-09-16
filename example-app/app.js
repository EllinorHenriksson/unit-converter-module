import { Length } from '../src/index.js'
/*
// Retrieves and prints the available length units
const lengthUnits = Length.getUnits()
console.log(`Avaliable length units: ${lengthUnits.join(', ')}`)

// Creates a length object and prints its information
const myLengthInCentimeters = new Length(169, 'cm')
console.log(`My length: ${myLengthInCentimeters.toString()}`)

// Converts the length to feet and prints the result
const myLengthInFeet = myLengthInCentimeters.convertTo('ft')
console.log(`My length in feet: ${myLengthInFeet}`)

// Converts the length to inches and rounds the result with 2 decimals
const myLengthInInches = myLengthInCentimeters.convertTo('in', 2)
console.log(`My length in inches with 2 decimals: ${myLengthInInches}`)

const myTimeInSeconds = new Time(30, 's')
console.log(myTimeInSeconds.toString())
console.log(Time.getUnits())

const totalLengthInM = Length.convertMany([new Length(1, 'm'), new Length(1, 'dm'), new Length(2, 'cm')], 'm', 2)
console.log(totalLengthInM)
*/

const myLength = new Length (10, 'm')
