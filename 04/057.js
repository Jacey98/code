/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < Math.min(i + k + 1, nums.length); j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) return true
        }
    }
    return false
};