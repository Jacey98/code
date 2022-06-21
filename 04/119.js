/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let res = 0
    for (let i of nums) {
        if (set.has(i-1)) continue
        let cur = 1
        while (set.has(i+1)) {
            cur++
            i++
        }
        res = Math.max(res, cur)
    }
    return res
};