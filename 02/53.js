/**
 * @param {number[]} nums
 * @return {number}
 */
//  var maxSubArray = function(nums) {
//     let max = nums[0], cur = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         if (cur < 0) cur = 0
//         cur += nums[i]
//         if (cur > max) max = cur
//     }
//     return max
// };

var maxSubArray = function(nums) {
    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
        if (dp[i] > max) max = dp[i]
    }
    return max
};