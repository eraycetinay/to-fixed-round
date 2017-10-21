# To Fixed Round
[![npm version](https://badge.fury.io/js/to-fixed-round.svg)](https://badge.fury.io/js/to-fixed-round) 
[![Bower](https://img.shields.io/bower/v/to-fixed-round.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

Converts a number into a string and returns the number by keeping a specified number of decimal after rounding to the nearest.

## Installation
```
npm install to-fixed-round or bower install to-fixed-round
```
## Usage
```
require('to-fixed-round');
var example=1.234;
var fixedString=example.toFixedRound(2);
var fixedNumber=example.toFixedRound(2,true);
```
**Note:** If you set true to second parameter, it will return a fixed number not string. Also it will round last digit to 1 if it is a 0 for to return a number.
## Examples
```
require('to-fixed-round');
var x = [123, 123.1, 123.12, 123.123, 123.1234, 123.12345, 123.012345, 123.0012345, 123.00012345];
for (var i = 0; i < x.length; i++) {
    console.log("Number = "+x[i]);
    console.log("Number.toFixedRound(3) = "+Number(x[i]).toFixedRound(3));
    console.log("Number.toFixedRound(3,true) = "+Number(x[i]).toFixedRound(3,true));
}
```
**Output**
```
Number = 123
Number.toFixedRound(3) = 123.000
Number.toFixedRound(3,true) = 123.001

Number = 123.1
Number.toFixedRound(3) = 123.100
Number.toFixedRound(3,true) = 123.101

Number = 123.12
Number.toFixedRound(3) = 123.120
Number.toFixedRound(3,true) = 123.121

Number = 123.123
Number.toFixedRound(3) = 123.123
Number.toFixedRound(3,true) = 123.123

Number = 123.1234
Number.toFixedRound(3) = 123.124
Number.toFixedRound(3,true) = 123.124

Number = 123.12345
Number.toFixedRound(3) = 123.124
Number.toFixedRound(3,true) = 123.124

Number = 123.012345
Number.toFixedRound(3) = 123.013
Number.toFixedRound(3,true) = 123.013

Number = 123.0012345
Number.toFixedRound(3) = 123.002
Number.toFixedRound(3,true) = 123.002

Number = 123.00012345
Number.toFixedRound(3) = 123.001
Number.toFixedRound(3,true) = 123.001
```
## License
[MIT](LICENSE) license.
