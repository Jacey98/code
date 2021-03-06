/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 0 没有操作
    // 1 第一次买入
    // 2 第一次卖出
    // 3 第二次买入
    // 4 第二次卖出
        let dp = new Array(prices.length).fill(0).map(() => new Array(5))
        dp[0][0] = 0
        dp[0][1] = -prices[0]
        dp[0][2] = 0
        dp[0][3] = -prices[0]
        dp[0][4] = 0
        for (let i = 1; i < prices.length; i++) {
            dp[i][0] = dp[i-1][0]
            dp[i][1] = Math.max(dp[i-1][0]-prices[i], dp[i-1][1])
            dp[i][2] = Math.max(dp[i-1][1]+prices[i], dp[i-1][2])
            dp[i][3] = Math.max(dp[i-1][2]-prices[i], dp[i-1][3])
            dp[i][4] = Math.max(dp[i-1][3]+prices[i], dp[i-1][4])
        }
        return Math.max(dp[prices.length-1][2], dp[prices.length-1][4])
    };