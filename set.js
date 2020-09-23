/////////
// Set //
/////////

const set1 = new Set([1, 2, 3, 4, 5, 5, 5])

//////////////////
// Set Methods //
////////////////

console.log(set1.size)
console.log(set1.forEach(item => {
  console.log(item)
}))
console.log(set1.has(2123123))
console.log(set1.add(123123123))
set1.clear()
console.log(set1)

 // Convert Set to Array
const arraySet1 = Array.from(set1)
console.log(arraySet1)