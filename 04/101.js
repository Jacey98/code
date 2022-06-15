/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum = nums.reduce((count,item) => count += item, 0)
    if (sum % 2) return false
    sum = sum/2
    let dp = new Array(nums.length).fill(0).map(() => new Array(sum+1).fill(0))
    for (let i = sum; i > 0 && i >= nums[0]; i--) {
        dp[0][i] = nums[0]
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j < nums[i]) dp[i][j] = dp[i-1][j]
            else dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-nums[i]] + nums[i])
        }
        if (dp[i][sum] === sum) return true
    }
    return false
};