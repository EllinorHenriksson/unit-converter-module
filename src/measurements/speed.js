import { CombinedMeasurement } from './combinedMeasurement.js'
import { SpeedUnits as Units } from '../units/speedUnits.js'

/**
 * Represents a speed measurement.
 */
export class Speed extends CombinedMeasurement {
  /**
   * Instantiates a Speed object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The speed unit
   */
  constructor (quantity, unit) {
    super(quantity, unit, Units)
  }
}
