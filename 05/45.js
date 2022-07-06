/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
 function threeOrders( root ) {
    let preorder = [], inorder = [], postorder = []
    preorderTraversal(preorder, root)
    inorderTraversal(inorder, root)
    postorderTraversal(postorder, root)
    return [preorder, inorder, postorder]
    
    // 递归
    // function preorderTraversal (arr, root) {
    //     if (!root) return
    //     arr.push(root.val)
    //     preorderTraversal(arr, root.left)
    //     preorderTraversal(arr, root.right)
    // }
    
    // function inorderTraversal (arr, root) {
    //     if (!root) return
    //     inorderTraversal(arr, root.left)
    //     arr.push(root.val)
    //     inorderTraversal(arr, root.right)
    // }
    
    // function postorderTraversal (arr, root) {
    //     if (!root) return
    //     postorderTraversal(arr, root.left)
    //     postorderTraversal(arr, root.right)
    //     arr.push(root.val)
    // }

    // 迭代
    function preorderTraversal (arr, root) {
        if (!root) return
        let stack = [root]
        while (stack.length) {
            root = stack.pop()
            arr.push(root.val)
            if (root.right) stack.push(root.right)
            if (root.left) stack.push(root.left)
        }
    }
    
    function inorderTraversal (arr, root) {
        // if (!root) return
        // let stack = [root]
        // while (root.left) {
        //     stack.push(root.left)
        //     root = root.left
        // }
        // while (stack.length) {
        //     root = stack.pop()
        //     arr.push(root.val)
        //     if (root.right) {
        //         stack.push(root.right)
        //         root = root.right
        //         while (root.left) {
        //             stack.push(root.left)
        //             root = root.left
        //         }
        //     }
        // }
        let stack = []
        while (root || stack.length) {
            if (root) {
                stack.push(root)
                root = root.left
            } else {
                root = stack.pop()
                arr.push(root.val)
                root = root.right
            }
        }
    }
    
    function postorderTraversal (arr, root) {
        if (!root) return
        let stack = [root]
        while (stack.length) {
            root = stack.pop()
            arr.unshift(root.val)
            if (root.left) stack.push(root.left)
            if (root.right) stack.push(root.right)
        }
    }
}
module.exports = {
    threeOrders : threeOrders
};