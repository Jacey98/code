/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [], cur = []
    nums.sort((a, b) => a-b)
    dfs(0)
    return res

    function dfs(start) {
        res.push([...cur])
        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i-1] === nums[i]) continue
            cur.push(nums[i])
            dfs(i+1)
            cur.pop()
        }
    }
};