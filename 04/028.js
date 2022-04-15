/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function(head) {
    function dfs (head) {
        let node = new Node(0, null, head.child)
        while (node.next) {
            node = node.next
            if (node.child) {
                let next = node.next
                let end = dfs(node)
                node.next = node.child
                node.next.prev = node
                node.child = null
                end.next = next
                if (next) next.prev = end
            }
        }
        return node
    }

    let node = new Node(0, null, null, head)
    dfs(node)
    return head
};