import { Validator } from '../validator.js'
import { LengthUnits as Units } from '../units/lengthUnits.js'

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
   * The standard unit quantity.
   *
   * @type {number}
   */
  #standardUnitQuantity

  /**
   * Instantiates a Length object.
   *
   * @param {number} quantity - The quantity
   * @param {string} unit The length unit
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
   * @returns {object} The unit object, with properties 'abbreviation' and 'ratio'
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
   * Converts the measurement to the given unit and returns the resulting quantity.
   *
   * @param {string} unit - The unit to convert to
   * @param {number} numberOfDecimals - The number of decimals wanted in the result @optional
   * @returns {number} The resulting quantity
   */
  convert (unit, numberOfDecimals) {
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
   * Returns a string representing the length measurement.
   *
   * @returns {string} The string representation.
   */
  toString () {
    return `${this.#quantity}${this.#unit.abbr} (${this.#standardUnitQuantity}m)`
  }

  /**
   * Returns an array with all available units as abbreviations.
   *
   * @returns {string[]} - The created array.
   */
  static getUnits () {
    return Object.values(Units).map(x => x.abbr)
  }

  static convertMany (measurements, unit, numberOfDecimals) {
    measurements.forEach(x => {
      Validator.validateMeasurement(x, this)
    })

    let totalQuantity = 0
    measurements.forEach(x => {
      totalQuantity += x.convert(unit)
    })

    if (numberOfDecimals) {
      Validator.validateNumberOfDecimals(numberOfDecimals)
      totalQuantity = Number(totalQuantity.toFixed(numberOfDecimals))
    }

    return totalQuantity
  }
}
