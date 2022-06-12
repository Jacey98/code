/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if (!s1 && !s2 && !s3) return true
    let len1 = s1.length, len2 = s2.length
    if (len1 + len2 !== s3.length) return false
    let dp  = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(false))
    dp[0][0] = s1.length || s2.length ? true : false
    for (let i = 1; i <= len1; i++) {
        if (dp[i-1][0] && s1[i-1] === s3[i-1]) dp[i][0] = true
    }
    for (let i = 1; i <= len2; i++) {
        if (dp[0][i-1] && s2[i-1] === s3[i-1]) dp[0][i] = true
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if ((dp[i-1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j-1] && s2[j - 1] === s3[i + j - 1])) dp[i][j] = true
        }
    }
    return dp[len1][len2]
};
