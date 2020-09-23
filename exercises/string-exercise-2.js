function checkRudeWords(message) {
  const RUDE_WORDS = ['xxx', 'viagra']
  for (let rudeWord of RUDE_WORDS) {
    if (message.includes(rudeWord)) {
      return true
    }
  }
  return false
}

console.log(checkRudeWords('This is viagra series'))