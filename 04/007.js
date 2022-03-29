/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
        if (i !== 0 && nums[i] === nums[i-1]) continue
        let start = i + 1, end = nums.length - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if (sum > 0) end--
            else if (sum < 0) start++
            else {
                res.push([nums[i], nums[start], nums[end]])
                while (start < end && nums[start] === nums[start+1]) start++
                while (start < end && nums[end] === nums[end-1]) end--
                end--
                start++
            }
        }
    }
    return res
};