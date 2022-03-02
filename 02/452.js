/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0])
    let num = 0, max = -Infinity
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > max) {
            max = points[i][1]
            num++
        } else {
            max = Math.min(max, points[i][1])
        }
    }
    return num
};