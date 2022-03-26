/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let dp = new Array(n+1).fill(1)
    dp[0] = 0
    for (let i = 1; 2**i < n; i++) {
        for (let j = 2**i + 1; j <= n && j < 2**(i+1); j++) {
            dp[j] = 1 + dp[j-2**i]
        }
    }
    return dp
};