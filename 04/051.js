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
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = -Infinity
    dfs(root)
    return max
    
    function dfs (root) {
        if (!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        max = Math.max(max, root.val + left + right)
        let value = root.val + Math.max(left, right)
        return value > 0 ? value : 0
    }
};