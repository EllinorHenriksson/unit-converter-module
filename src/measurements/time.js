import { Validator } from '../validator.js'
import { TimeUnits as Units } from '../units/timeUnits.js'

/**
 * Represents a time measurement.
 */
export class Time {
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
   * Instantiates a Time object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The time unit
   */
  constructor (quantity, unit) {
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
   * Validates and sets the measurement unit.
   *
   * @param {string} unit - The measurement unit
   */
  #setUnit (unit) {
    Validator.validateUnit(unit, Units)
    this.#unit = this.#retrieveUnit(unit)
  }

  /**
   * Retrieves the corresponding measurement unit object.
   *
   * @param {string} unit - The abbreviation of the unit to look for
   * @returns {object} The unit object, with properties 'abbr' and 'ratio'
   */
  #retrieveUnit (unit) {
    let unitObject
    for (const key in Units) {
      if (Units[key].abbr === unit) {
        unitObject = Units[key]
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
   * Converts the time to the given unit and returns the resulting quantity.
   *
   * @param {string} unit - The unit to convert to
   * @param {number} numberOfDecimals - The number of decimals wanted in the result @optional
   * @returns {number} The resulting quantity
   */
  convertTo (unit, numberOfDecimals) {
    Validator.validateUnit(unit, Units)
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

  /**
   * Returns a string representing the time measurement.
   *
   * @returns {string} The string representation.
   */
  toString () {
    return `${this.#quantity}${this.#unit.abbr} (${this.#standardUnitQuantity}s)`
  }

  /**
   * Creates and returns an array with all available units as abbreviations.
   *
   * @returns {string[]} - The created array.
   */
  static getUnits () {
    return Object.values(Units).map(x => x.abbr)
  }
}
