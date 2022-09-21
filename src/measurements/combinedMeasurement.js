import { Measurement } from './measurement.js'

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
 * Represents a combined measurement.
 *
 * @abstract
 */
export class CombinedMeasurement extends Measurement {
  /**
   * Instantiates a CombinedMeasurement object.
   *
   * @param {number} quantity .
   * @param {string} unit .
   * @param {Units} units - The available units of the measurement
   */
  constructor (quantity, unit, units) {
    super(quantity, unit, units)

    // Make the class abstract
    if (this.constructor === CombinedMeasurement) {
      throw new Error('Class "CombinedMeasurement" can not be instantiated.')
    }
  }
}
