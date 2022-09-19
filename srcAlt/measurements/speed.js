import { Measurement } from './measurement.js'
import { Length } from './length.js'
import { Time } from './time.js'
import { SpeedUnits as Units } from '../units/speedUnits.js'
import { Validator } from '../validator.js'

/**
 * Represents a speed measurement.
 */
export class Speed extends Measurement {
  /**
   * Instantiates a Speed object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The speed unit
   */
  constructor (quantity, unit) {
    super(quantity, unit, Units)
  }

  /**
   * Instantiates a speed object from a length object and a time object.
   *
   * @param {Length} length - A length object
   * @param {Time} time - A Time object
   * @returns {Speed} The instantiated speed object.
   */
  static FromLengthAndTime (length, time) {
    Validator.validateMeasurement(length, Length)
    Validator.validateMeasurement(time, Time)

    const quantity = length.standardUnitQuantity / time.standardUnitQuantity
    return new Speed(quantity, 'm/s')
  }

  /**
   * Returns a string representing the speed measurement.
   *
   * @override
   * @returns {string} The string representation.
   */
  toString () {
    return `${super.quantity}${super.unit.abbr} (${super.standardUnitQuantity}m/s)`
  }

  /**
   * Returns an array with all available units as abbreviations.
   *
   * @returns {string[]} - The created array.
   */
  static getUnits () {
    return Object.values(Units).map(x => x.abbr)
  }
}
