/**
 * @param {string[]} timePoints
 * @return {number}
 */
 var findMinDifference = function(timePoints) {
    let arr = timePoints.map(item => Number(item.slice(0, 2))*60 + Number(item.slice(3))).sort((a, b) => a - b)
    let min = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        min = Math.min(min, arr[i+1] - arr[i])
    }
    min = Math.min(min, 1440 - arr.pop() + arr[0])
    return min
};