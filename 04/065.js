/**
 * @param {string[]} words
 * @return {number}
 */
 var minimumLengthEncoding = function(words) {
  let arr = new Array(26)
  let len = 0
  words.sort((a, b) => b.length - a.length)
  for (let word of words) {
      let cur = arr, count = 0
      for (let i = word.length-1; i >= 0; i--) {
          let code = word[i].charCodeAt() - 'a'.charCodeAt()
          count++
          if (!cur[code]) cur[code] = new Array(26)
          else if (i === 0) count = 0
          cur = cur[code]
      }
      len += count === 0 ? 0 : count + 1
  }
  return len
};