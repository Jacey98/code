/**
 * 
 * @param arr int整型一维数组 the array
 * @return int整型
 */
 function maxLength( arr ) {
    let res = 0, map = new Map()
    for (let i = 0, j = 0; j < arr.length; j++) {
        if (map.has(arr[j])) i = Math.max(i, map.get(arr[j]) + 1)
        res = Math.max(res, j-i+1)
        map.set(arr[j], j)
    }
    return res
}
module.exports = {
    maxLength : maxLength
};