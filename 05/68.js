function jumpFloor(number)
{
    // let len = number
    // let dp = new Array(len + 1)
    // dp[0] = 1
    // dp[1] = 1
    // for (let i = 2; i <= len; i++) {
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[len]

    let len = number
    let dp1 = 1, dp2 = 1, dp3
    for (let i = 2; i <= len; i++) {
        dp3 = dp1 + dp2;
        [dp1, dp2, dp3] = [dp3, dp1, dp2]
    }
    return dp1
}
module.exports = {
    jumpFloor : jumpFloor
};