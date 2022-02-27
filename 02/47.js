/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var permuteUnique = function(nums) {
//     let res = [], cur = [], used = []
//     nums.sort((a, b) => a-b)
//     dfs()
//     return res

//     function dfs() {
//         if (cur.length === nums.length) {
//             res.push([...cur])
//             return
//         }
//         let use = []
//         for (let i = 0; i < nums.length; i++) {
//             if (used[i] || use[nums[i]]) continue
//             cur.push(nums[i])
//             used[i] = true
//             use[nums[i]] = true
//             dfs()
//             cur.pop()
//             used[i] = false
//         }
//     }
// };
var permuteUnique = function(nums) {
    let res = [], cur = [], used = []
    nums.sort((a, b) => a-b)
    dfs()
    return res

    function dfs() {
        if (cur.length === nums.length) {
            res.push([...cur])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i !== 0 && nums[i] === nums[i-1] && !used[i-1]) continue
            // if (!used[i]) {
                cur.push(nums[i])
                used[i] = true
                dfs()
                cur.pop()
                used[i] = false
            // }
        }
    }
};

console.log(permuteUnique([1,1,2]))