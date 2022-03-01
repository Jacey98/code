/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
    let max = 1, min = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) max = min + 1
        if (nums[i] < nums[i-1]) min = max + 1
    }
    return max > min ? max : min
};