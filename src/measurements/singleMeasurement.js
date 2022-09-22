import { Measurement } from './measurement.js'

/**
 * @typedef Unit
 * @type {object}
 * @property {string} abbr - Abbreviation.
 * @property {number} ratio .
 */

/**
 * @typedef Units
 * @type {object}
 * @property {Unit} unitName - (Multiple properties)
 */

/**
 * Represents a single measurement.
 *
 * @abstract
 */
export class SingleMeasurement extends Measurement {
  /**
   * Instantiates a SingleMeasurement object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   * @param {Units} units - The available units of the measurement
   */
  constructor (quantity, unitAbbreviation, units) {
    super(quantity, unitAbbreviation, units)

    // Make the class abstract
    if (this.constructor === SingleMeasurement) {
      throw new Error('Class "SingleMeasurement" can not be instantiated.')
    }
  }

  /**
   * Merges this with another single measurement of the same type into a new single measurement in the given unit and returns it.
   *
   * @param {SingleMeasurement} measurement .
   * @param {string} unitAbbreviation .
   * @returns {SingleMeasurement} .
   */
  mergeWithInto (measurement, unitAbbreviation) {
    this.validator.validateMeasurementType(measurement, this.constructor)

    const conversion1 = this.convertTo(unitAbbreviation)
    const conversion2 = measurement.convertTo(unitAbbreviation)

    const totalQuantity = conversion1.quantity + conversion2.quantity

    return new this.constructor(totalQuantity, conversion1.unit)
  }

  /**
   * Compares this to another measurement of the same type to see if they are equal in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} .
   */
  isEqualTo (measurement) {
    this.validator.validateMeasurementType(measurement, this.constructor)
    return this.standardUnitQuantity === measurement.standardUnitQuantity
  }

  /**
   * Compares this to another measurement of the same type to see if this is less in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} .
   */
  isLessThan (measurement) {
    this.validator.validateMeasurementType(measurement, this.constructor)
    return this.standardUnitQuantity < measurement.standardUnitQuantity
  }

  /**
   * Compares this to another measurement of the same type to see if this is greater in quantity after being converted to the same unit.
   *
   * @param {Measurement} measurement The measurement to compare with
   * @returns {boolean} .
   */
  isGreaterThan (measurement) {
    this.validator.validateMeasurementType(measurement, this.constructor)
    return this.standardUnitQuantity > measurement.standardUnitQuantity
  }
}
