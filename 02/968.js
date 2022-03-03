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
 var minCameraCover = function(root) {
    // 0：该节点无覆盖
    // 1：本节点有摄像头
    // 2：本节点有覆盖
        let num = 0
        if (dfs(root) === 0) num++
        return num
    
        function dfs(node) {
            if (!node) return 2
            let left = dfs(node.left)
            let right = dfs(node.right)
            if (left === 2 && right === 2) return 0
            if (left === 0 || right === 0) {
                num++
                return 1
            }
            if (left === 1 || right === 1) return 2
        }
    
    };