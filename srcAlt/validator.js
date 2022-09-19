import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'
import { SpeedUnits } from './units/speedUnits.js'

import { Measurement } from './measurements/measurement.js'

/**
 * Represents a validator.
 */
export class Validator {
  /**
   * A collection of the measurement units.
   *
   * @type {object[]}
   */
  #units

  /**
   * Instantiates a Validator object.
   */
  constructor () {
    this.#units = [LengthUnits, TimeUnits, SpeedUnits]
  }

  /**
   * Validates the units, wich must be a reference to one of the units objects.
   *
   * @param {object} units - A refrence to a units object (e.g. LengthUnits)
   */
  validateUnits (units) {
    if (!this.#units.includes(units)) {
      throw new Error('Units must be a reference to one of the units objects.')
    }
  }

  /**
   * Validates quantity, wich must be a number greater than 0.
   *
   * @param {number} quantity - The quantity.
   */
  validateQuantity (quantity) {
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
  validateUnit (unit, units) {
    const unitAbbreviations = Object.values(units).map(x => x.abbr)

    if (!unitAbbreviations.includes(unit)) {
      throw new Error('The unit must be any of the following: ' + unitAbbreviations.join(', '))
    }
  }

  /**
   * Validates a measurement, wich must be an instance of a specific class.
   *
   * @param {object} measurement - The measurement to validate (e.g. length)
   * @param {object} specificClass - The specific class
   */
  validateMeasurement (measurement, specificClass) {
    if (!(measurement instanceof specificClass)) {
      throw new TypeError(`The measurement must be of the type ${specificClass.name}`)
    }
  }

  /**
   * Validates measurements, wich must be an array of instances of the calling class.
   *
   * @param {Measurement[]} measurements -The measurements
   * @param {Measurement} callingClass - The calling class
   */
  validateMeasurements (measurements, callingClass) {
    if (!Array.isArray(measurements)) {
      throw new TypeError('Measurements must be an array of measurements.')
    }

    measurements.forEach(x => {
      Validator.validateMeasurement(x, callingClass)
    })
  }
}
