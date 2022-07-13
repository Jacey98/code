let stackIn = []
let stackOut = []
function push(node)
{
    stackIn.push(node)
}
function pop()
{
    if (!stackOut.length) {
        let len = stackIn.length
        while (len--) stackOut.push(stackIn.pop())
    }
    return stackOut.pop()
}
module.exports = {
    push : push,
    pop : pop
};