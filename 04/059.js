/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k
    this.nums = nums.sort((a, b) => b - a)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.unshift(val)
    let i = 0, len = this.nums.length
    while (i < len && this.nums[i] < this.nums[i + 1]) {
        [this.nums[i], this.nums[i + 1]] = [this.nums[i + 1], this.nums[i]]
        i++
    }
    return this.nums[this.k-1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */