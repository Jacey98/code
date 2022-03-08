/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for (let j = 1; j <= s.length; j++) {
        for (let i = 0; i < wordDict.length; i++) {
            if (dp[j]) break
            if (j >= wordDict[i].length && dp[j - wordDict[i].length] && wordDict[i] === s.slice(j - wordDict[i].length, j)) {
                dp[j] = true
                break
            }
        }
    }
    return dp[s.length]
}