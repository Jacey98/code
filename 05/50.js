
function ListNode(x){
  this.val = x;
  this.next = null;
}


/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
 function reverseKGroup( head ,  k ) {
    if (!head || !head.next || k === 1) return head
    let res = new ListNode(-1), pre = res
    res.next = head
    while (head) {
        let temp = pre
        for (let i = 0; i < k; i++) {
            temp = temp.next
            if(temp == null) return res.next
        }
        let nextList = temp.next
        let pre1 = null, head1 = head, next1
        while (head1 !== nextList) {
            next1 = head1.next
            head1.next = pre1
            pre1 = head1
            head1 = next1
        }
        [temp, head] = [head, temp]
        
        pre.next = head
        temp.next = nextList
        pre = temp
        head = temp.next
    }
    return res.next
}
module.exports = {
    reverseKGroup : reverseKGroup
};