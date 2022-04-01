/**
 * @param {number[]} nums
 * @return {number}
 */
//  var findMaxLength = function(nums) {
//     let max = 0
//     let len = nums.length
//     let arr = new Array(len+1).fill(0).map(() => new Array(2))
//     let map = new Map()
//     arr[0][0] = 0
//     arr[0][1] = 0
//     map.set(0, -1)
//     for (let i = 0; i < len; i++) {
//         if (nums[i] === 0) {
//             arr[i+1][0] = arr[i][0] + 1
//             arr[i+1][1] = arr[i][1]
//         } else {
//             arr[i+1][0] = arr[i][0]
//             arr[i+1][1] = arr[i][1] + 1
//         }
//         let dif = arr[i+1][0] - arr[i+1][1]
//         if (map.has(dif)) max = Math.max(max, i - map.get(dif)) 
//         map.set(dif, map.has(dif) ? Math.min(i, map.get(dif)) : i)
//     }
//     return max
// };
var findMaxLength = function(nums) {
    let max = 0, count = 0
    let len = nums.length
    let map = new Map()
    map.set(0, -1)
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            count--
        } else {
            count++
        }
        if (map.has(count)) {
            max = Math.max(max, i - map.get(count)) 
        } else map.set(count, i)
    }
    return max
};