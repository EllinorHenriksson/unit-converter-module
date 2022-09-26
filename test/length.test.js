import { jest } from '@jest/globals'
import { Length } from '../src/measurements/length'
import { Validator } from '../src/validator.js'

jest.mock('../src/validator.js')

describe('Length', () => {
  const length = new Length(100, 'cm')

  const validatorSpy = jest.spyOn(length, 'validator', 'get')
  const standardUnitSpy = jest.spyOn(length, 'standardUnit', 'get')
  const quantitySpy = jest.spyOn(length, 'quantity', 'get')
  const unitSpy = jest.spyOn(length, 'unit', 'get')
  const standardUnitQuantitySpy = jest.spyOn(length, 'standardUnitQuantity', 'get')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('.constructor()', () => {
    test('defines a function', () => {
      expect(typeof Length.constructor).toBe('function')
    })

    test('calls the constructor on Validator', () => {
      const result = new Length(1, 'm')
      expect(Validator).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Length)
    })
  })

  describe('.validator', () => {
    test('gets validator', () => {
      const result = length.validator
      expect(validatorSpy).toHaveBeenCalledTimes(1)
      expect(result).toBeInstanceOf(Validator)
      expect(Validator).toHaveBeenCalledTimes(1)
    })
  })

  describe('.standardUnit', () => {
    test('gets standard unit', () => {
      const result = length.standardUnit
      expect(standardUnitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('m')
    })
  })

  describe('.quantity', () => {
    test('gets quantity', () => {
      const result = length.quantity
      expect(quantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(100)
    })
  })

  describe('.unit', () => {
    test('gets unit', () => {
      const result = length.unit
      expect(unitSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe('cm')
    })
  })

  describe('.standardUnitQuantity', () => {
    test('gets standard unit quantity', () => {
      const result = length.standardUnitQuantity
      expect(standardUnitQuantitySpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(1)
    })
  })
})
