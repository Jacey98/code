/**
 * retrun the longest increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型一维数组
 */
 function LIS( arr ) {
    // 写成了最长上升子串（子串连续，子序列不连续）
    // let len = arr.length
    // if (!len) return []
    // let max = 1, start = 0, cur = 1
    // for (let i = 1; i <= len; i++) {
    //     if (i !== len && arr[i] >= arr[i-1]) cur++
    //     else if (cur > max || (cur === max && arr[start] > arr[i-cur])) {
    //         max = cur
    //         start = i-cur
    //         cur = 1
    //     } else if (cur === max && arr[start] <= arr[i-cur]) cur = 1
    //     console.log(i, max ,start,cur)
    // }
    // return arr.slice(start, start + max)

    let len = arr.length
    if (!len) return []
    let dp = new Array(len)
    dp[0] = 1
    let cur = [arr[0]]
    for (let i = 1; i < len; i++) {
        if (cur[cur.length-1] >= arr[i]) {
            let j
            for (j = 0; j < cur.length; j++) {
                if (cur[j] >= arr[i]) break
            }
            cur[j] = arr[i]
            dp[i] = j+1
        } else {
            cur.push(arr[i])
            dp[i] = cur.length
        }
    }
    let res = [], count = cur.length
    for (let i = len-1; i >= 0 && count > 0; i--) {
        if (dp[i] === count) {
            count--
            res.unshift(arr[i])
        }
    }
    return res
}
module.exports = {
    LIS : LIS
};