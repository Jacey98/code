/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
    if (x === 0) return 0
    let left = 1, right = x
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (x >= mid**2) {
            if (x < (mid + 1)**2) {
                return mid
            }
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
};