/**
 * @param {number} n
 * @return {number}
 */
//  var climbStairs = function(n) {
//     let dp = [1, 2]
//     if (n <= 2) return dp[n-1]
//     for (let i = 2; i < n; i++) {
//         let temp = dp[1]
//         dp[1] = dp[0] + dp[1]
//         dp[0] = temp
//     }
//     return dp[1]

// };

var climbStairs = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= 2; i++) {
            if (j >= i) dp[j] += dp[j-i]
        }
    }
    return dp[n]
};