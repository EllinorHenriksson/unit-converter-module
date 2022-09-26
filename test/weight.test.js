import { jest } from '@jest/globals'
import { Weight } from '../src/measurements/weight.js'
import { Validator } from '../src/validator.js'

jest.mock('../src/validator.js')

describe('Weight', () => {
  const weight = new Weight(1000, 'g')

  const validatorSpy = jest.spyOn(weight, 'validator', 'get')
  const standardUnitSpy = jest.spyOn(weight, 'standardUnit', 'get')
  const quantitySpy = jest.spyOn(weight, 'quantity', 'get')
  const unitSpy = jest.spyOn(weight, 'unit', 'get')
  const standardUnitQuantitySpy = jest.spyOn(weight, 'standardUnitQuantity', 'get')
  const convertToSpy = jest.spyOn(weight, 'convertTo')
  const convertToStandardSpy = jest.spyOn(weight, 'convertToStandard')
  const toStringSpy = jest.spyOn(weight, 'toString')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('.constructor()', () => {
    test('defines a function', () => {
      expect(typeof Weight.constructor).toBe('function')
    })

    test('calls the constructor on Validator', () => {
      const result = new Weight(1000, 'g')
      expect(Validator).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Weight)
    })
  })

  describe('.validator', () => {
    test('gets validator', () => {
      const result = weight.validator
      expect(validatorSpy).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Validator)
      expect(Validator).toHaveBeenCalledTimes(1)
    })
  })

  describe('.standardUnit', () => {
    test('gets standard unit', () => {
      const result = weight.standardUnit
      expect(standardUnitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('kg')
    })
  })

  describe('.quantity', () => {
    test('gets quantity', () => {
      const result = weight.quantity
      expect(quantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1000)
    })
  })

  describe('.unit', () => {
    test('gets unit', () => {
      const result = weight.unit
      expect(unitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('g')
    })
  })

  describe('.standardUnitQuantity', () => {
    test('gets standard unit quantity', () => {
      const result = weight.standardUnitQuantity
      expect(standardUnitQuantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1)
    })
  })

  describe('.convertTo', () => {
    test('converts measurement to given unit and returns new weight object', () => {
      const result = weight.convertTo('kg')

      expect(convertToSpy).toHaveBeenCalledTimes(1)
      expect(convertToSpy).toHaveBeenCalledWith('kg')

      expect(result).toBeInstanceOf(Weight)
      expect(result.unit).toBe('kg')
      expect(result.quantity).toBe(1)
    })
  })

  describe('.convertToStandard', () => {
    test('converts measurement to standard unit and returns new weight object', () => {
      const result = weight.convertToStandard()

      expect(convertToStandardSpy).toHaveBeenCalledTimes(1)

      expect(result).toBeInstanceOf(Weight)
      expect(result.unit).toBe('kg')
      expect(result.quantity).toBe(1)
    })
  })

  describe('.toString', () => {
    test('returns a string representation of the measurement', () => {
      const result = weight.toString()

      expect(toStringSpy).toHaveBeenCalledTimes(1)

      expect(result).toBe('1000g (1kg)')
    })
  })

  describe('.mergeWithInto', () => {
    test('merges measurement with other measurement, returning a new measurement in the given unit', () => {
      const result = weight.mergeWithInto(new Weight(1000, 'g'), 'kg')

      expect(result).toBeInstanceOf(Weight)
      expect(result.quantity).toBe(2)
      expect(result.unit).toBe('kg')
    })
  })

  describe('.isEqualTo', () => {
    const validArgs = [
      new Weight(1000, 'g'),
      new Weight(1, 'kg')
    ]
    const invalidArgs = [
      new Weight(100, 'g'),
      new Weight(2000, 'g')
    ]

    test.each(validArgs)('returns true for equal measurements', fixture => {
      expect(weight.isEqualTo(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for unequal measurements', fixture => {
      expect(weight.isEqualTo(fixture)).toBe(false)
    })
  })

  describe('.isLessThan', () => {
    const validArgs = [
      new Weight(2000, 'g')
    ]
    const invalidArgs = [
      new Weight(100, 'g'),
      new Weight(1000, 'g'),
      new Weight(1, 'kg')
    ]

    test.each(validArgs)('returns true for a measurement that is lesser than the measurements passed as an argument', fixture => {
      expect(weight.isLessThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not lesser than the measurements passed as an argument', fixture => {
      expect(weight.isLessThan(fixture)).toBe(false)
    })
  })

  describe('.isGreaterThan', () => {
    const validArgs = [
      new Weight(100, 'g')
    ]
    const invalidArgs = [
      new Weight(2000, 'g'),
      new Weight(1000, 'g'),
      new Weight(1, 'kg')
    ]

    test.each(validArgs)('returns true for a measurement that is greater than the measurements passed as an argument', fixture => {
      expect(weight.isGreaterThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not greater than the measurements passed as an argument', fixture => {
      expect(weight.isGreaterThan(fixture)).toBe(false)
    })
  })
})
