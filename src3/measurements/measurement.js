import { Validator } from '../validator.js'

/**
 * Represents a measurement.
 */
export class Measurement {
  /**
   * The quantity in the given unit.
   *
   * @type {number}
   */
  #quantity

  /**
   * The given unit, with properties 'abbr' and 'ratio'.
   *
   * @type {object}
   */
  #unit

  /**
   * The standard unit quantity.
   *
   * @type {number}
   */
  #standardUnitQuantity

  /**
   * The available units of the measurement.
   *
   * @type {object}
   */
  #units

  /**
   * Instantiates a Measurement object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit - The unit
   * @param {units} units - The available units
   */
  constructor (quantity, unit, units) {
    this.#setUnits(units)
    this.#setQuantity(quantity)
    this.#setUnit(unit)
    this.#setStandardUnitQuantity()
  }

  /**
   * Validates and sets the quantity property.
   *
   * @param {number} quantity - The quantity
   */
  #setQuantity (quantity) {
    Validator.validateQuantity(quantity)
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
   * Validates and sets the measurement unit.
   *
   * @param {string} unit - The measurement unit
   */
  #setUnit (unit) {
    Validator.validateUnit(unit, this.#units)
    this.#unit = this.#retrieveUnit(unit)
  }

  /**
   * Gets the unit object, with properties 'abbr' and 'ratio'.
   *
   * @returns {object} The unit object.
   */
  get unit () {
    return this.#unit
  }

  /**
   * Retrieves the corresponding measurement unit object.
   *
   * @param {string} unit - The abbreviation of the unit to look for
   * @returns {object} The unit object, with properties 'abbreviation' and 'ratio'
   */
  #retrieveUnit (unit) {
    let unitObject
    for (const key in this.#units) {
      if (this.#units[key].abbr === unit) {
        unitObject = this.#units[key]
      }
    }
    return unitObject
  }

  /**
   * Calculates and sets the standard unit quantity.
   */
  #setStandardUnitQuantity () {
    this.#standardUnitQuantity = this.#quantity * this.#unit.ratio
  }

  /**
   *Gets the standard unit quantity.
   *
   * @returns {number} The standard unit quantity.
   */
  get standardUnitQuantity () {
    return this.#standardUnitQuantity
  }

  /**
   * Validates and sets the units of the measurement.
   *
   * @param {object} units - A reference to a units object (e.g. LengthUnits)
   */
  #setUnits (units) {
    Validator.validateUnits(units)
    this.#units = units
  }

  /**
   * Converts the measurement to the given unit and returns the resulting quantity.
   *
   * @param {string} unit - The unit to convert to
   * @param {number} numberOfDecimals - The number of decimals wanted in the result @optional
   * @returns {number} The resulting quantity
   */
  convertTo (unit, numberOfDecimals) {
    Validator.validateUnit(unit, this.#units)
    const unitObject = this.#retrieveUnit(unit)
    let quantity = this.#calculateQuantity(unitObject.ratio)

    if (numberOfDecimals) {
      Validator.validateNumberOfDecimals(numberOfDecimals)
      quantity = Number(quantity.toFixed(numberOfDecimals))
    }

    return quantity
  }

  /**
   * Calculates quantity given the ratio of a unit.
   *
   * @param {number} ratio - The ratio to use in the calculation
   * @returns {number} The resulting quantity
   */
  #calculateQuantity (ratio) {
    return this.#standardUnitQuantity / ratio
  }
}
