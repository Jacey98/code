/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if (!head.next) return null
    let fast = head, slow = head, time = n
    while (n--) fast = fast.next
    if (fast === null) return head.next
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    if (time === 1) slow.next = null
    else slow.next = slow.next.next
    return head
};