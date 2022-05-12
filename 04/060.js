/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let map = new Map()
    for (let i of nums) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    let arr = Array.from(map).sort((a, b) => b[1] - a[1])
    let i = k
    let res = []
    while(i--) {
        res.push(arr.shift()[0])
    }
    return res
};