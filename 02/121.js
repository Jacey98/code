/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//     let min = prices[0], res = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] > min) {
//             res = Math.max(res, prices[i] - min)
//         } else {
//             min = prices[i]
//         }
//     }
//     return res
// };

var maxProfit = function(prices) {
    let dp = new Array(prices.length).fill(0).map(() => new Array(2))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(-prices[i], dp[i-1][0])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i])
    }
    return dp[prices.length-1][1]
};