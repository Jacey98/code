/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1)
    let map = {}
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = i
    }
    let stack = []
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length-1]]) {
            let j = stack.pop()
            if (map[nums2[j]] !== undefined)
                res[map[nums2[j]]] = nums2[i]
        }
        stack.push(i)
    }
    return res
};