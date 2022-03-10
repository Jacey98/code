/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if (prices.length === 0) return 0
    let dp = new Array(prices.length).fill(0).map(() => new Array(2*k + 1).fill(0))
    for (let i = 1; i < 2*k + 1; i += 2) {
        dp[0][i] = -prices[0]
    }
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j < 2*k + 1; j++) {
            if (j%2) {
                dp[i][j] = Math.max(dp[i-1][j-1]-prices[i], dp[i-1][j])
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1]+prices[i], dp[i-1][j])
            }
        }
    }
    return Math.max(...dp[prices.length-1]) 
};