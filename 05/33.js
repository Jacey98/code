function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // 迭代
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)
    // let res = new ListNode(-1), head = res
    // while (pHead1 && pHead2){
    //     if (pHead1.val < pHead2.val) {
    //         head.next = pHead1
    //         pHead1 = pHead1.next
    //         head = head.next
    //     } else {
    //         head.next = pHead2
    //         pHead2 = pHead2.next
    //         head = head.next
    //     }
    // }
    // head.next = pHead1 ? pHead1 : pHead2
    // return res.next

    // 递归
    // 时间复杂度：O(n)
    // 空间复杂度：O(n)
    if (!pHead1 || !pHead2) return pHead1 ? pHead1 : pHead2
    let head
    if (pHead1.val < pHead2.val) {
        head = pHead1
        head.next = Merge(pHead1.next, pHead2)
    } else {
        head = pHead2
        head.next = Merge(pHead1, pHead2.next)
    }
    return head
}
module.exports = {
    Merge : Merge
};





