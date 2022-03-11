/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    let dp = new Array(nums.length), result = 1
    dp[0] = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) dp[i] = dp[i-1] + 1
        else dp[i] = 1
        if (dp[i] > result) result = dp[i]
    }
    return result
};