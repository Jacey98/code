// @ts-nocheck
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
 var rob = function(root) {
    return dfs(root)[1]

    function dfs(root) {
        if (!root) return [0, 0]
        let pre, cur
        let [prel, curl] = dfs(root.left)
        let [prer, curr] = dfs(root.right)
        pre = curl + curr
        cur = Math.max(root.val + prel + prer, pre)
        return [pre, cur]
    }
};