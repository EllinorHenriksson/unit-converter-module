import { Validator } from './validator.js'

// Import measurements
import { Measurement } from './measurements/measurement.js'
import { SingleMeasurement } from './measurements/singleMeasurement.js'
import { Length } from './measurements/length.js'
import { Time } from './measurements/time.js'
import { Speed } from './measurements/speed.js'
import { Weight } from './measurements/weight.js'
import { Volume } from './measurements/volume.js'

// Import measurement units
import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'
import { SpeedUnits } from './units/speedUnits.js'
import { WeightUnits } from './units/weightUnits.js'
import { VolumeUnits } from './units/volumeUnits.js'

/**
 * @typedef Unit
 * @type {object}
 * @property {string} abbr - Abbreviation.
 * @property {number} ratio - Ratio
 */

/**
 * @typedef Units
 * @type {object}
 * @property {Unit} unitName - Unit name holding a unit
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
  #weightUnits

  /**
   * @type {Units}
   */
  #volumeUnits

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
    this.#weightUnits = WeightUnits
    this.#volumeUnits = VolumeUnits
    this.#speedUnits = SpeedUnits

    this.#measurementTypes = [Length, Time, Weight, Volume, Speed]
  }

  /**
   * Returns an array with the names of the available measurement types.
   *
   * @returns {string[]} The array with the names of the available measurement types.
   */
  get measurementTypes () {
    return this.#measurementTypes.map(x => x.name.toLowerCase())
  }

  /**
   * Gets the available length units as an array of abbreviations.
   *
   * @returns {string[]} The available length units as an array of unit abbreviations.
   */
  get lengthUnits () {
    return Object.values(this.#lengthUnits).map(x => x.abbr)
  }

  /**
   * Gets the available time units as an array of abbreviations.
   *
   * @returns {string[]}  The available time units as an array of unit abbreviations.
   */
  get timeUnits () {
    return Object.values(this.#timeUnits).map(x => x.abbr)
  }

  /**
   * Gets the available weight units as an array of abbreviations.
   *
   * @returns {string[]}  The available weight units as an array of unit abbreviations.
   */
  get weightUnits () {
    return Object.values(this.#weightUnits).map(x => x.abbr)
  }

  /**
   * Gets the available volume units as an array of abbreviations.
   *
   * @returns {string[]}  The available volume units as an array of unit abbreviations.
   */
  get volumeUnits () {
    return Object.values(this.#volumeUnits).map(x => x.abbr)
  }

  /**
   * Gets the available speed units as an array of abbreviations.
   *
   * @returns {string[]}  The available speed units as an array of unit abbreviations.
   */
  get speedUnits () {
    return Object.values(this.#speedUnits).map(x => x.abbr)
  }

  /**
   * Creates and returns a Length object.
   *
   * @param {number} quantity - The quantity of the measurement.
   * @param {string} unitAbbreviation - The abbreviation of the unit of the measurement.
   * @returns {Length} - A length object.
   */
  length (quantity, unitAbbreviation) {
    return new Length(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Time object.
   *
   * @param {number} quantity - The quantity of the measurement.
   * @param {string} unitAbbreviation - The abbreviation of the unit of the measurement.
   * @returns {Time} - A time object.
   */
  time (quantity, unitAbbreviation) {
    return new Time(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Weight object.
   *
   * @param {number} quantity - The quantity of the measurement.
   * @param {string} unitAbbreviation - The abbreviation of the unit of the measurement.
   * @returns {Weight} - A weight object.
   */
  weight (quantity, unitAbbreviation) {
    return new Weight(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Volume object.
   *
   * @param {number} quantity - The quantity of the measurement.
   * @param {string} unitAbbreviation - The abbreviation of the unit of the measurement.
   * @returns {Volume} - A volume object.
   */
  volume (quantity, unitAbbreviation) {
    return new Volume(quantity, unitAbbreviation)
  }

  /**
   * Creates and returns a Speed object.
   *
   * @param {number} quantity - The quantity of the measurement.
   * @param {string} unitAbbreviation - The abbreviation of the unit of the measurement.
   * @returns {Speed} - A speed object.
   */
  speed (quantity, unitAbbreviation) {
    return new Speed(quantity, unitAbbreviation)
  }

  /**
   * Instantiates a speed object from a length object and a time object and returns it.
   *
   * @param {Length} length - A length object.
   * @param {Time} time - A time object.
   * @returns {Speed} The resulting Speed object.
   */
  speedFromLengthAndTime (length, time) {
    this.#validator.validateMeasurementType(length, Length)
    this.#validator.validateMeasurementType(time, Time)

    const quantity = length.standardUnitQuantity / time.standardUnitQuantity
    return new Speed(quantity, 'm/s')
  }

  /**
   * Merges many single measurements of the same type into one single measurement in the given unit and returns it.
   *
   * @param {SingleMeasurement[]} measurements - An array of SingleMeasurement subtypes (e.g. Length)
   * @param {string} unitAbbreviation - The abbreviation of the unit to merge the measurements into.
   * @returns {SingleMeasurement} - A SingleMeasurement (e.g. Length) subtype object
   */
  mergeAllInto (measurements, unitAbbreviation) {
    this.#validator.validateSingleMeasurements(measurements)

    let merge = measurements[0].convertTo(unitAbbreviation)

    for (let i = 0; i < measurements.length - 1; i++) {
      merge = merge.mergeWithInto(measurements[i + 1], unitAbbreviation)
    }

    return merge
  }
}
