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
 */
 var BSTIterator = function(root) {
    let arr = [-1]
    dfs(root)
    this.arr = arr

    function dfs (root) {
        if (!root) return 
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.arr.shift()
    return this.arr[0]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.arr.length > 1 
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */