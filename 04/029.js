/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {
    if (!head) {
        let node = new Node(insertVal)
        node.next = node
        return node
    }
    if (head.next === head) {
        head.next = new Node(insertVal, head.next)
        return head
    }
    let node = head, change
    while (node.val > insertVal || (node.val < insertVal && node.next.val < insertVal)) {
        if (node.val > node.next.val) change = node
        node = node.next
        if (node === head && change) {
            change.next = new Node(insertVal, change.next)
            return head
        } else if (node === head){
            head.next = new Node(insertVal, head.next)
            return head
        }
    }
    node.next = new Node(insertVal, node.next)
    return head
};