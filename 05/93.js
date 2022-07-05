// Map

// /**
//  * @param {number} capacity
//  */
//  var Solution = function(capacity) {
//     this.capacity = capacity
//     this.map = new Map()
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// Solution.prototype.get = function(key) {
//     if (this.map.has(key)) {
//         let value = this.map.get(key)
//         this.map.delete(key)
//         this.map.set(key, value)
//         return value
//     }
//     return -1
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// Solution.prototype.set = function(key, value) {
//     if (this.map.has(key)) {
//         this.map.delete(key)
//         this.map.set(key, value)
//         return
//     }
//     if (!this.capacity) {
//         this.map.delete(this.map.keys().next().value)
//         this.capacity++
//     }
//     this.map.set(key, value)
//     this.capacity--
// };

// module.exports = {
//     Solution : Solution
// };

// /**
//  * Your Solution object will be instantiated and called as such:
//  * var solution = new Solution(capacity)
//  * var output = solution.get(key)
//  * solution.set(key,value)
//  */


// Map + 双向链表

function ListNode (key, val, pre, next) {
    this.key = (key===undefined ? -1 : key)
    this.val = (val===undefined ? -1 : val)
    this.pre = (pre===undefined ? null : pre)
    this.next = (next===undefined ? null : next)
} 

/**
 * @param {number} capacity
 */
var Solution = function(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.pre = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
Solution.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        node.pre.next = node.next
        node.next.pre = node.pre
        node.next = this.tail
        node.pre = this.tail.pre
        node.next.pre = node
        node.pre.next = node
        return node.val
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
Solution.prototype.set = function(key, value) {
    if (this.map.has(key)) {
        this.get(key)
        this.map.get(key).val = value
        return
    }
    if (!this.capacity) {
        let node = this.head.next
        this.head.next = node.next
        node.next.pre = this.head
        this.map.delete(node.key)
        node = null
        this.capacity++
    }
    let node = new ListNode(key, value)
    node.next = this.tail
    node.pre = this.tail.pre
    node.next.pre = node
    node.pre.next = node
    this.map.set(key, node)
    this.capacity--
};

module.exports = {
    Solution : Solution
};

/**
 * Your Solution object will be instantiated and called as such:
 * var solution = new Solution(capacity)
 * var output = solution.get(key)
 * solution.set(key,value)
 */