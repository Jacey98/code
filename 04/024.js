/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head || !head.next) return head
    let node1 = null, node2 = head, node3 = node2.next
    while (node3) {
        node2.next = node1
        node1 = node2
        node2 = node3
        node3 = node3.next
    }
    node2.next = node1
    return node2
};

var reverseList = function(head) {
    if (!head || !head.next) return head
    let node = reverseList(head.next)
    head.next.next = head
    head.next = null
    return node
};