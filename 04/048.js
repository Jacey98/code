/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if (!root) return []
    let res = [root.val], tree = [root]
    while (tree.length) {
        let node = tree.shift()
        if (node.left) {
            tree.push(node.left)
            res.push(node.left.val)
        } else res.push('&')
        if (node.right) {
            tree.push(node.right)
            res.push(node.right.val)
        } else res.push('&')
    }
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return null
    let root = new TreeNode(data.shift())
    let tree = [root]
    while (data.length) {
        let left = data.shift()
        let right = data.shift()
        let node = tree.shift()
        if (left !== '&') {
            node.left = new TreeNode(left)
            tree.push(node.left)
        }
        if (right !== '&') {
            node.right = new TreeNode(right)
            tree.push(node.right)
        }
    }
    return root
}; 

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */