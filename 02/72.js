/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let len1 = word1.length, len2 = word2.length
    let dp = new Array(len1+1).fill(0).map(() => new Array(len2+1).fill(0))
    for (let i = 1; i <= len1; i++) dp[i][0] = i
    for (let i = 1; i <= len2; i++) dp[0][i] = i
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1]
            else {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
            }
        }
    }
    return dp[len1][len2]
};