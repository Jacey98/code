/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let map = new Map()
    for (let i of s1) {
        map.set(i, map.has(i) ? map.get(i) + 1 : 1)
    }
    for (let j = 0, count = s1.length, mapNew = new Map(map); j <= s2.length - s1.length; j++, count = s1.length, mapNew = new Map(map)) {
        let i = j
        while(i < s2.length) {
            if (mapNew.has(s2[i])) {
                mapNew.get(s2[i]) === 1 ? mapNew.delete(s2[i]) : mapNew.set(s2[i], mapNew.get(s2[i]) - 1)
                count--
                if (count === 0) return true
                i++
            } else i = s2.length
        }
    }
    return false
};