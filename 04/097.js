/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    let len1 = t.length, len2 = s.length
    let dp = new Array(len1+1).fill(0).map(() => new Array(len2+1).fill(1))
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = 0
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (t[i-1] === s[j-1]) dp[i][j] = dp[i][j-1] + dp[i-1][j-1]
            else dp[i][j] = dp[i][j-1]
        }
    }
    return dp[len1][len2]
};