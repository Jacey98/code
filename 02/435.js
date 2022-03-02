/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    let len = intervals.length, num = 1, max = intervals[0][1]
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] >= max) {
            num++
            max = intervals[i][1]
        }
    }
    return len - num
};