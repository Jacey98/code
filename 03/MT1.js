/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A int整型一维数组 
 * @param n int整型 
 * @return int整型
 */
 function getDis( A ,  n ) {
    // write code here
    let dp = new Array(A.length)
    dp[0] = A[0]
    let max = 0
    for (let i = 1; i < A.length; i++) {
        dp[i] = Math.min(dp[i-1], A[i])
        max = Math.max(max, A[i] - dp[i])
    }
    return max
}
module.exports = {
    getDis : getDis
}; 