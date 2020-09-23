/////////////
// String //
////////////

const number = 123123123
const camp = `codecamp#${number}`
const welcomeText = 'Hello\'s CODECAMP#7'
console.log(welcomeText)
console.log("This is string".toUpperCase())

// String Accessing
console.log(welcomeText[0])
console.log(welcomeText.charAt(2))

for (let char of welcomeText) {
  console.log(char + '12')
}

let message = 'Welcome to codecamp 123123123'
console.log(message.indexOf('to'))
// มี lastIndexOf ด้วย


// String Methods
console.log(message.slice())
console.log(message.substr(8, 2))
console.log(message.trim())
console.log(message.includes('sadasdasdasd'))
console.log(message.startsWith('Welcome'))
console.log(message.endsWith('123123123'))
console.log("a".codePointAt())
console.log(String.fromCodePoint(97))
