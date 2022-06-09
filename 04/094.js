/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    let len = s.length
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(1))
    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j] || (j > i + 2 && !dp[i + 1][j - 1])) dp[i][j] = 0
        }
    }

    let f = new Array(len).fill(Infinity)
    for (let i = 0; i < len; i++) {
        if (dp[0][i]) f[i] = 0
        else {
            for (let j = 0; j < i; j++) {
                if (dp[j + 1][i]) f[i] = Math.min(f[i], f[j] + 1)
            }
        }
    }
    return f[len - 1]
};