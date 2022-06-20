// /**
//  * @param {number[][]} matrix
//  * @return {number}
//  */
//  var longestIncreasingPath = function(matrix) {
//     let len1 = matrix.length, len2 = matrix[0].length
//     let dp = new Array(len1).fill(0).map(() => new Array(len2).fill(0))
//     let stack = [], max = 0
//     for (let i = 0; i < len1; i++) {
//         for (let j = 0; j < len2; j++) {
//             if (dp[i][j]) continue
//             let turn = hasBig(i, j)
//             dp[i][j] = 1
//             if (turn) stack.push([i, j, [...turn]])
//             else {
//                 while (stack.length) {
//                     let [m, n, turn] = stack.pop()
//                     if (turn[0]) dp[m][n] = Math.max(dp[m][n], dp[m-1][n])
//                     if (turn[1]) dp[m][n] = Math.max(dp[m][n], dp[m+1][n])
//                     if (turn[2]) dp[m][n] = Math.max(dp[m][n], dp[m][n-1])
//                     if (turn[3]) dp[m][n] = Math.max(dp[m][n], dp[m][n+1])
//                     max = 1 + Math.max(max, dp[m][n])
//                 }
//             }
//         }
//     }
//     console.log(dp)
//     return max

//     function hasBig (m, n) {
//         let turn = new Array(4).fill(false) // 0 1 2 3 上下左右
//         let has = false
//         if (m > 0 && matrix[m][n] < matrix[m-1][n]) {
//             turn[0] = true
//             has = true
//         }
//         if (m < len1-1 && matrix[m][n] < matrix[m+1][n]) {
//             turn[1] = true
//             has = true
//         }
//         if (n > 0 && matrix[m][n] < matrix[m][n-1]) {
//             turn[2] = true
//             has = true
//         }
//         if (n < len2-1 && matrix[m][n] < matrix[m][n+1]) {
//             turn[3] = true
//             has = true
//         }
//         return has ? turn : has
//     }
// };
// longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])