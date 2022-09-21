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
}
