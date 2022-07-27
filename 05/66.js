/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    let node1 = pHead1, node2 = pHead2
    while (node1 !== node2) {
        node1 = !node1 ? pHead2 : node1.next
        node2 = !node2 ? pHead1 : node2.next
    }
    return node1
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};