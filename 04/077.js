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
 var sortList = function(head) {
    if (!head || !head.next) return head
    let slow = fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let node = sortList(slow.next)
    slow.next = null
    head = sortList(head)
    let pre = new ListNode(0, head)
    let re = pre
    while (head && node) {
        if (head.val > node.val) {
            re.next = node
            node = node.next
        } else {
            re.next = head
            head = head.next
        }
        re = re.next
    }
    re.next = head ? head : node
    return pre.next
};