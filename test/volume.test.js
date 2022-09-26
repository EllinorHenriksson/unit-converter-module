import { jest } from '@jest/globals'
import { Volume } from '../src/measurements/volume.js'
import { Validator } from '../src/validator.js'

jest.mock('../src/validator.js')

describe('Volume', () => {
  const volume = new Volume(1, 'L')

  const validatorSpy = jest.spyOn(volume, 'validator', 'get')
  const standardUnitSpy = jest.spyOn(volume, 'standardUnit', 'get')
  const quantitySpy = jest.spyOn(volume, 'quantity', 'get')
  const unitSpy = jest.spyOn(volume, 'unit', 'get')
  const standardUnitQuantitySpy = jest.spyOn(volume, 'standardUnitQuantity', 'get')
  const convertToSpy = jest.spyOn(volume, 'convertTo')
  const convertToStandardSpy = jest.spyOn(volume, 'convertToStandard')
  const toStringSpy = jest.spyOn(volume, 'toString')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('.constructor()', () => {
    test('defines a function', () => {
      expect(typeof Volume.constructor).toBe('function')
    })

    test('calls the constructor on Validator', () => {
      const result = new Volume(1, 'L')
      expect(Validator).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Volume)
    })
  })

  describe('.validator', () => {
    test('gets validator', () => {
      const result = volume.validator
      expect(validatorSpy).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Validator)
      expect(Validator).toHaveBeenCalledTimes(1)
    })
  })

  describe('.standardUnit', () => {
    test('gets standard unit', () => {
      const result = volume.standardUnit
      expect(standardUnitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('m^3')
    })
  })

  describe('.quantity', () => {
    test('gets quantity', () => {
      const result = volume.quantity
      expect(quantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1)
    })
  })

  describe('.unit', () => {
    test('gets unit', () => {
      const result = volume.unit
      expect(unitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('L')
    })
  })

  describe('.standardUnitQuantity', () => {
    test('gets standard unit quantity', () => {
      const result = volume.standardUnitQuantity
      expect(standardUnitQuantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(0.001)
    })
  })

  describe('.convertTo', () => {
    test('converts measurement to given unit and returns new volume object', () => {
      const result = volume.convertTo('m^3')

      expect(convertToSpy).toHaveBeenCalledTimes(1)
      expect(convertToSpy).toHaveBeenCalledWith('m^3')

      expect(result).toBeInstanceOf(Volume)
      expect(result.unit).toBe('m^3')
      expect(result.quantity).toBe(0.001)
    })
  })

  describe('.convertToStandard', () => {
    test('converts measurement to standard unit and returns new volume object', () => {
      const result = volume.convertToStandard()

      expect(convertToStandardSpy).toHaveBeenCalledTimes(1)

      expect(result).toBeInstanceOf(Volume)
      expect(result.unit).toBe('m^3')
      expect(result.quantity).toBe(0.001)
    })
  })

  describe('.toString', () => {
    test('returns a string representation of the measurement', () => {
      const result = volume.toString()

      expect(toStringSpy).toHaveBeenCalledTimes(1)

      expect(result).toBe('1L (0.001m^3)')
    })
  })

  describe('.mergeWithInto', () => {
    test('merges measurement with other measurement, returning a new measurement in the given unit', () => {
      const result = volume.mergeWithInto(new Volume(1, 'L'), 'm^3')

      expect(result).toBeInstanceOf(Volume)
      expect(result.quantity).toBe(0.002)
      expect(result.unit).toBe('m^3')
    })
  })

  describe('.isEqualTo', () => {
    const validArgs = [
      new Volume(1, 'L'),
      new Volume(0.001, 'm^3')
    ]
    const invalidArgs = [
      new Volume(0.1, 'L'),
      new Volume(2, 'L')
    ]

    test.each(validArgs)('returns true for equal measurements', fixture => {
      expect(volume.isEqualTo(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for unequal measurements', fixture => {
      expect(volume.isEqualTo(fixture)).toBe(false)
    })
  })

  describe('.isLessThan', () => {
    const validArgs = [
      new Volume(2, 'L')
    ]
    const invalidArgs = [
      new Volume(0.1, 'L'),
      new Volume(1, 'L'),
      new Volume(0.001, 'm^3')
    ]

    test.each(validArgs)('returns true for a measurement that is lesser than the measurements passed as an argument', fixture => {
      expect(volume.isLessThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not lesser than the measurements passed as an argument', fixture => {
      expect(volume.isLessThan(fixture)).toBe(false)
    })
  })

  describe('.isGreaterThan', () => {
    const validArgs = [
      new Volume(0.1, 'L')
    ]
    const invalidArgs = [
      new Volume(2, 'L'),
      new Volume(1, 'L'),
      new Volume(0.001, 'm^3')
    ]

    test.each(validArgs)('returns true for a measurement that is greater than the measurements passed as an argument', fixture => {
      expect(volume.isGreaterThan(fixture)).toBe(true)
    })

    test.each(invalidArgs)('returns false for a measurement that is not greater than the measurements passed as an argument', fixture => {
      expect(volume.isGreaterThan(fixture)).toBe(false)
    })
  })
})
