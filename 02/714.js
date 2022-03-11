/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
//  var maxProfit = function(prices, fee) {
//     let result = 0
//     let min = prices[0]
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min) min = prices[i]
//         else if (prices[i] > min + fee) {
//             result += prices[i] - min - fee
//             min = prices[i] - fee
//         }
//     }
//     return result
// };

var maxProfit = function(prices, fee) {
    // 0 有
    // 1 没有
    // 2 卖出
    let dp = new Array(prices.length).fill(0).map(() => new Array(2))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i] - fee)
    }
    return dp[prices.length - 1][1]
};