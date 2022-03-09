/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    let dp = new Array(nums.length).fill(0)
    return Math.max(robRange(0, nums.length-2), robRange(1, nums.length-1))

    function robRange(start, end) {
        if (start === end) return nums[start]
        let dp = new Array(end - start + 1)
        dp[0] = nums[start]
        dp[1] = Math.max(nums[start], nums[start+1])
        for (let i = 2; i < end - start + 1; i++) {
            dp[i] = Math.max(dp[i-2] + nums[start + i], dp[i-1])
        }
        return dp[end - start]
    }
};