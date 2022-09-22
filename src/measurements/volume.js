import { SingleMeasurement } from './singleMeasurement.js'
import { VolumeUnits as Units } from '../units/volumeUnits.js'

/**
 * Represents a volume measurement.
 */
export class Volume extends SingleMeasurement {
  /**
   * Instantiates a Volume object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   */
  constructor (quantity, unitAbbreviation) {
    super(quantity, unitAbbreviation, Units)
  }
}
