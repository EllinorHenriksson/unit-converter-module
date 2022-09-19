import { SingleMeasurement } from './singleMeasurement.js'
import { TimeUnits as Units } from '../units/timeUnits.js'

/**
 * Represents a time measurement.
 */
export class Time extends SingleMeasurement {
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
   * Returns a string representing the speed measurement.
   *
   * @override
   * @returns {string} The string representation.
   */
  toString () {
    return `${super.quantity}${super.unit} (${super.standardUnitQuantity}s)`
  }
}
