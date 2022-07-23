/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    let res = [], arr = [], nodeArr = [pRoot], direction = true
    while (nodeArr.length) {
        let len = nodeArr.length
        while (len--) {
            let node = nodeArr.shift()
            if (!node) continue
            if (direction) arr.push(node.val)
            else arr.unshift(node.val)
            nodeArr.push(node.left)
            nodeArr.push(node.right)
        }
        direction = !direction
        if (arr.length) res.push([...arr])
        arr = []
    }
    return res
}
module.exports = {
    Print : Print
};