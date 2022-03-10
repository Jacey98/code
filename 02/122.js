/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//     let max = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > prices[i-1]) max += prices[i] - prices[i-1]
//     }
//     return max
// };

 var maxProfit = function(prices) {
    let dp = new Array(prices.length).fill(0).map(() => new Array(2))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i])
        dp[i][1] = Math.max(dp[i-1][1], prices[i] + dp[i-1][0])
    }
    return dp[prices.length - 1][1]
};