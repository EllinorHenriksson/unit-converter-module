import { Validator } from './validator.js'

// Import measurements
import { Measurement } from './measurements/measurement.js'
import { SingleMeasurement } from './measurements/singleMeasurement.js'
import { Length } from './measurements/length.js'
import { Time } from './measurements/time.js'
import { Speed } from './measurements/speed.js'

// Import measurement units
import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'
import { SpeedUnits } from './units/speedUnits.js'

/**
 * @typedef Unit
 * @type {object}
 * @property {string} abbr - Abbreviation.
 * @property {number} ratio .
 */

/**
 * @typedef Units
 * @type {object}
 * @property {Unit} unitName - (Multiple properties)
 */

/**
 * Represents a converter.
 */
export class Converter {
  /**
   * @type {Validator}
   */
  #validator

  /**
   * @type {Units}
   */
  #lengthUnits

  /**
   * @type {Units}
   */
  #timeUnits

  /**
   * @type {Units}
   */
  #speedUnits

  /**
   * @type {Measurement[]}
   */
  #measurementTypes

  /**
   * Instantiates a Converter object.
   */
  constructor () {
    this.#validator = new Validator()

    this.#lengthUnits = LengthUnits
    this.#timeUnits = TimeUnits
    this.#speedUnits = SpeedUnits

    this.#measurementTypes = [Length, Time, Speed]
  }

  /**
   * Returns an array with the names of the available measurement types.
   *
   * @returns {string[]} .
   */
  get measurementTypes () {
    return this.#measurementTypes.map(x => x.name)
  }

  /**
   * Gets the available length units as an array of abbreviations.
   *
   * @returns {string[]} .
   */
  get lengthUnits () {
    return Object.values(this.#lengthUnits).map(x => x.abbr)
  }

  /**
   * Gets the available time units as an array of abbreviations.
   *
   * @returns {string[]} .
   */
  get timeUnits () {
    return Object.values(this.#timeUnits).map(x => x.abbr)
  }

  /**
   * Gets the available speed units as an array of abbreviations.
   *
   * @returns {string[]} .
   */
  get speedUnits () {
    return Object.values(this.#speedUnits).map(x => x.abbr)
  }

  /**
   * Creates and returns a Length object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   * @returns {Length} .
   */
  length (quantity, unitAbbreviation) {
    return new Length(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Time object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   * @returns {Time} .
   */
  time (quantity, unitAbbreviation) {
    return new Time(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Speed object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   * @returns {Speed} .
   */
  speed (quantity, unitAbbreviation) {
    return new Speed(quantity, unitAbbreviation)
  }

  /**
   * Instantiates a speed object from a length object and a time object and returns it.
   *
   * @param {Length} length .
   * @param {Time} time .
   * @returns {Speed} .
   */
  speedFromLengthAndTime (length, time) {
    this.#validator.validateMeasurementType(length, Length)
    this.#validator.validateMeasurementType(time, Time)

    const quantity = length.standardUnitQuantity / time.standardUnitQuantity
    return new Speed(quantity, 'm/s')
  }

  /**
   * Merges many single measurements of the same type into one single measurement in the standard unit and returns it.
   *
   * @param {SingleMeasurement[]} measurements .
   * @returns {SingleMeasurement} .
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
