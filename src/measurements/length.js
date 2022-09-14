import { Validator } from '../validator.js'
import { LengthUnits } from '../units/lengthUnits.js'

/**
 * Represents a length measurement.
 */
export class Length {
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
   * The quantity in meters.
   *
   * @type {number}
   */
  #quantityInMeters

  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The length unit
   */
  constructor (quantity, unit) {
    this.#setQuantity(quantity)
    this.#setUnit(unit)
    this.#setQuantityInMeters()
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
   * Validates and sets the length unit.
   *
   * @param {string} unit - The length unit
   */
  #setUnit (unit) {
    Validator.validateLengthUnit(unit)
    this.#unit = this.#retrieveUnit(unit)
  }

  /**
   * Retrieves the corresponding length unit object.
   *
   * @param {string} unit - The abbreviation of the unit to look for
   * @returns {object} The unit object, with properties 'abbreviation' and 'ratio'
   */
  #retrieveUnit (unit) {
    let unitObject
    for (const key in LengthUnits) {
      if (LengthUnits[key].abbr === unit) {
        unitObject = LengthUnits[key]
      }
    }
    return unitObject
  }

  /**
   * Calculates and sets the quantity in meters.
   */
  #setQuantityInMeters () {
    this.#quantityInMeters = this.#quantity * this.#unit.ratio
  }

  /**
   * Converts the length to the given unit and returns the resulting quantity.
   *
   * @param {string} unit - The unit to convert to
   * @param {number} numberOfDecimals - The number of decimals wanted in the result @optional
   * @returns {number} The resulting quantity
   */
  convertTo (unit, numberOfDecimals) {
    Validator.validateLengthUnit(unit)
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
    return this.#quantityInMeters / ratio
  }

  /**
   * Returns a string representing the length measurement.
   *
   * @returns {string} The string representation.
   */
  toString () {
    return `${this.#quantity}${this.#unit.abbr} (${this.#quantityInMeters}m)`
  }

  /**
   * Returns an array with all available length units as abbreviations.
   *
   * @returns {string[]} - The created array.
   */
  static getUnits () {
    return Object.values(LengthUnits).map(x => x.abbr)
  }
}
