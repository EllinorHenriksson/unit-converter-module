import { Length } from '../src/index.js'

// Retrieves and prints the available length units
const lengthUnits = Length.getUnits()
console.log(`Avaliable length units: ${lengthUnits.join(', ')}`)

// Creates a length object and prints its information
const myLengthInCentimeters = new Length(169, 'cm')
console.log(`My length: ${myLengthInCentimeters.toString()}`)
