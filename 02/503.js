/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length-1]]) {
            res[stack.pop()] = nums[i]
        }
        stack.push(i)
    }
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length-1]]) {
            res[stack.pop()] = nums[i]
        }
        stack.push(i)
    }
    return res
};