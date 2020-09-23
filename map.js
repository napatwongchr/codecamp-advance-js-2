//////////
// Map //
////////

const map1 = new Map([
  [1, 232],
  [2, 'Message'],
  [3, { name: 'John'}]
])

console.log(map1)


map1.forEach((value, key) => {
  console.log(value, key)
})
console.log(map1.size)
console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())

// Object.keys / vakues / entries
const person = {
  name: 'John',
  age: 123,
  hobby: 'football'
}


console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))