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
//  var convertBST = function(root) {
//     dfs(root, 0)
//     return root

//     function dfs (root, pre) {
//         if (!root) return 0
//         let right = dfs(root.right, pre)
//         root.val += right || pre
//         let left = dfs(root.left, root.val) || root.val
//         return left
//     }
// };

var convertBST = function(root) {
    let sum = 0
    dfs(root)
    return root

    function dfs (root) {
        if (!root) return 
        dfs(root.right)
        sum += root.val
        root.val = sum
        dfs(root.left)
    }
};