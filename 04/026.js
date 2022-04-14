/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if (!head.next) return 
    let slow = head, fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if (fast.next) slow = slow.next
    fast = reverse(slow.next)
    slow.next = null
    slow = head.next
    while (fast) {
        let next = fast.next
        head.next = fast
        fast.next = slow
        head = slow
        slow = slow.next
        fast = next
    }

    function reverse (head) {
        let pre = null, node = head
        while (node) {
            let next = node.next
            node.next = pre
            pre = node
            node = next
        }
        return pre
    }
};