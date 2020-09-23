function upperCaseFirstChar(str) {
  let inputStr = str
  let resultStr = ''

  for (let i=0; i < inputStr.length; i++) {
    if (i == 0) {
      resultStr += inputStr[0].toUpperCase()
    } else {
      resultStr += inputStr[i]
    }
  }

  return resultStr
}

console.log(upperCaseFirstChar("fasfaf is codecamp#7"))

