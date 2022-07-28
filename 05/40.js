
function ListNode(x){
  this.val = x;
  this.next = null;
}


/**
 * 
 * @param head1 ListNode类 
 * @param head2 ListNode类 
 * @return ListNode类
 */
 function addInList( head1 ,  head2 ) {
    let stack1 = [], stack2 = [], bit = 0, cur = null
    while (head1) {
        stack1.push(head1)
        head1 = head1.next
    }
    while (head2) {
        stack2.push(head2)
        head2 = head2.next
    }
    while (stack1.length || stack2.length) {
        let node1 = stack1.length ? stack1.pop().val : 0
        let node2 = stack2.length ? stack2.pop().val : 0
        let sum = node1 + node2 + bit
        let node = new ListNode(sum%10)
        node.next = cur
        cur = node
        bit = sum > 9 ? 1 : 0
    }
    if (bit) {
        let node = new ListNode(1)
        node.next = cur
        cur = node
    }
    return cur
}
module.exports = {
    addInList : addInList
};