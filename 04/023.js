/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let nodeA = headA, nodeB = headB
    while (nodeA && nodeB) {
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    if (!nodeA) return find(nodeB, headA, headB)
    else return find(nodeA, headB, headA)

    function find (node, headA, headB) {
        while (node) {
            node = node.next
            headB = headB.next
        }
        while (headA !== headB) {
            headA = headA.next
            headB = headB.next
        }
        return headA
    }
};