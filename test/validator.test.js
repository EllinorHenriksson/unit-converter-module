import { jest } from '@jest/globals'
import { Validator } from '../src/validator.js'
import { LengthUnits } from '../src/units/lengthUnits.js'

describe('Validator', () => {
  const validator = new Validator()

  const validateUnitsSpy = jest.spyOn(validator, 'validateUnits')
  const validateQuantitySpy = jest.spyOn(validator, 'validateQuantity')
  const validateUnitAbbreviationSpy = jest.spyOn(validator, 'validateUnitAbbreviation')
  const validateMeasurementTypeSpy = jest.spyOn(validator, 'validateMeasurementType')

  const LengthMock = jest.fn(() => {})
  let length

  beforeAll(() => {
    length = new LengthMock()
  })

  describe('.validateUnits()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateUnits).toBe('function')
    })

    test('validates without error', () => {
      const result = validator.validateUnits(LengthUnits)

      expect(result).toBeUndefined()

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)

      validateUnitsSpy.mockClear()
    })

    test('validates with error', () => {
      const argument = 'invalidArgument'

      expect(() => {
        validator.validateUnits(argument)
      }).toThrow(Error)

      expect(validateUnitsSpy).toHaveBeenCalledWith(argument)

      validateUnitsSpy.mockClear()
    })
  })

  describe('.validateQuantity()', () => {
    const validArgs = [1, 0.5, 1.5, 1.5e-5, 1.5e+5]
    const invalidNumberArgs = [0, -1, -1.5]
    const invalidArgsOther = ['string', {}, []]

    test('defines a function', () => {
      expect(typeof validator.validateQuantity).toBe('function')
    })

    test.each(validArgs)('validates without error for valid argument %d', (fixture) => {
      expect(validator.validateQuantity(fixture)).toBeUndefined()
      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
      validateQuantitySpy.mockClear()
    })

    test.each(invalidArgsOther)('validates with error for invalid argument %j', (fixture) => {
      expect(() => {
        validator.validateQuantity(fixture)
      }).toThrow(TypeError)

      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
      validateUnitsSpy.mockClear()
    })

    test.each(invalidNumberArgs)('validates with error for invalid argument %d', (fixture) => {
      expect(() => {
        validator.validateQuantity(fixture)
      }).toThrow(RangeError)

      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
      validateUnitsSpy.mockClear()
    })
  })

  describe('.validateUnitAbbreviation()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateUnitAbbreviation).toBe('function')
    })

    test('validates without error', () => {
      expect(validator.validateUnitAbbreviation('m', LengthUnits)).toBeUndefined()

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('m', LengthUnits)
      validateUnitAbbreviationSpy.mockClear()

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)
      expect(validateUnitsSpy).toHaveReturnedWith(undefined)
      validateUnitsSpy.mockClear()
    })

    test('validates with error for invalid second argument {}', () => {
      expect(() => {
        validator.validateUnitAbbreviation('m', {})
      }).toThrow(Error)

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('m', {})
      validateUnitAbbreviationSpy.mockClear()

      expect(validateUnitsSpy).toHaveBeenCalledWith({})
      expect(validateUnitsSpy).toThrow(Error)
      validateUnitsSpy.mockClear()
    })

    test('validates with error for invalid first argument "invalidArg"', () => {
      expect(() => {
        validator.validateUnitAbbreviation('invalidArg', LengthUnits)
      }).toThrow(Error)

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('invalidArg', LengthUnits)
      validateUnitAbbreviationSpy.mockClear()

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)
      expect(validateUnitsSpy).toHaveReturnedWith(undefined)
      validateUnitsSpy.mockClear()
    })
  })

  describe('.validateMeasurementType()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateMeasurementType).toBe('function')
    })

    test('validates without error', () => {
      expect(validator.validateMeasurementType(length, length.constructor)).toBeUndefined()

      expect(validateMeasurementTypeSpy).toHaveBeenCalledWith(length, length.constructor)
      validateMeasurementTypeSpy.mockClear()
    })

    test('validates with error', () => {
      expect(() => {
        validator.validateMeasurementType({}, length.constructor)
      }).toThrow(TypeError)

      expect(validateMeasurementTypeSpy).toHaveBeenCalledWith({}, length.constructor)
      validateMeasurementTypeSpy.mockClear()
    })
  })

  describe('.validateSingleMeasurements()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateSingleMeasurements).toBe('function')
    })
  })
})
