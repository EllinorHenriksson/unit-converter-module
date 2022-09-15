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
   * @param {*} measurements 
   * @param {*} unit 
   * @param {*} numberOfDecimals 
   * @returns 
   */
  static convertMany () {
    measurements.forEach(x => {
      Validator.validateMeasurement(x, this)
    })

    let totalQuantity = 0
    measurements.forEach(x => {
      totalQuantity += x.convertTo(unit)
    })

    if (numberOfDecimals) {
      Validator.validateNumberOfDecimals(numberOfDecimals)
      totalQuantity = Number(totalQuantity.toFixed(numberOfDecimals))
    }

    return totalQuantity
  }
}
