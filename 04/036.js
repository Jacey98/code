/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = new Array()
    let a, b
    for (let i of tokens) {
        switch (i) {
            case "+":
                a = stack.pop()
                b = stack.pop()
                stack.push(Number(a) + Number(b))
                break
            case '-':
                a = stack.pop()
                b = stack.pop()
                stack.push(b - a)
                break
            case '*':
                a = stack.pop()
                b = stack.pop()
                stack.push(a * b)
                break
            case '/':
                a = stack.pop()
                b = stack.pop()
                stack.push(b / a < 0 ? Math.ceil(b / a) : Math.floor(b / a))
                break
            default:
                stack.push(i)
        }
    }
    return stack.pop()
};