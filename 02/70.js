/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let dp = [1, 2]
    if (n <= 2) return dp[n-1]
    for (let i = 2; i < n; i++) {
        let temp = dp[1]
        dp[1] = dp[0] + dp[1]
        dp[0] = temp
    }
    return dp[1]

};