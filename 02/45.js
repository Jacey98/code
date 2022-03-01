/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let cur = 0, next = 0, steps = 0
    for (let i = 0; i < nums.length - 1; i++) {
        next = Math.max(nums[i] + i, next)
        if (i === cur) {
            cur = next
            steps++
        }
    }
    return steps
};