/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    let result = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i]
        else if (prices[i] > min + fee) {
            result += prices[i] - min - fee
            min = prices[i] - fee
        }
    }
    return result
};