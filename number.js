/////////////
// Number //
/////////////

// Number Representation
const salary = 1.23e6 // 1 x 10^-6
const hex = 0xff // 255
const binary = 0b11111111 //255
const octal = 0o377 //255


// Math แก๊งค์
console.log(Math.floor(1.234))
console.log(Math.ceil(1.234))
console.log(Math.round(1.5))
console.log(Math.trunc(323.234324234))
console.log(Math.pow(2, 1))
console.log(Math.random())
console.log(Math.min(1, 2, 3, 4))
console.log(Math.max(4,3,2123,2))

// Imprecise calculations
let results = 0.1 + 0.2
console.log(results.toFixed(4))

// isNaN and isFinite
console.log(isNaN("1231231"))
console.log(isFinite("123123"))

// parseInt & parseFloat
console.log(parseInt('123px'))
console.log(parseFloat('1231.3'))
