import { Converter } from '../src/index.js'

const converter = new Converter(2)

const result = converter.length(15, 'miles').to('km')

console.log(result)
