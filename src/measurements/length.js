import { Validator } from '../validator.js'
import { LengthUnits } from '../units/lengthUnits.js'

/**
 * Represents a length measurement.
 */
export class Length {
  /**
   * The quantity.
   *
   * @type {number}
   */
  #quantity

  /**
   * The length unit, with properties 'abbreviation' and 'ratio'.
   *
   * @type {object}
   */
  #unit

  /**
   * The quantity in meters.
   *
   * @type {number}
   */
  #meterQuantity

  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity - The quantity.
   * @param {string} unit - The length unit.
   */
  constructor (quantity, unit) {
    this.#setQuantity(quantity)
    this.#setUnit(unit)
    this.#setMeterQuantity()
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
    this.#unit = this.#retrieveUnit(unit)
  }

  /**
   * Retrieves the corresponding length unit object.
   *
   * @param {string} unit - The abbreviation of the unit to look for.
   * @returns {object} The unit object, with properties 'abbreviation' and 'ratio'.
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
   * Calculates and sets the meter quantity.
   */
  #setMeterQuantity () {
    this.#meterQuantity = this.#quantity * this.#unit.ratio
  }

  /**
   * Returns a string representing the length measurement.
   *
   * @returns {string} - The string representation.
   */
  toString () {
    return `${this.#quantity}${this.#unit.abbr} (${this.#meterQuantity}m)`
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
