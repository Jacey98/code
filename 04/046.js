/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return []
    let res = []
    let node = [root], len = 1
    while (len) {
        for (let i = 0; i < len; i++) {
            if (i === len-1) res.push(node[0].val)
            if (node[0].left) node.push(node[0].left)
            if (node[0].right) node.push(node[0].right)
            node.shift()
        }
        len = node.length
    }
    return res
};