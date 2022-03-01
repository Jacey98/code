/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0], cur = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (cur < 0) cur = 0
        cur += nums[i]
        if (cur > max) max = cur
    }
    return max
};