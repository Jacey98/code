/**
 * @param {number[]} arr
 * @return {number}
 */
 var lenLongestFibSubseq = function(arr) {
    let len = arr.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(arr[i], i)
    }
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
    let res = 0
    for (let i = 1; i < len; i++) {
        for (let j = i-1; j > 0; j--) {
            let first = arr[i] - arr[j]
            if (first > arr[j]) break
            if (map.has(first)) {
                let k = map.get(first)
                if (k < j) dp[i][j] = Math.max(dp[j][k] + 1, 3)
            } else dp[i][j] = 2
            res = Math.max(res, dp[i][j])
        }
    }
    return res > 2 ? res : 0
};