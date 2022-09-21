import { SingleMeasurement } from './singleMeasurement.js'
import { LengthUnits as Units } from '../units/lengthUnits.js'

/**
 * Represents a length measurement.
 */
export class Length extends SingleMeasurement {
  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   */
  constructor (quantity, unitAbbreviation) {
    super(quantity, unitAbbreviation, Units)
  }
}
