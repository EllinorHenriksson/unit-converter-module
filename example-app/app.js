import { Length, Time } from '../src/index.js'

// ---------- Examples of the Time measurement ----------
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

// ---------- Examples of the Time measurement ----------
// Retrieves and prints the available time units
const timeUnits = Time.getUnits()
console.log(`Avaliable time units: ${timeUnits.join(', ')}`)

// Creates a time object and prints its information
const myTimeInMinutes = new Time(30, 'min')
console.log(`My time: ${myTimeInMinutes.toString()}`)

// Prints the information by getting quantity and abbreviation
console.log(`My time: ${myTimeInMinutes.quantity}${myTimeInMinutes.unit.abbr}`)

// Converts the time to hours and prints its quantity
const myTimeInHours = myTimeInMinutes.convertTo('h')
console.log(`My time in hours: ${myTimeInHours.quantity}`)

// Converts the time to seconds and rounds the result with 2 decimals
const myTimeInSeconds = myTimeInMinutes.convertTo('s')
console.log(`My time in seconds with 2 decimals: ${myTimeInSeconds.getQuantityWithDecimals(2)}`)

// Converts several time objects to one in seconds
const totalTimeInSeconds = Time.convertManyTo([new Time(1, 'h'), new Time(30, 'min'), new Time(5, 's')], 's')
console.log(totalTimeInSeconds.toString())

// OBS! Fortsätt med en klass för Speed med 2 konstruktorer: new Speed(quantity, 'unit') och Speed.FromLengthAndTime(Length, Time)
// Ev acceleration
