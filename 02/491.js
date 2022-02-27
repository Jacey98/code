/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [], cur = []
    dfs(0)
    return res

    function dfs(start) {
        if (cur.length > 1) res.push([...cur])
        let used = {}
        for (let i = start; i < nums.length; i++) {
            if ((cur.length && nums[i] < cur[cur.length-1]) || used[nums[i]]) continue
            cur.push(nums[i])
            used[nums[i]] = true
            dfs(i + 1)
            cur.pop()
        }
    }
};