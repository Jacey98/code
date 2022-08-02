/**
 * 反转字符串
 * @param str string字符串 
 * @return string字符串
 */
 function solve( str ) {
    let len = str.length
    if (len <= 1) return str
    let res = ''
    for (let j = len-1; j >= 0; j--) {
        res += str[j]
    }
    return res
}
module.exports = {
    solve : solve
};