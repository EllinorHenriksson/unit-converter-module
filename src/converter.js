import { Validator } from './validator.js'
import { Measurement } from './measurements/measurement.js'
import { LengthUnits } from './units/lengthUnits.js'
import { TimeUnits } from './units/timeUnits.js'

export class Converter {
  /**
   * 
   * 
   * @type {number}
   */
  #numberOfDecimals

  constructor (numberOfDecimals) {
    this.numberOfDecimals = numberOfDecimals
  }

  set numberOfDecimals (numberOfDecimals) {
    Validator.validateNumberOfDecimals(numberOfDecimals)
    this.#numberOfDecimals = numberOfDecimals
  }

  /**
   * 
   * @param {Measurement} measurement 
   * @param {string} unit 
   */
  convertOne (measurement, unit) {

  }

  /**
   * 
   * @param {Measurement[]} measurements 
   * @param {string} unit 
   */
  convertMany (measurements, unit) {

  }

  /**
   * 
   * @returns {string[]}
   */
  getLengthUnits () {
    return this.#extractUnitAbbr(LengthUnits)
  }

    /**
   * 
   * @returns {string[]}
   */
    getTimeUnits () {
      return this.#extractUnitAbbr(TimeUnits)
    }

  /**
   * 
   * @param {object} units 
   * @returns {string[]}
   */
  #extractUnitAbbr (units) {
    return Object.values(units).map(x => x.abbr)
  }
}
