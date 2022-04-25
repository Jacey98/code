/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let len = temperatures.length 
    let res = new Array(len).fill(0)
    let stack = [0]
    for (let i = 1; i < len; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop()
            res[j] = i - j
        }
        stack.push(i)
    }
    return res
};