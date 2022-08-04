/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A string字符串 
 * @return int整型
 */
 function getLongestPalindrome( A ) {
    let len = A.length, max = 1
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
    for (let i = len-1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (i === j || ((A[i] === A[j]) && ((i === j-1 || dp[i+1][j-1])))) {
                dp[i][j] = 1
                max = Math.max(max,j-i+1)
            }
        }
    }
    return max
}
module.exports = {
    getLongestPalindrome : getLongestPalindrome
};