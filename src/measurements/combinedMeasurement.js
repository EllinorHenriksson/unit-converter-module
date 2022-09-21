import { Measurement } from './measurement.js'

/**
 * Represents a combined measurement.
 *
 * @abstract
 */
export class CombinedMeasurement extends Measurement {
  /**
   * Instantiates a CombinedMeasurement object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit - The unit
   * @param {units} units - The available units
   */
  constructor (quantity, unit, units) {
    super(quantity, unit, units)

    // Make the class abstract
    if (this.constructor === CombinedMeasurement) {
      throw new Error('Class "CombinedMeasurement" can not be instantiated.')
    }
  }
}
