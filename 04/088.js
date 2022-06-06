/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i-2], dp[i-1]) + cost[i]
    }
    return Math.min(dp.pop(), dp.pop())
};