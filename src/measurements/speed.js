import { CombinedMeasurement } from './combinedMeasurement.js'
import { SpeedUnits as Units } from '../units/speedUnits.js'

/**
 * Represents a speed measurement.
 */
export class Speed extends CombinedMeasurement {
  /**
   * Instantiates a Speed object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   */
  constructor (quantity, unitAbbreviation) {
    super(quantity, unitAbbreviation, Units)
  }
}
