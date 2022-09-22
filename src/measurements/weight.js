import { SingleMeasurement } from './singleMeasurement.js'
import { WeightUnits as Units } from '../units/weightUnits.js'

/**
 * Represents a weight measurement.
 */
export class Weight extends SingleMeasurement {
  /**
   * Instantiates a Weight object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   */
  constructor (quantity, unitAbbreviation) {
    super(quantity, unitAbbreviation, Units)
  }
}
