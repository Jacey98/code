function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead) {
    if (!pHead) return null
    let head = new ListNode(-1) 
    head.next = pHead
    let slow = head, fast = head
    while (slow !== fast || slow === head) {
        if (!fast || !fast.next) return null
        fast = fast.next.next
        slow = slow.next
    }
    let node = head
    while (node !== slow) {
        node = node.next
        slow = slow.next
    }
    return node
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};