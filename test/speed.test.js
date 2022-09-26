import { jest } from '@jest/globals'
import { Speed } from '../src/measurements/speed.js'
import { Validator } from '../src/validator.js'

jest.mock('../src/validator.js')

describe('Speed', () => {
  const speed = new Speed(1, 'km/s')

  const validatorSpy = jest.spyOn(speed, 'validator', 'get')
  const standardUnitSpy = jest.spyOn(speed, 'standardUnit', 'get')
  const quantitySpy = jest.spyOn(speed, 'quantity', 'get')
  const unitSpy = jest.spyOn(speed, 'unit', 'get')
  const standardUnitQuantitySpy = jest.spyOn(speed, 'standardUnitQuantity', 'get')
  const convertToSpy = jest.spyOn(speed, 'convertTo')
  const convertToStandardSpy = jest.spyOn(speed, 'convertToStandard')
  const toStringSpy = jest.spyOn(speed, 'toString')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('.constructor()', () => {
    test('defines a function', () => {
      expect(typeof Speed.constructor).toBe('function')
    })

    test('calls the constructor on Validator', () => {
      const result = new Speed(1, 'km/s')
      expect(Validator).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Speed)
    })
  })

  describe('.validator', () => {
    test('gets validator', () => {
      const result = speed.validator
      expect(validatorSpy).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Validator)
      expect(Validator).toHaveBeenCalledTimes(1)
    })
  })

  describe('.standardUnit', () => {
    test('gets standard unit', () => {
      const result = speed.standardUnit
      expect(standardUnitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('m/s')
    })
  })

  describe('.quantity', () => {
    test('gets quantity', () => {
      const result = speed.quantity
      expect(quantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1)
    })
  })

  describe('.unit', () => {
    test('gets unit', () => {
      const result = speed.unit
      expect(unitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('km/s')
    })
  })

  describe('.standardUnitQuantity', () => {
    test('gets standard unit quantity', () => {
      const result = speed.standardUnitQuantity
      expect(standardUnitQuantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1000)
    })
  })

  describe('.convertTo', () => {
    test('converts measurement to given unit and returns new speed object', () => {
      const result = speed.convertTo('m/s')

      expect(convertToSpy).toHaveBeenCalledTimes(1)
      expect(convertToSpy).toHaveBeenCalledWith('m/s')

      expect(result).toBeInstanceOf(Speed)
      expect(result.unit).toBe('m/s')
      expect(result.quantity).toBe(1000)
    })
  })

  describe('.convertToStandard', () => {
    test('converts measurement to standard unit and returns new speed object', () => {
      const result = speed.convertToStandard()

      expect(convertToStandardSpy).toHaveBeenCalledTimes(1)

      expect(result).toBeInstanceOf(Speed)
      expect(result.unit).toBe('m/s')
      expect(result.quantity).toBe(1000)
    })
  })

  describe('.toString', () => {
    test('returns a string representation of the measurement', () => {
      const result = speed.toString()

      expect(toStringSpy).toHaveBeenCalledTimes(1)

      expect(result).toBe('1km/s (1000m/s)')
    })
  })
})
