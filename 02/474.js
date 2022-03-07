/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    let arr = new Array(strs.length).fill(0).map(() => new Array(2).fill(0))
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for (let i = 0; i < strs.length; i++) {
        for (let j of strs[i]) {
            if (j === '0') arr[i][0]++
            else arr[i][1]++
        }
        for (let j = m; j >= arr[i][0]; j--) {
            for (let k = n; k >= arr[i][1]; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j-arr[i][0]][k-arr[i][1]] + 1)
            }
        }
    }
    return dp[m][n]
};