import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'

const UNITS = [LengthUnits, TimeUnits]

/**
 * Represents a validator.
 */
export class Validator {
  /**
   * Validates the units, wich must be a reference to one of the units objects.
   *
   * @param {object} units - A refrence to a units object (e.g. LengthUnits)
   */
  static validateUnits (units) {
    if (!UNITS.includes(units)) {
      throw new Error('Units must be a reference to one of the units objects.')
    }
  }

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
   * Validates a unit, wich must correspont to one of the units represented in the units object.
   *
   * @param {string} unit - The unit to validate.
   * @param {object} units - The units to validate against.
   */
  static validateUnit (unit, units) {
    const unitAbbreviations = Object.values(units).map(x => x.abbr)

    if (!unitAbbreviations.includes(unit)) {
      throw new Error('The unit must be any of the following: ' + unitAbbreviations.join(', '))
    }
  }

  /**
   * Validates a measurement, wich must be an instance of the calling class.
   *
   * @param {object} measurement - The measurement to validate (e.g. length)
   * @param {object} callingClass - The calling class
   */
  static validateMeasurement (measurement, callingClass) {
    if (!(measurement instanceof callingClass)) {
      throw new TypeError(`The measurement must be of the type ${callingClass}`)
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
}
