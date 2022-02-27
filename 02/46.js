/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = [], cur = [], used = []
    dfs()
    return res

    function dfs() {
        if (cur.length === nums.length) {
            res.push([...cur])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[nums[i] + 10]) continue
            cur.push(nums[i])
            used[nums[i] + 10] = true
            dfs()
            cur.pop()
            used[nums[i] + 10] = false
        }
    }
};