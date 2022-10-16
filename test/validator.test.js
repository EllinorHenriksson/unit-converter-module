import { jest } from '@jest/globals'
import { Validator } from '../src/validator.js'
import { LengthUnits } from '../src/units/lengthUnits.js'
import { Length } from '../src/measurements/length'
import { Time } from '../src/measurements/time.js'
import { Speed } from '../src/measurements/speed.js'

describe('Validator', () => {
  const validator = new Validator()

  const validateUnitsSpy = jest.spyOn(validator, 'validateUnits')
  const validateQuantitySpy = jest.spyOn(validator, 'validateQuantity')
  const validateUnitAbbreviationSpy = jest.spyOn(validator, 'validateUnitAbbreviation')
  const validateMeasurementTypeSpy = jest.spyOn(validator, 'validateMeasurementType')
  const validateSingleMeasurementsSpy = jest.spyOn(validator, 'validateSingleMeasurements')

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.validateUnits()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateUnits).toBe('function')
    })

    test('validates without error', () => {
      const result = validator.validateUnits(LengthUnits)

      expect(result).toBeUndefined()

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)
    })

    test('validates with error', () => {
      const argument = 'invalidArgument'

      expect(() => {
        validator.validateUnits(argument)
      }).toThrow(Error)

      expect(validateUnitsSpy).toHaveBeenCalledWith(argument)
    })
  })

  describe('.validateQuantity()', () => {
    const validArgs = [0, 1, 0.5, 1.5, 1.5e-5, 1.5e+5]
    const invalidNumberArgs = [-1, -1.5]
    const invalidArgsOther = ['string', {}, []]

    test('defines a function', () => {
      expect(typeof validator.validateQuantity).toBe('function')
    })

    test.each(validArgs)('validates without error for valid argument %d', (fixture) => {
      expect(validator.validateQuantity(fixture)).toBeUndefined()
      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
    })

    test.each(invalidArgsOther)('validates with error for invalid argument %j', (fixture) => {
      expect(() => {
        validator.validateQuantity(fixture)
      }).toThrow(TypeError)

      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
    })

    test.each(invalidNumberArgs)('validates with error for invalid argument %d', (fixture) => {
      expect(() => {
        validator.validateQuantity(fixture)
      }).toThrow(RangeError)

      expect(validateQuantitySpy).toHaveBeenCalledWith(fixture)
    })
  })

  describe('.validateUnitAbbreviation()', () => {
    test('defines a function', () => {
      expect(typeof validator.validateUnitAbbreviation).toBe('function')
    })

    test('validates without error', () => {
      expect(validator.validateUnitAbbreviation('m', LengthUnits)).toBeUndefined()

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('m', LengthUnits)

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)
      expect(validateUnitsSpy).toHaveReturnedWith(undefined)
    })

    test('validates with error for invalid second argument {}', () => {
      expect(() => {
        validator.validateUnitAbbreviation('m', {})
      }).toThrow(Error)

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('m', {})

      expect(validateUnitsSpy).toHaveBeenCalledWith({})
      expect(validateUnitsSpy).toThrow(Error)
    })

    test('validates with error for invalid first argument "invalidArg"', () => {
      expect(() => {
        validator.validateUnitAbbreviation('invalidArg', LengthUnits)
      }).toThrow(Error)

      expect(validateUnitAbbreviationSpy).toHaveBeenCalledWith('invalidArg', LengthUnits)

      expect(validateUnitsSpy).toHaveBeenCalledWith(LengthUnits)
      expect(validateUnitsSpy).toHaveReturnedWith(undefined)
    })
  })

  describe('.validateMeasurementType()', () => {
    const length = new Length(1, 'm')

    test('defines a function', () => {
      expect(typeof validator.validateMeasurementType).toBe('function')
    })

    test('validates without error', () => {
      expect(validator.validateMeasurementType(length, length.constructor)).toBeUndefined()

      expect(validateMeasurementTypeSpy).toHaveBeenCalledWith(length, length.constructor)
    })

    test('validates with error', () => {
      expect(() => {
        validator.validateMeasurementType({}, length.constructor)
      }).toThrow(TypeError)

      expect(validateMeasurementTypeSpy).toHaveBeenCalledWith({}, length.constructor)
    })
  })

  describe('.validateSingleMeasurements()', () => {
    const length1 = new Length(1, 'm')
    const length2 = new Length(2, 'm')
    const time = new Time(1, 's')

    const invalidArgs = [
      1, -1, 0, 'string', {}
    ]

    const invalidArrayArgs = [
      [[]],
      [[1, 2, 3]],
      [['a', 'b', 'c']],
      [[[], [], []]],
      [[{}, {}, {}]],
      [[new Speed(1, 'km/h')]]
    ]

    test('defines a function', () => {
      expect(typeof validator.validateSingleMeasurements).toBe('function')
    })

    test('validates without error', () => {
      expect(validator.validateSingleMeasurements([length1, length2])).toBeUndefined()

      expect(validateSingleMeasurementsSpy).toHaveBeenCalledWith([length1, length2])
    })

    test.each(invalidArgs)('validates with error for arguments other than array: %j', (fixture) => {
      expect(() => {
        validator.validateSingleMeasurements(fixture)
      }).toThrow(TypeError)

      expect(validateSingleMeasurementsSpy).toHaveBeenCalledWith(fixture)
    })

    test.each(invalidArrayArgs)('validates with error for arrays with invalid elements: %j', (fixture) => {
      expect(() => {
        validator.validateSingleMeasurements(fixture)
      }).toThrow(TypeError)

      expect(validateSingleMeasurementsSpy).toHaveBeenCalledWith(fixture)
    })

    test('validates with error for array with different subtypes', () => {
      expect(() => {
        validator.validateSingleMeasurements([length1, time])
      }).toThrow(TypeError)

      expect(validateSingleMeasurementsSpy).toHaveBeenCalledWith([length1, time])
    })
  })
})
