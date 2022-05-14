/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
    let arr = sentence.split(' ')
    let set = new Set(dictionary)
    for (let i = 0; i < arr.length; i++) {
        let cur = ''
        for (let j of arr[i]) {
            cur += j
            if (set.has(cur)) {
                arr[i] = cur
                break
            }
        }
    }
    return arr.join(' ')
};