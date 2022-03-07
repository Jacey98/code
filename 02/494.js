/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a, b) => a + b)
    if (Math.abs(target) > sum || (target + sum) % 2) return 0
    let size = (target + sum) / 2
    let dp = new Array(size + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = size; j >= nums[i]; j--) {
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[size]
};