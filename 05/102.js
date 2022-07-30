/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
 function lowestCommonAncestor( root ,  o1 ,  o2 ) {
    return findNode(root).val
        
    function findNode (root) {
        if (!root || root.val === o1 || root.val === o2) return root
        let l = findNode(root.left)
        let r = findNode(root.right)
        if (!l && !r) return null
        if (l && r) return root
        return l || r
    }
}
module.exports = {
    lowestCommonAncestor : lowestCommonAncestor
};