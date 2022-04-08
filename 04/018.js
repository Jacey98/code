/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
    s = s.toLowerCase()
    for (let l = 0, r = s.length-1; l < r; l++, r--) {
        if (isNotChar(s[l])) {
            r++
            continue
        }
        if (isNotChar(s[r])) {
            l--
            continue
        }
        if (s[l] !== s[r]) return false
    }
    return true

    function isNotChar(s) {
        if (s.charCodeAt() < '0'.charCodeAt() || (s.charCodeAt() > '9'.charCodeAt() && s.charCodeAt() < 'a'.charCodeAt()) || s.charCodeAt() > 'z'.charCodeAt()) return true
        return false
    }
};