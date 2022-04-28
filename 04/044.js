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
 var largestValues = function(root) {
    if (!root) return []
    let res = [], max = -Infinity
    let cur = [root], next = []
    while (1) {
        while (cur.length) {
            let node = cur.shift()
            max = Math.max(max, node.val)
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
        }
        res.push(max)
        max = -Infinity
        if (!next.length) break
        [cur, next] = [next, cur]
    }
    return res
};