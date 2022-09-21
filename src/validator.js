import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'
import { SpeedUnits } from './units/speedUnits.js'

import { Measurement } from './measurements/measurement.js'
import { SingleMeasurement } from './measurements/singleMeasurement.js'

/**
 * @typedef Unit
 * @type {object}
 * @property {string} abbr - Abbreviation.
 * @property {number} ratio .
 */

/**
 * @typedef Units
 * @type {object}
 * @property {Unit} unitName - (Multiple properties)
 */

/**
 * Represents a validator.
 */
export class Validator {
  /**
   * @type {Units[]}
   */
  #units

  /**
   * Instantiates a Validator object.
   */
  constructor () {
    this.#units = [LengthUnits, TimeUnits, SpeedUnits]
  }

  /**
   * Validates units, wich must be a reference to one of the units objects (e.g. LengthUnits).
   *
   * @param {Units} units .
   */
  validateUnits (units) {
    if (!this.#units.includes(units)) {
      throw new Error('Units must be a reference to one of the units objects.')
    }
  }

  /**
   * Validates quantity, wich must be a number greater than 0.
   *
   * @param {number} quantity .
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
   * Validates a unit abbreviation, wich must be equal to the abbreviation of one of the units in the units object (e.g. LengthUnits).
   *
   * @param {string} unitAbbreviation .
   * @param {Units} units .
   */
  validateUnitAbbreviation (unitAbbreviation, units) {
    const unitAbbreviations = Object.values(units).map(x => x.abbr)

    if (!unitAbbreviations.includes(unitAbbreviation)) {
      throw new Error('The unit must be any of the following: ' + unitAbbreviations.join(', '))
    }
  }

  /**
   * Validates a measurement, wich must be an instance of the measurement subtype.
   *
   * @param {Measurement} measurement .
   * @param {Measurement} subtype .
   */
  validateMeasurementType (measurement, subtype) {
    if (!(measurement instanceof subtype)) {
      throw new TypeError(`The measurement must be of the type ${subtype.name}`)
    }
  }

  /**
   * Validates single measurements, wich must be an array of single measurements of the same subtype.
   *
   * @param {SingleMeasurement[]} singleMeasurements .
   */
  validateSingleMeasurements (singleMeasurements) {
    const errorMessage = 'Measurements must be an array of single measurements of the same subtype.'
    if (!Array.isArray(singleMeasurements)) {
      throw new TypeError(errorMessage)
    }

    singleMeasurements.forEach(x => {
      if (!(x instanceof SingleMeasurement)) {
        throw new TypeError(errorMessage)
      }
    })

    for (let i = 1; i < singleMeasurements.length; i++) {
      if (singleMeasurements[i].constructor !== singleMeasurements[i - 1].constructor) {
        throw new TypeError(errorMessage)
      }
    }
  }
}
