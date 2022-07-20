
function ListNode(x){
  this.val = x;
  this.next = null;
}


/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
 function hasCycle( head ) {
    if (!head) return false
    let phead = new ListNode(-1) 
    phead.next = head
    let slow = phead, fast = phead
    while (slow !== fast || slow === phead) {
        if (!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
module.exports = {
    hasCycle : hasCycle
};