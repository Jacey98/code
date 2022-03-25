/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//  var addBinary = function(a, b) {
//     if (a.length < b.length) {
//         [a, b] = [b, a]
//     }
//     let lenA = a.length, lenB = b.length, bit = 0, str = '', i
//     for (i = lenA - 1; i >= (lenA - lenB); i--) {
//         let num = Number(a[i]) + Number(b[i - lenA + lenB]) + bit
//         if (num === 0 || num === 1) bit = 0
//         else if (num === 2) {
//             bit = 1
//             num = 0
//         } else {
//             bit = 1
//             num = 1
//         }
//         str = num + str
//     }
//     while (i >= 0) {
//         let num = Number(a[i]) + bit
//         if (num === 0 || num === 1) bit = 0
//         else {
//             bit = 1
//             num = 0
//         }
//         str = num + str
//         i--
//     }
//     if (bit) str = 1 + str
//     return str
// };
var addBinary = function(a, b) {
    let maxLen = Math.max(a.length, b.length)
    while (a.length < maxLen) a = 0 + a
    while (b.length < maxLen) b = 0 + b
    let bit = 0, str = ''
    for (let i = maxLen - 1; i >= 0; i--) {
        bit += Number(a[i]) + Number(b[i])
        str = bit%2 + str
        bit = Math.floor(bit/2)
    }
    if (bit) str = 1 + str
    return str
};