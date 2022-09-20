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

  /**
   * Compares this to another measurement of the same type to see if they are equal in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} True or false
   */
  isEqualTo (measurement) {
    this.validator.validateMeasurement(measurement, this.constructor)
    return this.standardUnitQuantity === measurement.standardUnitQuantity
  }

  /**
   * Compares this to another measurement of the same type to see if this is less in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} True or false
   */
  isLessThan (measurement) {
    this.validator.validateMeasurement(measurement, this.constructor)
    return this.standardUnitQuantity < measurement.standardUnitQuantity
  }

  /**
   * Compares this to another measurement of the same type to see if this is greater in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} True or false
   */
  isGreaterThan (measurement) {
    this.validator.validateMeasurement(measurement, this.constructor)
    return this.standardUnitQuantity > measurement.standardUnitQuantity
  }
}
