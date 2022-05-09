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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    let res = pre = new TreeNode(0)
    dfs(root)
    return res.right

    function dfs (root) {
        if (!root) return
        dfs(root.left)
        root.left = null
        pre.right = root
        pre = root
        dfs(root.right)
    }
};