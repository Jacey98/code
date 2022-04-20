/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s === t || s.length !== t.length) return false
    let map = new Map()
    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    for (let i of t) {
        map.set(i, (map.get(i) || 0) - 1)
        if (map.get(i) < 0) return false
    }
    return true
};