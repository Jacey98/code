/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    let sum = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < 0 && k) {
            k--
            nums[i] = -nums[i]
        } 
        sum += nums[i]
    }
    if (k % 2) sum -= nums[nums.length-1]
    else sum += nums[nums.length-1]
    return sum
} 