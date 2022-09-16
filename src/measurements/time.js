import { Measurement } from './measurement.js'
import { TimeUnits as Units } from '../units/timeUnits.js'
import { Validator } from '../validator.js'

/**
 * Represents a time measurement.
 */
export class Time extends Measurement {
  /**
   * Instantiates a Time object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The time unit
   */
  constructor (quantity, unit) {
    super(quantity, unit, Units)
  }

  /**
   * Returns a string representing the length measurement.
   *
   * @override
   * @returns {string} The string representation.
   */
  toString () {
    return `${super.quantity}${super.unit.abbr} (${super.standardUnitQuantity}s)`
  }

  /**
   * Returns an array with all available units as abbreviations.
   *
   * @returns {string[]} - The created array.
   */
  static getUnits () {
    return Object.values(Units).map(x => x.abbr)
  }

  /**
   * Converts many measurements into one measurement of the given unit.
   *
   * @param {Measurement[]} measurements - An array of Measurement sub types
   * @param {string} unit - The unit to convert the measurements to
   * @returns {Measurement} The resulting measurement
   */
  static convertManyTo (measurements, unit) {
    Validator.validateMeasurements(measurements, this)

    const conversions = []
    measurements.forEach(x => {
      conversions.push(x.convertTo(unit))
    })

    let totalQuantity = 0
    conversions.forEach(x => {
      totalQuantity += x.quantity
    })

    return new Time(totalQuantity, unit)
  }
}
