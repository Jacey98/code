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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    let res = 0
    dfs(root, new Map())
    return res

    function dfs (root, pre) {
        if (!root) return
        let map = new Map()
        for (let [key, value] of pre) {
            map.set(key + root.val, value)
        }
        map.set(root.val, (map.get(root.val) || 0) + 1)
        if (map.has(targetSum)) res += map.get(targetSum)
        dfs(root.left, map)
        dfs(root.right, map)
    }
};