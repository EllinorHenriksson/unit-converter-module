import { Length, Time, Speed } from '../src/index.js'

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

// Converts several time objects to one in seconds
const totalTimeInSeconds = Time.convertManyTo([new Time(1, 'h'), new Time(30, 'min'), new Time(5, 's')], 's')
console.log(totalTimeInSeconds.toString())

// ---------- Examples of the Speed measurement ----------
// Retrieves and prints the available speed units
const speedUnits = Speed.getUnits()
console.log(`Avaliable speed units: ${speedUnits.join(', ')}`)

// Creates a speed object using the default constructor and prints its information
const mySpeedInKmPerH = new Speed(12, 'km/h')
console.log(`My speed: ${mySpeedInKmPerH.toString()}`)

// Prints the information by getting quantity and abbreviation
console.log(`My speed: ${mySpeedInKmPerH.quantity}${mySpeedInKmPerH.unit.abbr}`)

// Creates a speed object using the static method FromLengthAndTime and prints its information
const mySpeedFromLengthAndTime = Speed.FromLengthAndTime(new Length(5, 'm'), new Time(2, 's'))
console.log(`My speed: ${mySpeedFromLengthAndTime.toString()}`)

// Converts the speed to mi/h and prints its quantity
const mySpeedInMiPerH = mySpeedInKmPerH.convertTo('mi/h')
console.log(`My speed in mi/h: ${mySpeedInMiPerH.quantity}`)
