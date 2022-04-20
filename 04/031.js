/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.num = 0
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        return value
    } else return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if (!this.map.has(key)) {
    //     if (this.num === this.capacity) {
    //         this.map.delete(this.map.keys().next().value)
    //         this.num--
    //     }
    //     this.map.set(key, value)
    //     this.num++
    //     return
    // }
    // this.map.delete(key)
    // this.map.set(key, value)

    if (this.map.has(key)) {
        this.map.delete(key)
        this.num--
    } else if (this.num === this.capacity) {
        this.map.delete(this.map.keys().next().value)
        this.num--
    }
    this.map.set(key, value)
    this.num++
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */