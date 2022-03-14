/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let res = new Array(height.length).fill(0), rain = 0
    let stack = []
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length-1]]) {
            let mid = stack.pop()
            if (stack.length) {
                let h = Math.min(height[stack[stack.length - 1]], height[i]) - height[mid]
                let w = i - stack[stack.length - 1] - 1
                rain += h * w
            }
        }
        stack.push(i)
    }
    return rain
};