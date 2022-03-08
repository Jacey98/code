/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (let j = 1; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            if (j >= nums[i]) dp[j] += dp[j-nums[i]]
        }
    }
    return dp[target]
};