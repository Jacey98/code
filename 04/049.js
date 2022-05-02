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
 var sumNumbers = function(root) {
    let sum = 0
    dfs(root, 0)
    return sum

    function dfs (root, pre) {
        if (!root) return 
        pre = pre*10 + root.val
        dfs(root.left, pre)
        dfs(root.right, pre)
        if (!root.left && !root.right) sum += pre
    }
};