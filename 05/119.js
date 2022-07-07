function GetLeastNumbers_Solution(input, k)
{
    function Heap() {
        this.queue = []
    }
    Heap.prototype.push = function(entry) {
        this.queue.push(entry)
        let index = this.queue.length - 1
        let parent = Math.floor((index - 1) / 2)
        while (parent >= 0 && this.queue[parent] < this.queue[index]) {
            [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    Heap.prototype.pop = function() {
        if (this.queue.length === 1) return this.queue.pop()
        let res = this.queue[0]
        this.queue[0] = this.queue.pop()
        let index = 0, left = 1, child
        if (this.queue.length < 3) child = left
        else child = this.queue[1] < this.queue[2] ? 2 : 1
        while (child < this.queue.length && this.queue[index] < this.queue[child]) {
            [this.queue[child], this.queue[index]] = [this.queue[index], this.queue[child]]
            index = child
            left = 2 * index + 1
            if (this.queue.length < left + 2) child = left
            else child = this.queue[left] < this.queue[left + 1] ? left + 1 : left
        }
        return res
    }
    Heap.prototype.size = function() {
        return this.queue.length
    }
    
    let heap = new Heap(), len = input.length, len1 = len, c = len - k, res = []
    while(len1--) heap.push(input.pop())
    while(c--) heap.pop()
    while(k--) res.push(heap.pop())
    return res
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};