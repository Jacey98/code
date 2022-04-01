/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let len = nums.length
    let arr = new Array(len)
    arr[0] = 0
    for (let i = 0; i < len; i++) {
        arr[i+1] = nums[i] + arr[i]
    }
    let sum = nums[len-1] + arr[len-1]
    for (let i = 0; i < len; i++) {
        if (2*arr[i] + nums[i] === sum) return i
    }
    return -1
};