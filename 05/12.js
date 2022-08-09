function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    // 递归
    // if (!vin.length) return null
    // let head = pre.shift()
    // let node = new TreeNode(head)
    // let mid = vin.indexOf(head)
    // node.left = reConstructBinaryTree(pre, vin.slice(0, mid))
    // node.right = reConstructBinaryTree(pre, vin.slice(mid+1))
    // return node

    // 迭代
    let len = pre.length
    if (!len) return null
    let node = new TreeNode(pre[0]), head = node
    let stack = [node]
    let m = 1, n = 0
    while (m < len) {
        let cur = new TreeNode(pre[m])
        if (stack[stack.length-1].val === vin[n]) {
            while (stack.length && stack[stack.length-1].val === vin[n]) {
                // @ts-ignore
                node = stack.pop()
                n++
            }
            node.right = cur
        } else node.left = cur
        node = cur
        stack.push(node)
        m++
    }
    return head
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};