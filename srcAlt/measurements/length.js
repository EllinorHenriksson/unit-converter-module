import { Measurement } from './measurement.js'
import { LengthUnits as Units } from '../units/lengthUnits.js'
import { Validator } from '../validator.js'

/**
 * Represents a length measurement.
 */
export class Length extends Measurement {
  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The length unit
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
    return `${super.quantity}${super.unit.abbr} (${super.standardUnitQuantity}m)`
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

    return new Length(totalQuantity, unit)
  }
}
