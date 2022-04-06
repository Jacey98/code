/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const n = p.length, m = s.length
    if (m < n) return []
    let cnt1 = new Array(26).fill(0)
    let cnt2 = new Array(26).fill(0)
    let res = []
    for (let i = 0; i < n; i++) {
        cnt1[p[i].charCodeAt() - 'a'.charCodeAt()]++
        cnt2[s[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    if (cnt1.toString() === cnt2.toString()) res.push(0)
    for (let i = n; i < m; i++) {
        cnt2[s[i].charCodeAt() - 'a'.charCodeAt()]++
        cnt2[s[i - n].charCodeAt() - 'a'.charCodeAt()]--
        if (cnt1.toString() === cnt2.toString()) res.push(i-n+1)
    }
    return res
};