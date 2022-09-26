import { jest } from '@jest/globals'
import { Time } from '../src/measurements/time.js'
import { Validator } from '../src/validator.js'

jest.mock('../src/validator.js')

describe('Time', () => {
  const time = new Time(1, 'min')

  const validatorSpy = jest.spyOn(time, 'validator', 'get')
  const standardUnitSpy = jest.spyOn(time, 'standardUnit', 'get')
  const quantitySpy = jest.spyOn(time, 'quantity', 'get')
  const unitSpy = jest.spyOn(time, 'unit', 'get')
  const standardUnitQuantitySpy = jest.spyOn(time, 'standardUnitQuantity', 'get')
  const convertToSpy = jest.spyOn(time, 'convertTo')
  const convertToStandardSpy = jest.spyOn(time, 'convertToStandard')
  const toStringSpy = jest.spyOn(time, 'toString')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('.constructor()', () => {
    test('defines a function', () => {
      expect(typeof Time.constructor).toBe('function')
    })

    test('calls the constructor on Validator', () => {
      const result = new Time(1, 'min')
      expect(Validator).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Time)
    })
  })

  describe('.validator', () => {
    test('gets validator', () => {
      const result = time.validator
      expect(validatorSpy).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Validator)
      expect(Validator).toHaveBeenCalledTimes(1)
    })
  })

  describe('.standardUnit', () => {
    test('gets standard unit', () => {
      const result = time.standardUnit
      expect(standardUnitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('s')
    })
  })

  describe('.quantity', () => {
    test('gets quantity', () => {
      const result = time.quantity
      expect(quantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1)
    })
  })

  describe('.unit', () => {
    test('gets unit', () => {
      const result = time.unit
      expect(unitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('min')
    })
  })

  describe('.standardUnitQuantity', () => {
    test('gets standard unit quantity', () => {
      const result = time.standardUnitQuantity
      expect(standardUnitQuantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(60)
    })
  })

  describe('.convertTo', () => {
    test('converts measurement to given unit and returns new time object', () => {
      const result = time.convertTo('s')

      expect(convertToSpy).toHaveBeenCalledTimes(1)
      expect(convertToSpy).toHaveBeenCalledWith('s')

      expect(result).toBeInstanceOf(Time)
      expect(result.unit).toBe('s')
      expect(result.quantity).toBe(60)
    })
  })

  describe('.convertToStandard', () => {
    test('converts measurement to standard unit and returns new time object', () => {
      const result = time.convertToStandard()

      expect(convertToStandardSpy).toHaveBeenCalledTimes(1)

      expect(result).toBeInstanceOf(Time)
      expect(result.unit).toBe('s')
      expect(result.quantity).toBe(60)
    })
  })

  describe('.toString', () => {
    test('returns a string representation of the measurement', () => {
      const result = time.toString()

      expect(toStringSpy).toHaveBeenCalledTimes(1)

      expect(result).toBe('1min (60s)')
    })
  })

  describe('.mergeWithInto', () => {
    test('merges measurement with other measurement, returning a new measurement in the given unit', () => {
      const result = time.mergeWithInto(new Time(1, 'min'), 's')

      expect(result).toBeInstanceOf(Time)
      expect(result.quantity).toBe(120)
      expect(result.unit).toBe('s')
    })
  })

  describe('.isEqualTo', () => {
    const validArgs = [
      new Time(1, 'min'),
      new Time(60, 's')
    ]
    const invalidArgs = [
      new Time(0.1, 'min'),
      new Time(2, 'min')
    ]

    test.each(validArgs)('returns true for equal measurements', fixture => {
      expect(time.isEqualTo(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for unequal measurements', fixture => {
      expect(time.isEqualTo(fixture)).toBe(false)
    })
  })

  describe('.isLessThan', () => {
    const validArgs = [
      new Time(2, 'min')
    ]
    const invalidArgs = [
      new Time(0.1, 'min'),
      new Time(1, 'min'),
      new Time(60, 's')
    ]

    test.each(validArgs)('returns true for a measurement that is lesser than the measurements passed as an argument', fixture => {
      expect(time.isLessThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not lesser than the measurements passed as an argument', fixture => {
      expect(time.isLessThan(fixture)).toBe(false)
    })
  })

  describe('.isGreaterThan', () => {
    const validArgs = [
      new Time(0.1, 'min')
    ]
    const invalidArgs = [
      new Time(2, 'min'),
      new Time(1, 'min'),
      new Time(60, 's')
    ]

    test.each(validArgs)('returns true for a measurement that is greater than the measurements passed as an argument', fixture => {
      expect(time.isGreaterThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not greater than the measurements passed as an argument', fixture => {
      expect(time.isGreaterThan(fixture)).toBe(false)
    })
  })
})
