/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCost = function(costs) {
    let len = costs.length
    let dp = new Array(len).fill(0).map(() => new Array(3))
    dp[0][0] = costs[0][0]
    dp[0][1] = costs[0][1]
    dp[0][2] = costs[0][2]
    for (let i = 1; i < len; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2])
        dp[i][1] = costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2])
        dp[i][2] = costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1])
    }
    return Math.min(dp[len-1][0], dp[len-1][1], dp[len-1][2])
};