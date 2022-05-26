/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let res = [], cur = []
    backtracking(1)
    return res

    function backtracking (start) {
        if (cur.length + (n - start + 1) < k) return 
        if (cur.length === k) {
            res.push([...cur])
            return
        }
        for (let i = start; i <= n; i++) {
            cur.push(i)
            backtracking(i+1)
            cur.pop()
        }
    }
};