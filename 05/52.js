/**
  * 
  * @param s string字符串 
  * @return bool布尔型
  */
 function isValid( s ) {
    let stack = []
    for(let i of s) {
        switch (i) {
            case "(":
                stack.push(')')
                break
            case "[":
                stack.push(']')
                break
            case "{":
                stack.push('}')
                break
            case ')':
            case ']':
            case '}':
                if (!stack.length) return false
                let out = stack.pop()
                if (out !== i) return false
        }
    }
    if (stack.length) return false
    return true
}
module.exports = {
    isValid : isValid
};