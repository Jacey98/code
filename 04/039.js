/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    let len = heights.length 
    let right = new Array(len).fill(0)
    let stack = []
    for (let i = 0; i < len; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let j = stack.pop()
            right[j] = i - j
        }
        stack.push(i)
    }
    while (stack.length) {
        let j = stack.pop()
        right[j] = len - j
    }
    let left = new Array(len).fill(0)
    stack = []
    for (let i = len-1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let j = stack.pop()
            left[j] = j - i
        }
        stack.push(i)
    }
    while (stack.length) {
        let j = stack.pop()
        left[j] = j + 1
    }
    let max = 0
    for (let i = 0; i < len; i++) {
        max = Math.max(max, (right[i] + left[i] - 1) * heights[i])
    }
    return max
};