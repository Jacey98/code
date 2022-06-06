/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    let len = nums.length - 1
    let res = thief()
    nums.shift()
    return Math.max(res, thief())
    
    function thief () {
        let dp = new Array(len).fill(0).map(() => new Array(2))
        dp[0][0] = 0 // 不偷
        dp[0][1] = nums[0] // 偷
        for (let i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1])
            dp[i][1] = nums[i] + dp[i-1][0]
        }
        return Math.max(dp[len-1][0], dp[len-1][1])
    }
};