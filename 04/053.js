/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
//  var inorderSuccessor = function(root, p) {
//     let res = null
//     while (root && root.val !== p.val) {
//         if (root.val < p.val) {
//             root = root.right
//         } else {
//             res = root
//             root = root.left
//         }
//     }
//     let next = null
//     if (root.right) {
//         next = root.right
//         while (next.left) {
//             next = next.left
//         }
//     }
//     return next ? next : res 
// };

var inorderSuccessor = function(root, p) {
    let cur = root, res = null
    while (cur) {
        if (cur.val > p.val) {
            res = cur
            cur = cur.left
        } else {
            cur = cur.right
        }
    }
    return res 
};