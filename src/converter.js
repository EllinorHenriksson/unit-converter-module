import { Validator } from './validator.js'

// Import measurements
import { SingleMeasurement } from './measurements/singleMeasurement.js'
import { Length } from './measurements/length.js'
import { Time } from './measurements/time.js'
import { Speed } from './measurements/speed.js'

// Import measurement units
import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'
import { SpeedUnits } from './units/speedUnits.js'

/**
 * Represents a converter.
 */
export class Converter {
  #validator

  #lengthUnits

  #timeUnits

  #speedUnits

  constructor () {
    this.#validator = new Validator()

    this.#lengthUnits = LengthUnits
    this.#timeUnits = TimeUnits
    this.#speedUnits = SpeedUnits
  }

  get lengthUnits () {
    return Object.values(this.#lengthUnits).map(x => x.abbr)
  }

  get timeUnits () {
    return Object.values(this.#timeUnits).map(x => x.abbr)
  }

  get speedUnits () {
    return Object.values(this.#speedUnits).map(x => x.abbr)
  }

  length (quantity, unit) {
    return new Length(quantity, unit)
  }

  time (quantity, unit) {
    return new Time(quantity, unit)
  }

  speed (quantity, unit) {
    return new Speed(quantity, unit)
  }

  /**
   * Instantiates a speed object from a length object and a time object.
   *
   * @param {Length} length - A length object
   * @param {Time} time - A Time object
   * @returns {Speed} The instantiated speed object.
   */
  speedFromLengthAndTime (length, time) {
    this.#validator.validateMeasurement(length, Length)
    this.#validator.validateMeasurement(time, Time)

    const quantity = length.standardUnitQuantity / time.standardUnitQuantity
    return new Speed(quantity, 'm/s')
  }

  /**
   * Converts many single measurements into one single measurement of the given unit.
   *
   * @param {SingleMeasurement[]} singleMeasurements - An array of SingleMeasurement sub types
   * @param {string} unit - The unit to convert the measurements to
   * @returns {SingleMeasurement} The resulting measurement
   */
  convertManyTo (singleMeasurements, unit) {
    this.#validator.validateSingleMeasurements(singleMeasurements)

    const conversions = []
    singleMeasurements.forEach(x => {
      conversions.push(x.convertTo(unit))
    })

    let totalQuantity = 0
    conversions.forEach(x => {
      totalQuantity += x.quantity
    })

    return new singleMeasurements[0].constructor(totalQuantity, unit)
  }
}
