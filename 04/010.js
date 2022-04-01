/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let len = nums.length
    let res = 0
    let sumArr = new Array(len+1)
    let map = new Map()
    sumArr[0] = 0
    map.set(0, 1)
    for(let i = 0; i < len; i++) {
        sumArr[i+1] = sumArr[i] + nums[i]
        if (map.has(sumArr[i+1] - k)) res += map.get(sumArr[i+1] - k)
        map.set(sumArr[i+1], map.has(sumArr[i+1]) ? map.get(sumArr[i+1]) + 1 : 1)
    }
    return res
};