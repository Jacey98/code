/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let res
    while (k--) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i-1] > nums[i]) [nums[i-1], nums[i]] = [nums[i], nums[i-1]]
        }
        res = nums.pop()
    }
    return res
};