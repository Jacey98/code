/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) break 
        l++
        r--
    }
    if (l >= r - 1) return true
    let l2 = l, r2 = r-1
    l = l+1
    while (l < r) {
        if (s[l] !== s[r]) break 
        l++
        r--
    }
    if (l >= r) return true
    while (l2 < r2) {
        if (s[l2] !== s[r2]) return false 
        l2++
        r2--
    }
    return true
};