/////////////////////////////////////////////////////////////////////////
// Array (เวลา Run Code ให้ Comment ออกแล้ว console.log ทีละอย่างเน้อ :D) //
/////////////////////////////////////////////////////////////////////////

const persons = [
  { name: 'John', age: 123 }, 
  { name: 'Marry', age: 33 },
  { name: 'T', age: 55 },
  { name: 'G', age: 99 }, 
  { name: 'Doe', age: 55555 } 
]

///////////////////////////////////////
// แกง 1 push/ pop / shift / unshift //
///////////////////////////////////////

// persons.push('fffff')
// persons.pop()
// persons.pop()
// persons.pop()
// persons.shift()
// persons.unshift('test')

persons.forEach(function(person) {
  console.log(person)
})

for (let person of persons) {
  console.log(person)
}

for (let person in persons) {
  console.log(persons[person])
}


////////////////////////////////////
// แกง 2 concat / slice / splice //
////////////////////////////////////

console.log(persons.concat(anotherPersons))
console.log(persons.slice(0, 2))
console.log(persons.splice(1, 3))
console.log(persons)


//////////////////////////////////////////////////////
// แกง 3 ****** map, filter, find, reduce, forEach //
//////////////////////////////////////////////////////

const results = persons.map(function (person) {
  return `${person.name}-NAME`
})

persons.forEach((person) => {
  console.log(`Person: ${person.name}, Age: ${person.age}`)
})

const results = persons.filter(function(person){
  return person.age > 50
})

const results = persons.find((person) => {
  return person.name === "John"
})

const totalPersonsAge = persons.reduce(function(acc, person) {
  return acc + person.age
}, 0)


////////////////////////////////////////
// Create map function from beginning //
////////////////////////////////////////

function map(array, callback) {
  let results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

const results = map(persons, function(person) {
  return `${person.name}-NAME`
})


//////////////////////////////////////
// แกง 4 sort, reverse, split/join //
////////////////////////////////////
const message = "Hello, codecamp 7"
console.log(message.split(" ").join("|"))

const numbers = [5, 4, 3, 2, 1]

const sortedNumbers = numbers.sort(function compareFunction(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1
})

const sortedPerson = persons.sort(function compareFunction(a, b) {
  if (a.age > b.age) return 1;
  if (a.age == b.age) return 0;
  if (a.age < b.age) return -1
})

