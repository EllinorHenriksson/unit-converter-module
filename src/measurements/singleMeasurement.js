import { Measurement } from './measurement.js'

/**
 * Represents a single measurement
 */
export class SingleMeasurement extends Measurement {
  /**
   * Merges this with another single measurement of the same type into a new single measurement in the standard unit.
   *
   * @param {SingleMeasurement} measurement - The other single measurement to merge with.
   * @returns {SingleMeasurement} A new single measurement.
   */
  mergeWith (measurement) {
    this.validator.validateMeasurement(measurement, this.constructor)

    const quantity = this.standardUnitQuantity + measurement.standardUnitQuantity

    return new this.constructor(quantity, this.standardUnit)
  }
}
