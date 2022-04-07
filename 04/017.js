/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let mapt = new Map()
    let maps = new Map()
    for (let i of t) {
        mapt.set(i, (mapt.get(i) || 0) + 1)
    }
    let start, len = Infinity
    for (let l = 0, r = 0, valid = 0; r < s.length; r++) {
        if (mapt.has(s[r])) {
            maps.set(s[r], (maps.get(s[r]) || 0) + 1)
            if (maps.get(s[r]) === mapt.get(s[r])) valid++
        }
        while (valid === mapt.size) {
            if (r - l < len) {
                start = l
                len = r - l
            }
            if (mapt.has(s[l])) {
                if (mapt.get(s[l]) === maps.get(s[l])) valid--
                maps.set(s[l], maps.get(s[l]) - 1)
            }
            l++
        }
    }
    return len === Infinity ? '' : s.slice(start, start + len + 1)
};