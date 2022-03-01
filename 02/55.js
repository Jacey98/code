/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    if (nums.length === 1) return true
    if (nums[0] === 0) return false
    let i = 0, temp
    while (i < nums.length - 1) {
        if (nums[i] === 0) {
            if (i === 0) return false
            i--
        }
        else {
            temp = nums[i]
            nums[i] = 0
            i += temp
        }
    }
    return true
};