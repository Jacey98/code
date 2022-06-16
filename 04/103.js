/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(0).map(() => new Array(2).fill(0))
    dp[0][0] = 1
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j < coins[i]) continue
            if (dp[j - coins[i]][0]) {
                dp[j][0] = 1
                dp[j][1] = Math.min(!dp[j][1] ? Infinity : dp[j][1], 1 + dp[j - coins[i]][1])
            }
        }
        // console.log(dp)
    }
    
    return dp[amount][0] ? dp[amount][1] : -1
};