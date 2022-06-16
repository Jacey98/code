/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let total = nums.reduce((c,v) => c += v, 0)
    let sum = total - target
    if (sum%2 || sum < 0) return 0
    sum = sum/2

    let dp = new Array(sum+1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum; j >= 0; j--) {
            dp[j] += (j >= nums[i] ? dp[j-nums[i]] : 0)
        }
    }
    return dp[sum]
};