/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let l, r
    for (let i = 0; i < intervals.length; i++) {
        l = intervals[i][0], r = intervals[i][1]
        while (i < intervals.length - 1 && intervals[i+1][0] <= r) {
            i++
            r = Math.max(r, intervals[i][1])
        }
        res.push([l, r])
    }
    return res
};