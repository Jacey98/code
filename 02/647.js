/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    let res = s.length
    for (let i = s.length-1; i >= 0; i--) {
        for (let j = i+1; j < s.length; j++) {
            if (s[i] === s[j] && (j === i+1 || j === i+2 || (j > i+2 && dp[i+1][j-1]))) {
                dp[i][j] = 1
                res++
            }
        }
    }
    return res
};