/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  var numSubarrayProductLessThanK = function(nums, k) {
//     let res = 0, len = nums.length
//     for (let l = 0; l < len; l++) {
//         let r = l, sum = 1
//         while (r < len) {
//             sum *= nums[r]
//             if (sum >= k) break
//             res++
//             r++
//         }
//     }
//     return res
// };
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0
    let res = 0, len = nums.length, sum = 1, l = 0, r = 0
    while (r < len) {
        sum *= nums[r]
        while (sum >= k) {
            sum /= nums[l]
            l++
        }
        res += r - l + 1
        r++
    }
    return res
};