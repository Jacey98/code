/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let len = nums.length
    let dp = new Array(len).fill(0).map(() => new Array(2))
    dp[0][0] = 0 // 不偷
    dp[0][1] = nums[0] // 偷
    for (let i = 1; i < nums.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
        dp[i][1] = nums[i] + dp[i-1][0]
    }
    return Math.max(dp[len-1][0], dp[len-1][1])
};