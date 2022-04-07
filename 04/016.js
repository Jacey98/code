/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0
    let res = 0, cur = 0
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            cur++
            map.set(s[i], 0)
        } else {
            res = Math.max(res, cur)
            while (map.has(s[i])) {
                map.delete(s[i-cur])
                cur--
            }
            cur++
            map.set(s[i], 0)
        }
    }
    res = Math.max(res, cur)
    return res
};