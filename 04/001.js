/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
    let min = - (2**31), max = 2**31 - 1
    if (a === min) {
        if (b === -1) return max
        if (b === 1) return min
    }
    let minus = false, res = 0
    if (a < 0) {
        a = -a
        minus = !minus
    }
    if (b < 0) {
        b = -b
        minus = !minus
    }
    // while (a >= b) {
    //     a -= b
    //     res++
    // }
    for (let i = 31; i >= 0; i--) {
        if(a >>> i >= b) {
            a -= b << i
            res += 1 << i
        }
    }
    return minus ? -res : res
};