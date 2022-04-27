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
 var CBTInserter = function(root) {
    this.root = root
    this.height = 1
    this.tree = [[root]]
    while (this.tree[this.height-1].length === 2**(this.height-1)) {
        this.tree[this.height] = new Array()
        for (let node of this.tree[this.height-1]) {
            if (node.left) this.tree[this.height].push(node.left) 
            if (node.right) this.tree[this.height].push(node.right)
        }
        this.height++
    }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    let num = this.tree[this.height-1].length
    let head = this.tree[this.height-2][Math.floor(num/2)]
    let node = new TreeNode(v)
    if (num % 2) head.right = node
    else head.left = node
    this.tree[this.height-1].push(node) 
    if (this.tree[this.height-1].length === 2**(this.height-1)) {
        this.tree[this.height] = new Array()
        this.height++
    }
    return head.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */