/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    let stack = new Array()
    for (let i of asteroids) {
        while (
            stack.length &&
            stack[stack.length - 1] > 0 &&
            stack[stack.length - 1] < -i
        ) stack.pop()
        if (stack.length && i < 0 && stack[stack.length - 1] === -i) stack.pop()
        else if (i > 0 || !stack.length || stack[stack.length - 1] < 0) stack.push(i)
    }
    return stack
};