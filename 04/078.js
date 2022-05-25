/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (lists.length === 1) return lists[0]
    let head = null
    while (lists.length > 1) {
        head = merge(lists.shift(), lists.shift())
        lists.push(head)
    }
    return head

    function merge (head1, head2) {
        let pre = new ListNode(0)
        let re = pre
        while (head1 && head2) {
            if (head1.val > head2.val) {
                re.next = head2
                head2 = head2.next
            } else {
                re.next = head1
                head1 = head1.next
            }
            re = re.next
        }
        re.next = head1 ? head1 : head2
        return pre.next
    }
};