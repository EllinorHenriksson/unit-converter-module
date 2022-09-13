import { LengthUnits } from './units.js'

/**
 * Represents a validator.
 */
export class Validator {
  /**
   * Validates quantity, wich must be a number greater than 0.
   *
   * @param {number} quantity - The quantity.
   */
  static validateQuantity (quantity) {
    const errorMessage = 'Quantity must be a number greater than 0.'

    if (typeof quantity !== 'number') {
      throw new TypeError(errorMessage)
    } else if (quantity <= 0) {
      throw new RangeError(errorMessage)
    }
  }

  /**
   * Validates the number of decimals, wich must be an integer greater than or equal to 0.
   *
   * @param {number} numberOfDecimals - The number of decimals.
   */
  static validateNumberOfDecimals (numberOfDecimals) {
    const errorMessage = 'Number of decimals must be an integer greater than or equal to 0.'

    if (!Number.isInteger(numberOfDecimals)) {
      throw new TypeError(errorMessage)
    } else if (numberOfDecimals < 0) {
      throw new RangeError(errorMessage)
    }
  }

  /**
   * Validates length unit, wich must be of the enum type LengthUnits.
   *
   * @param {string} unit - The unit.
   */
  static validateLengthUnit (unit) {
    const lengthUnits = Object.values(LengthUnits)

    if (!lengthUnits.includes(unit)) {
      throw new Error('The length unit must be any of the following: ' + lengthUnits.join(', '))
    }
  }
}
