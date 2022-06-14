/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let len1 = m, len2 = n
    let dp = new Array(len1).fill(0).map(() => new Array(len2).fill(1))
    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[len1-1][len2-1]
};