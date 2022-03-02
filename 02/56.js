/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = [], begin = intervals[0][0], end = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > end) {
            res.push([begin, end])
            begin = intervals[i][0]
            end = intervals[i][1]
        } else if (intervals[i][1] > end) {
            end = intervals[i][1]
        }
    }
    res.push([begin, end])
    return res
};