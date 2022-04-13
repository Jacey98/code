/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head1 = new ListNode(0, reverse(l1))
    let head = head1.next
    let head2 = new ListNode(0, reverse(l2))
    let sign = 0
    while (head1.next && head2.next) {
        head1 = head1.next
        head2 = head2.next
        head1.val += head2.val + sign
        sign = Math.floor(head1.val / 10)
        head1.val %= 10
    }
    if (head2.next) {
        head1.next = head2.next
    }
    while (head1.next) {
        head1 = head1.next
        head1.val += sign
        sign = Math.floor(head1.val / 10)
        head1.val %= 10
    }
    if (sign) {
        head1.next = new ListNode(1, null)
    }
    return reverse(head)

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