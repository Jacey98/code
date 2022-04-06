/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//  var checkInclusion = function(s1, s2) {
//     let map = new Map()
//     for (let i of s1) {
//         map.set(i, map.has(i) ? map.get(i) + 1 : 1)
//     }
//     for (let j = 0, count = s1.length, mapNew = new Map(map); j <= s2.length - s1.length; j++, count = s1.length, mapNew = new Map(map)) {
//         let i = j
//         while(i < s2.length) {
//             if (mapNew.has(s2[i])) {
//                 mapNew.get(s2[i]) === 1 ? mapNew.delete(s2[i]) : mapNew.set(s2[i], mapNew.get(s2[i]) - 1)
//                 count--
//                 if (count === 0) return true
//                 i++
//             } else i = s2.length
//         }
//     }
//     return false
// };

var checkInclusion = function(s1, s2) {
    const n = s1.length, m = s2.length
    if (n > m) return false
    let cnt1 = new Array(26).fill(0)
    let cnt2 = new Array(26).fill(0)
    for (let i = 0; i < n; i++) {
        cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
        cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if (cnt1.toString() === cnt2.toString()) return true
    for (let i = n; i < m; i++) {
        cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
        cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]--
        if (cnt1.toString() === cnt2.toString()) return true
    }
    return false
};