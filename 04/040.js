/**
 * @param {string[]} matrix
 * @return {number}
 */
 var maximalRectangle = function (matrix) {
    if (matrix.length == 0 || matrix[0].length == 0) return 0
    let heights = new Array(matrix[0].length).fill(0)
    let maxArea = 0
    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] == "0") heights[i] = 0
            else heights[i]++
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights))
    }
    return maxArea

    function largestRectangleArea (heights) {
        let res = new Array(heights.length).fill(0), area = 0
        let stack = []
        heights = [0, ...heights, 0]
        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[i] < heights[stack[stack.length-1]]) {
                let mid = stack.pop()
                let h = heights[mid]
                let w = i - stack[stack.length - 1] - 1
                area = Math.max(area, w*h)
            }
            stack.push(i)
        }
        return area
    };
};
