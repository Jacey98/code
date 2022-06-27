// 迭代
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if (!pHead) return pHead
    let head = null, next
    while (pHead) {
        next = pHead.next
        pHead.next = head
        head = pHead
        pHead = next
    }
    return head
}
module.exports = {
    ReverseList : ReverseList
};

// 递归
// 时间复杂度：O(n)
// 空间复杂度：O(n)
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if (!pHead || !pHead.next) return pHead
    let node = ReverseList(pHead.next)
    pHead.next.next = pHead
    pHead.next = null
    return node
}
module.exports = {
    ReverseList : ReverseList
};