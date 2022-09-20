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

  #measurementTypes = [Length, Time, Speed]

  /**
   * Instantiates a Converter object.
   */
  constructor () {
    this.#validator = new Validator()

    this.#lengthUnits = LengthUnits
    this.#timeUnits = TimeUnits
    this.#speedUnits = SpeedUnits
  }

  /**
   * Returns an array with the names of the available measurement types.
   *
   * @returns {string[]} The names.
   */
  get measurementTypes () {
    return this.#measurementTypes.map(x => x.name)
  }

  /**
   * Gets the available length units as an array of abbreviations.
   *
   * @returns {string[]} The abbreviations
   */
  get lengthUnits () {
    return Object.values(this.#lengthUnits).map(x => x.abbr)
  }

  /**
   * Gets the available time units as an array of abbreviations.
   *
   * @returns {string[]} The abbreviations
   */
  get timeUnits () {
    return Object.values(this.#timeUnits).map(x => x.abbr)
  }

  /**
   * Gets the available speed units as an array of abbreviations.
   *
   * @returns {string[]} The abbreviations
   */
  get speedUnits () {
    return Object.values(this.#speedUnits).map(x => x.abbr)
  }

  /**
   * Creates and returns a Length object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit - The abbreviation of the length unit
   * @returns {Length} The Length object
   */
  length (quantity, unit) {
    return new Length(quantity, unit)
  }

  /**
   * Creates and returns a Time object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit - The abbreviation of the time unit
   * @returns {Time} The Time object
   */
  time (quantity, unit) {
    return new Time(quantity, unit)
  }

  /**
   * Creates and returns a Speed object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit - The abbreviation of the speed unit
   * @returns {Speed} The Speed object
   */
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
   * Merges many single measurements of the same type into one single measurement in the standard unit.
   *
   * @param {SingleMeasurement[]} measurements - An array of SingleMeasurement sub types
   * @returns {SingleMeasurement} The resulting single measurement
   */
  mergeAll (measurements) {
    this.#validator.validateSingleMeasurements(measurements)

    let merge = measurements[0]

    for (let i = 0; i < measurements.length - 1; i++) {
      merge = merge.mergeWith(measurements[i + 1])
    }

    return merge
  }
}
