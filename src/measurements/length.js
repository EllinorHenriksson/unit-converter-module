import { SingleMeasurement } from './singleMeasurement.js'
import { LengthUnits as Units } from '../units/lengthUnits.js'

/**
 * Represents a length measurement.
 */
export class Length extends SingleMeasurement {
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
    return `${super.quantity}${super.unit} (${super.standardUnitQuantity}m)`
  }
}
