/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    let len = s.length
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(1))
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j] || (j > i + 2 && !dp[i+1][j-1])) dp[i][j] = 0
        }
    }

    let res = [], cur = []
    dfs(0)
    return res

    function dfs (start) {
        if (start === len) {
            res.push([...cur])
            return 
        }
        for (let i = start; i < len; i++) {
            if (dp[start][i]) {
                cur.push(s.slice(start, i+1))
                dfs(i + 1)
                cur.pop()
            }
        }
    }
};