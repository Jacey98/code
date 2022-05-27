/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b) 
    let res = [], cur = [], len = candidates.length, arr = new Array(len).fill(0)
    backtracking(0, 0)
    return res

    function backtracking(start, sum) {
        if (sum > target) return  
        if (sum === target) {
            res.push([...cur])
            return
        }
        for (let i = start; i < len; i++) {
            if (i !== 0 && candidates[i] === candidates[i-1] && arr[i-1] === 0) continue
            arr[i] = 1
            cur.push(candidates[i])
            backtracking(i + 1, sum + candidates[i])
            cur.pop()
            arr[i] = 0
        }
    }
};