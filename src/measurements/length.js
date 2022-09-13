import { Validator } from '../validator.js'

/**
 * Represents a length measurement.
 */
export class Length {
  /**
   * The quatity.
   *
   * @type {number}
   */
  #quantity

  /**
   * The length unit.
   *
   * @type {string}
   */
  #unit

  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity - The quantity.
   * @param {string} unit - The length unit.
   */
  constructor (quantity, unit) {
    this.#setQuantity(quantity)
    this.#setUnit(unit)
  }

  /**
   * Returns the quantity.
   *
   * @returns {number} - The quantity.
   */
  #getQuantity () {
    return this.#quantity
  }

  /**
   * Validates and sets the quantity property.
   *
   * @param {number} quantity - The quantity.
   */
  #setQuantity (quantity) {
    Validator.validateQuantity(quantity)
    this.#quantity = quantity
  }

  /**
   * Validates and sets the length unit.
   *
   * @param {string} unit - The length unit.
   */
  #setUnit (unit) {
    Validator.validateLengthUnit(unit)
    this.#unit = unit
  }

  /**
   * Converts itself from its current unit to an other unit, and returns the resulting quantity.
   *
   * @param {string} unit - The unit to convert to.
   * @returns {number} - The resulting quantity.
   */
  to (unit) {
    // OBS! Jobba vidare här

    // Make conversion

    return this.#getQuantity()
  }
}
