/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let map = new Map()
    let arr = new Array()
    let res = new Array()
    for (let i of arr2) {
        map.set(i, 0)
    }
    for (let i of arr1) {
        if (map.has(i)) map.set(i, map.get(i) + 1)
        else arr.push(i)
    }
    arr.sort((a, b) => a - b)
    for (let [k, v] of map) {
        while (v--) res.push(k)
    }
    return [...res, ...arr]
};
