/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
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