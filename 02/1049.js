/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    let tsum = stones.reduce((c, i) => c + i)
    let sum = Math.floor(tsum/2)
    let dp = new Array(sum + 1).fill(0)
    for (let i = 0; i < stones.length; i++) {
        for (let j = sum; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-stones[i]] + stones[i])
        }
    }
    return tsum - dp[sum]*2

};