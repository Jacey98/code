/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    let map = new Map()
    let codeA = 'a'.charCodeAt()
    for (let i of words) {
        let bit = 0
        for (let c of i) {
            bit |= 1 << (c.charCodeAt() - codeA)
        }
        if (map.has(bit)) {
            map.set(bit, Math.max(map.get(bit), i.length))
        } else {
            map.set(bit, i.length)
        }
    }
    let res = 0
    for (let i of map.keys()) {
        for (let j of map.keys()) {
            if (!(i & j)) res = Math.max(res, map.get(i) * map.get(j))
        }
    }
    return res
};