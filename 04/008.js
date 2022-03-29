/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let len = nums.length
    let min = len + 1
    let left = 0, right = 0
    let sum = 0
    while (right < len) {
        sum += nums[right]
        if (sum < target) {
            right++
        }
        else {
            if (left === right) return 1
            min = Math.min(min, right - left + 1)
            sum -= nums[left] + nums[right]
            left++
        }
    }
    return min === len + 1 ? 0 : min
};