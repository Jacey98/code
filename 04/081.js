/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let res = [], cur = [], len = candidates.length
    backtracking(0, 0) 
    return res

    function backtracking (start, sum) {
        if (sum > target) return 
        if (sum === target) {
            res.push([...cur])
            return
        }
        for (let i = start; i < len; i++) {
            cur.push(candidates[i])
            backtracking(i, sum + candidates[i])
            cur.pop()
        }
    }
};