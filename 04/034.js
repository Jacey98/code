/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    if (words.lenght === 1) return true
    for (let i = 0; i < words.length-1; i++) {
        if(unOrder(words[i], words[i+1])) return false
    }
    return true

    function unOrder (a, b) {
        for (let i = 0; i < a.length && i < b.length; i++) {
            let oa = order.indexOf(a[i]), ob = order.indexOf(b[i])
            if (oa < ob) return false
            else if (oa > ob) return true
        }
        if (a.length <= b.length) return false
        return true
    }
};