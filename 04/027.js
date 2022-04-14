/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (!head.next) return true
    let pre = new ListNode(0, head)
    let slow = fast = pre
    let stack = new Array()
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        stack.push(slow.val)
    }
    if (fast.next) slow = slow.next
    while (slow.next) {
        slow = slow.next
        let num = stack.pop()
        if (slow.val !== num) return false 
    }
    return true
};