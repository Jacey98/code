/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
    let len1 = str1.length, len2 = str2.length, max = 0, last = 0
    let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (str1[i] === str2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1
                if (dp[i + 1][j + 1] > max) {
                    max = dp[i + 1][j + 1]
                    last = i
                }
            }
        }
    }
    return str1.slice(last - max + 1, last + 1)
}
module.exports = {
    LCS: LCS
};