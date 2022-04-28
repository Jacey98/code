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
 var findBottomLeftValue = function(root) {
    let cur = [root], next = [], res
    do{
        res = cur[0].val
        while (cur.length) {
            let node = cur.shift()
            if (node.left) next.push(node.left)
            if (node.right) next.push(node.right)
        }
        [cur, next] = [next, cur]
    } while (cur.length)
    
    return res
};