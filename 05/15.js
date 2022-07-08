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
  * @return int整型二维数组
  */
 function levelOrder( root ) {
    let cur = [root], next = []
    let res = [], val = []
    while (cur.length || next.length) {
        let node = cur.shift()
        val.push(node.val)
        if (node.left) next.push(node.left) 
        if (node.right) next.push(node.right) 
        if (!cur.length) {
            [cur, next] = [next, cur]
            res.push([...val])
            val = []
        }
    }
    return res
}
module.exports = {
    levelOrder : levelOrder
};