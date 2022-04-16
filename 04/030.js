var RandomizedSet = function() {
    this.set = new Array()
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false
    this.set.push(val)
    this.map.set(val, this.set.length-1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false
    let index = this.map.get(val)
    this.map.delete(val)
    if (index !== this.set.length-1) {
        [this.set[index], this.set[this.set.length-1]] = [this.set[this.set.length-1], this.set[index]]
        this.map.set(this.set[index], index)
    }
    this.set.pop()
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.set.length
    let random = Math.floor(Math.random()*len)
    return this.set[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */