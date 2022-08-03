function Fibonacci(n) {
    // let dp = new Array(n+1).fill(1)
    // for (let i = 3; i <= n; i++) {
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[n]

    // let dp1 = 1, dp2 = 1, dp3
    // for (let i = 3; i <= n; i++) {
    //     dp3 = dp1 + dp2
    //     dp1 = dp2
    //     dp2 = dp3
    // }
    // return dp2

    // if (n === 1 || n === 2) return 1
    // return Fibonacci(n-1) + Fibonacci(n-2)

    let dp = new Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 1
    return fi(n)
    
    function fi (n) {
        if (!dp[n]) dp[n] = fi(n-1) + fi(n-2)
        return dp[n]
    }
}
module.exports = {
    Fibonacci : Fibonacci
};