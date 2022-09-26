import { jest } from '@jest/globals'
import { Converter } from '../src/converter.js'
import { Validator } from '../src/validator.js'

// Measurements
import { Length } from '../src/measurements/length.js'
import { Time } from '../src/measurements/time.js'
import { Speed } from '../src/measurements/speed.js'
import { Weight } from '../src/measurements/weight.js'
import { Volume } from '../src/measurements/volume.js'

// Units 
import { LengthUnits } from '../src/units/lengthUnits.js'
import { TimeUnits } from '../src/units/timeUnits.js'
import { SpeedUnits } from '../src/units/speedUnits.js'
import { WeightUnits } from '../src/units/weightUnits.js'
import { VolumeUnits } from '../src/units/volumeUnits.js'

jest.mock('../src/validator.js')
jest.mock('../src/measurements/length.js')
jest.mock('../src/measurements/time.js')
jest.mock('../src/measurements/weight.js')
jest.mock('../src/measurements/volume.js')
jest.mock('../src/measurements/speed.js')

describe('Converter', () => {
  const converter = new Converter()

  describe('.measurementTypes', () => {
    test('gets the measurement types', () => {
      expect(converter.measurementTypes).toEqual(['length', 'time', 'weight', 'volume', 'speed'])
    })
  })

  describe('.lengthUnits', () => {
    test('gets the length units', () => {
      expect(converter.lengthUnits).toEqual(Object.values(LengthUnits).map(x => x.abbr))
    })
  })

  describe('.timeUnits', () => {
    test('gets the time units', () => {
      expect(converter.timeUnits).toEqual(Object.values(TimeUnits).map(x => x.abbr))
    })
  })

  describe('.weightUnits', () => {
    test('gets the weight units', () => {
      expect(converter.weightUnits).toEqual(Object.values(WeightUnits).map(x => x.abbr))
    })
  })

  describe('.volumeUnits', () => {
    test('gets the volume units', () => {
      expect(converter.volumeUnits).toEqual(Object.values(VolumeUnits).map(x => x.abbr))
    })
  })

  describe('.speedUnits', () => {
    test('gets the speed units', () => {
      expect(converter.speedUnits).toEqual(Object.values(SpeedUnits).map(x => x.abbr))
    })
  })

  describe('.length', () => {
    test('instantiates and returns a length object', () => {
      expect(converter.length()).toBeInstanceOf(Length)
    })
  })

  describe('.time', () => {
    test('instantiates and returns a time object', () => {
      expect(converter.time()).toBeInstanceOf(Time)
    })
  })

  describe('.weight', () => {
    test('instantiates and returns a weight object', () => {
      expect(converter.weight()).toBeInstanceOf(Weight)
    })
  })

  describe('.volume', () => {
    test('instantiates and returns a volume object', () => {
      expect(converter.volume()).toBeInstanceOf(Volume)
    })
  })

  describe('.speed', () => {
    test('instantiates and returns a speed object', () => {
      expect(converter.speed()).toBeInstanceOf(Speed)
    })
  })

  describe('.speedFromLengthAndTime', () => {
    test('instantiates a speed object from a length and a time object and returns it', () => {
      expect(converter.speedFromLengthAndTime(new Length(), new Time())).toBeInstanceOf(Speed)
    })
  })
})
