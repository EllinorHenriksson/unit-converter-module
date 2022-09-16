import { Length } from '../src/index.js'

// Retrieves and prints the available length units
const lengthUnits = Length.getUnits()
console.log(`Avaliable length units: ${lengthUnits.join(', ')}`)

// Creates a length object and prints its information
const myLengthInCentimeters = new Length(169, 'cm')
console.log(`My length: ${myLengthInCentimeters.toString()}`)

// Prints the information by getting quantity and abbreviation
console.log(`My length: ${myLengthInCentimeters.quantity}${myLengthInCentimeters.unit.abbr}`)

// Converts the length to feet and prints its quantity
const myLengthInFeet = myLengthInCentimeters.convertTo('ft')
console.log(`My length in feet: ${myLengthInFeet.quantity}`)

// Converts the length to inches and rounds the result with 2 decimals
const myLengthInInches = myLengthInCentimeters.convertTo('in')
console.log(`My length in inches with 2 decimals: ${myLengthInInches.getQuantityWithDecimals(2)}`)

// Converts several length objects to one in meters
const totalLengthInMeters = Length.convertManyTo([new Length(1, 'm'), new Length(1, 'dm'), new Length(2, 'cm')], 'm')
console.log(totalLengthInMeters.toString())
