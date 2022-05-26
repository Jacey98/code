/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = [], cur = [], len = nums.length
    backtracking(0)
    return res

    function backtracking (start) {
        res.push([...cur])
        for (let i = start; i < len; i++) {
            cur.push(nums[i])
            backtracking(i+1)
            cur.pop()
        }
    }
};