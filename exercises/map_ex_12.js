const array1 = [
  { name: 'apple', birth:"2000-01-01"},
  { name: 'banana', birth:"1990-10-10"},
  { name: 'watermelon', birth:"1985-12-30"}
]

const array2 = array1.map((item) => {
  return `<tr><td>${item.name}</td> <td>${convertDateFormat(item.birth)}</td></tr>`
})

//////////////////
// Bonus point //
/////////////////


const MONTH_MAPPING = {
  "01": "jan",
  "02": "feb",
  // ..
} // MONTH_MAPPING["01"] == 'jan'

// TODO: Complete convertDateFormat function
function convertDateFormat(date) {
  // format logic
  // split ? 
  return date
}

console.log(array2)