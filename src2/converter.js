import { Length } from './measurements/length.js'
import { Validator } from './validator.js'

/**
 * Represents a converter.
 */
export class Converter {
  /**
   * The number of decimals wanted in the conversion results.
   */
  #numberOfDecimals

  /**
   * Instantiates a Converter object.
   *
   * @param {number} numberOfDecimals - The wanted number of decimals.
   */
  constructor (numberOfDecimals) {
    this.#setNumberOfDecimals(numberOfDecimals)
  }

  /**
   * Validates and sets the number of decimals wanted in the conversion results.
   *
   * @param {number} numberOfDecimals - The number of decimals.
   */
  #setNumberOfDecimals (numberOfDecimals) {
    Validator.validateNumberOfDecimals(numberOfDecimals)
    this.#numberOfDecimals = numberOfDecimals
  }

  /**
   * Creates and returns a Length object.
   *
   * @param {number} quantity - The length quantity.
   * @param {string} unit - The length unit.
   * @returns {Length} - A length object.
   */
  length (quantity, unit) {
    return new Length(quantity, unit)
  }
}
