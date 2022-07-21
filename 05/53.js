/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  * 
  * @param head ListNode类 
  * @param n int整型 
  * @return ListNode类
  */
 function removeNthFromEnd( head ,  n ) {
    if (!head) return head
    let fast = head, slow = head
    while (n--) fast = fast.next
    if (!fast) return head.next
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}
module.exports = {
    removeNthFromEnd : removeNthFromEnd
};