/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length - 1, mid
    while (l < r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] === nums[mid ^ 1]) l = mid + 1 
        else r = mid
    }    
    return nums[l]
};