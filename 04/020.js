/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    let res = 0
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (i === j || (s[i] === s[j] && (j === i + 1 || dp[i+1][j-1] === 1))) {
                res++
                dp[i][j] = 1
            }
        }
    }
    return res
};