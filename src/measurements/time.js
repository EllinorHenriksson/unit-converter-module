import { SingleMeasurement } from './singleMeasurement.js'
import { TimeUnits as Units } from '../units/timeUnits.js'

/**
 * Represents a time measurement.
 */
export class Time extends SingleMeasurement {
  /**
   * Instantiates a Time object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   */
  constructor (quantity, unitAbbreviation) {
    super(quantity, unitAbbreviation, Units)
  }
}
