import { Validator } from '../validator.js'

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
 * Represents a measurement.
 *
 * @abstract
 */
export class Measurement {
  /**
   * @type {number}
   */
  #quantity

  /**
   * @type {Unit}
   */
  #unit

  /**
   * @type {number}
   */
  #standardUnitQuantity

  /**
   * @type {Unit}
   */
  #standardUnit

  /**
   * The available units of the measurement.
   *
   * @type {Units}
   */
  #units

  /**
   * The validator to validate input with.
   *
   * @type {Validator}
   */
  #validator

  /**
   * Instantiates a Measurement object.
   *
   * @param {number} quantity .
   * @param {string} unitAbbreviation .
   * @param {Units} units - The available units of the measurement.
   */
  constructor (quantity, unitAbbreviation, units) {
    // Make the class abstract
    if (this.constructor === Measurement) {
      throw new Error('Class "Measurement" can not be instantiated.')
    }

    this.#validator = new Validator()

    this.#setUnits(units)
    this.#setStandardUnit()
    this.#setQuantity(quantity)
    this.#setUnit(unitAbbreviation)
    this.#setStandardUnitQuantity()
  }

  /**
   * Gets a copy of the validator.
   *
   * @returns {Validator} .
   */
  get validator () {
    return new Validator()
  }

  /**
   * Validates and sets the units of the measurement.
   *
   * @param {Units} units .
   */
  #setUnits (units) {
    this.#validator.validateUnits(units)
    this.#units = units
  }

  /**
   * Sets the standard unit.
   */
  #setStandardUnit () {
    for (const key in this.#units) {
      if (this.#units[key].ratio === 1) {
        this.#standardUnit = this.#units[key]
      }
    }
  }

  /**
   * Gets the abbreviation of the standard unit.
   *
   * @returns {string} .
   */
  get standardUnit () {
    return this.#standardUnit.abbr
  }

  /**
   * Validates and sets the quantity.
   *
   * @param {number} quantity .
   */
  #setQuantity (quantity) {
    this.#validator.validateQuantity(quantity)
    this.#quantity = quantity
  }

  /**
   * Gets the quantity.
   *
   * @returns {number} The quantity.
   */
  get quantity () {
    return this.#quantity
  }

  /**
   * Validates a unit abbreviation and sets the unit property to the corresponding Unit object.
   *
   * @param {string} unitAbbreviation .
   */
  #setUnit (unitAbbreviation) {
    this.#validator.validateUnitAbbreviation(unitAbbreviation, this.#units)
    this.#unit = this.#retrieveUnit(unitAbbreviation)
  }

  /**
   * Gets the abbreviation of the unit.
   *
   * @returns {string} .
   */
  get unit () {
    return this.#unit.abbr
  }

  /**
   * Retrieves the unit that corresponds to the unit abbreviation.
   *
   * @param {string} unitAbbreviation .
   * @returns {Unit} .
   */
  #retrieveUnit (unitAbbreviation) {
    let unit
    for (const key in this.#units) {
      if (this.#units[key].abbr === unitAbbreviation) {
        unit = this.#units[key]
      }
    }
    return unit
  }

  /**
   * Calculates and sets the standard unit quantity.
   */
  #setStandardUnitQuantity () {
    // Calculates the quantity with factors to create integers out of floating point numbers, wich otherwise may cause miscalculations
    const quantityFactor = this.#getFloatFactor(this.#quantity)
    const ratioFactor = this.#getFloatFactor(this.#unit.ratio)

    this.#standardUnitQuantity = (this.#quantity * quantityFactor) * (this.#unit.ratio * ratioFactor) / (quantityFactor * ratioFactor)
  }

  /**
   * Returns a factor to use in calculations with a float to avoid miscalculations.
   *
   * @param {number} float - The float wich the factor is for
   * @returns {number} .
   */
  #getFloatFactor (float) {
    const noOfDecimals = this.#getNumberOfDecimals(float)
    return 10 ** noOfDecimals
  }

  /**
   * Returns the number of decimals in the provided value.
   *
   * @param {number} value .
   * @returns {number} .
   */
  #getNumberOfDecimals (value) {
    const valueAsString = value.toString()
    return valueAsString.slice(valueAsString.indexOf('.')).length - 1
  }

  /**
   * Gets the standard unit quantity.
   *
   * @returns {number} .
   */
  get standardUnitQuantity () {
    return this.#standardUnitQuantity
  }

  /**
   * Converts the measurement to the given unit and returns the new measurement.
   *
   * @param {string} unitAbbreviation - The abbreviation of the unit to convert to
   * @returns {Measurement} .
   */
  convertTo (unitAbbreviation) {
    this.#validator.validateUnitAbbreviation(unitAbbreviation, this.#units)
    const unit = this.#retrieveUnit(unitAbbreviation)
    const quantity = this.#calculateQuantity(unit.ratio)

    return new this.constructor(quantity, unitAbbreviation)
  }

  /**
   * Converts the measurement to its standard unit and returns the new measurement.
   *
   * @returns {Measurement} .
   */
  convertToStandard () {
    return this.convertTo(this.#standardUnit.abbr)
  }

  /**
   * Calculates quantity given the ratio of a unit and returns the result.
   *
   * @param {number} ratio .
   * @returns {number} .
   */
  #calculateQuantity (ratio) {
    // Calculates the quantity with factors to create integers out of floating point numbers, wich otherwise may cause miscalculations
    const quantityFactor = this.#getFloatFactor(this.#standardUnitQuantity)
    const ratioFactor = this.#getFloatFactor(ratio)

    return ((this.#standardUnitQuantity * quantityFactor) / (ratio * ratioFactor)) / (quantityFactor / ratioFactor)
  }

  /**
   * Returns a string representing the measurement.
   *
   * @returns {string} The string representation.
   */
  toString () {
    return `${this.quantity}${this.unit} (${this.standardUnitQuantity}${this.standardUnit})`
  }
}
