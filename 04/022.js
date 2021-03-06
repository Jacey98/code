/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head) return null
    let slow = head, fast = head
    do {
        slow = slow.next
        if (!fast.next || !fast.next.next) return null
        fast = fast.next.next
    } while (slow !== fast)
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};