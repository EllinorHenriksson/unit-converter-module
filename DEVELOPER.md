# Converter

## Project vision
Converter is a module that other developers will be able to download and incorporate into their own projects. It will assist in creating measurements of different types and convering them to measurements of different units. It will let the user convert single measurements as well as merging several measurements and converting them as a whole. Apart from converting, the module will also offer the user possibility to compare measurements. A measurement can be compared with another measurement to see if they are equal, less than eachother or greater than eachother.

## Requirements
### Supported measurement types
The module should support:
- length
- time
- weight
- volume
- speed

### Read measurement types
The user should be able to read what measurement types are available

### Read units for specific measurement types
The user should be able to read what units are avalible for a specific measurement type.

### Create measurement
- The user should be able to create measurements of the supported types.
- The mesurement must have a quantity and a unit.

### Read measurement data
The measurement data (quantity and unit) should be readable by the user.

### Convert single measurement
- A measurement must be convertible to any of the available units for the measurement type.
- The conversion should result in a creation of a new measurement.

### Convert several measurements
It should be possible to merge several measurements of the same type into a single measurement of a specific unit. In that way several measurements can be converted as a whole.

### Compare two measurements with each other
The user should be able to compare a measurement to another measurement of the same type regarding their size, despite being of different units. It should be possible to check if they are equal, less than each other or greater than each other. For example:
- 1m equals 10dm
- 1m is greater than 1dm
- 1m is less than 20dm

## Tests
The module is tested with automatic unit testing in Jest. To run the tests, enter `npm run test` in the command prompt.

## Code
As for now, the code is working as it should and no bugs have been found that have not been fixed. The module supports the measurement types length, time, weight, voulme and speed, but this could be extended in future versions to include more types, e.g. temperature and area.
