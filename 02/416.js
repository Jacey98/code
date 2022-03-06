/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let tsum = nums.reduce((count, i) => count+i, 0)
    if (tsum % 2) return false
    let sum = tsum/2, len = nums.length
    let dp = new Array(sum + 1).fill(0)
    for (let i = 0; i < len; i++) {
        for (let j = sum; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return dp[sum] === sum
};