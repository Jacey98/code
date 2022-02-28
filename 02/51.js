/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let res = [], cur = []
    let row = new Array(n).fill(false), column = new Array(n).fill(false), left = new Array(2*n-1).fill(false), right = new Array(2*n-1).fill(false) // 行 列 左斜2n-1(行-列) 右斜2n-1(行+列)
    dfs()
    return res

    function dfs() {
        if (cur.length === n) {
            res.push([...cur])
            return
        }
        for (let i = 0; i < n; i++) {
            if (row[cur.length] || column[i] || left[cur.length - i + n - 1] || right[cur.length + i]) continue
            row[cur.length] = true
            column[i] = true
            left[cur.length - i + n - 1] = true
            right[cur.length + i] = true
            cur.push(spellList(i))
            dfs()
            cur.pop()
            row[cur.length] = false
            column[i] = false
            left[cur.length - i + n - 1] = false
            right[cur.length + i] = false
        }
    }

    function spellList(i) {
        let s = '', j
        if (i > 0) {
            j = i
            while(j--) s = s.concat('.')
        }
        s = s.concat('Q')
        if (i < n) {
            j = n-i-1
            while(j--) s = s.concat('.')
        }
        return s
    }
};
console.log(solveNQueens(4))