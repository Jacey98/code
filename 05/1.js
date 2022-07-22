/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
 function solve( s ,  t ) {
    // let len1 = s.length, len2 = t.length
    // let res = '', bit = 0
    // while (len1 && len2) {
    //     let num = +s[len1-1] + +t[len2-1] + bit
    //     bit = num/10 >= 1 ? 1 : 0
    //     res = num%10 + res
    //     len1--
    //     len2--
    // }
    // while (len1) {
    //     let num = +s[len1-1] + bit
    //     bit = num/10 >= 1 ? 1 : 0
    //     res = num%10 + res
    //     len1--
    // }
    // while (len2) {
    //     let num = +t[len2-1] + bit
    //     bit = num/10 >= 1 ? 1 : 0
    //     res = num%10 + res
    //     len2--
    // }
    // if (bit) res = 1 + res
    // return res
    let len1 = s.length, len2 = t.length
    let res = '', bit = 0
    while (len1>0 || len2>0) {
        let num = (len1>0 ? +s[len1-1] : 0) + (len2>0 ? +t[len2-1] : 0) + bit
        bit = num/10 >= 1 ? 1 : 0
        res = num%10 + res
        len1--
        len2--
    }
    if (bit) res = 1 + res
    return res
}
module.exports = {
    solve : solve
};