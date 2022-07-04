/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort(arr) {
    // 直接插入排序 稳定
    // 时间复杂度：O(n2)
    // 空间复杂度：O(1)
    // for (let i = 1; i < arr.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (arr[i] <= arr[j]) {
    //             let val = arr[i]
    //             arr.splice(i, 1)
    //             arr.splice(j, 0, val)
    //             break
    //         }
    //     }
    // }
    // return arr

    // 二分插入排序 稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(1)
    // for (let i = 1; i < arr.length; i++) {
    //     let j = BinarySearch(arr, 0, i - 1, arr[i])
    //     let val = arr[i]
    //     arr.splice(i, 1)
    //     arr.splice(j, 0, val)
    // }
    // return arr

    // function BinarySearch(arr, left, right, target) {
    //     let mid, r = right
    //     while (left <= right && right >= 0 && left <= r) {
    //         mid = Math.floor((left + right) / 2)
    //         if (target < arr[mid]) {
    //             right = mid - 1
    //         } else {
    //             left = mid + 1
    //         }
    //     }
    //     return left
    // }

    // 希尔排序 不稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(1)
    // for (let step = Math.floor(arr.length / 2); step > 0; step = Math.floor(step / 2)) {
    //     for (let i = step, j; i < arr.length; i++) {
    //         let temp = arr[i]
    //         for (j = i - step; j >= 0 && arr[j] > temp; j -= step) {
    //             arr[j + step] = arr[j]
    //         }
    //         arr[j + step] = temp
    //     }
    // }
    // return arr

    // 冒泡排序 稳定
    // 时间复杂度：O(n2)
    // 空间复杂度：O(1)
    // for (let i = arr.length; i > 0; i--) {
    //     for (let j = 0; j < i - 1; j++) {
    //         if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    //     }
    // }
    // return arr

    // 快速排序 不稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(logn)
    // FastSort(arr, 0, arr.length - 1)
    // return arr

    // function FastSort(arr, left, right) {
    //     if (left >= right) return
    //     let i = left, j = right
    //     let cur = arr[left]
    //     while (left < right) {
    //         while (left < right && arr[right] >= cur) right--
    //         if (left < right) arr[left++] = arr[right]
    //         while (left < right && arr[left] < cur) left++
    //         if (left < right) arr[right--] = arr[left]
    //     }
    //     arr[left] = cur
    //     FastSort(arr, i, left - 1)
    //     FastSort(arr, left + 1, j)
    // }

    // 直接选择排序 不稳定
    // 时间复杂度：O(n2)
    // 空间复杂度：O(1)
    // for (let i = 0; i < arr.length - 1; i++) {
    //     let min = i
    //     for (let j = i + 1; j < arr.length; j++) {
    //         min = arr[j] < arr[min] ? j : min
    //     }
    //     [arr[i], arr[min]] = [arr[min], arr[i]]
    // }
    // return arr

    // 堆排序 不稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(n) / O(1)
    // function Heap() {
    //     this.queue = []
    // }
    // Heap.prototype.push = function(entry) {
    //     this.queue.push(entry)
    //     let index = this.queue.length - 1
    //     let parent = Math.floor((index - 1) / 2)
    //     while (parent >= 0 && this.queue[parent] > this.queue[index]) {
    //         [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]]
    //         index = parent
    //         parent = Math.floor((index - 1) / 2)
    //     }
    // }
    // Heap.prototype.pop = function() {
    //     if (this.queue.length === 1) return this.queue.pop()
    //     let res = this.queue[0]
    //     this.queue[0] = this.queue.pop()
    //     let index = 0, left = 1, child
    //     if (this.queue.length < 3) child = left
    //     else child = this.queue[1] > this.queue[2] ? 2 : 1
    //     while (this.queue[child] && this.queue[index] > this.queue[child]) {
    //         [this.queue[child], this.queue[index]] = [this.queue[index], this.queue[child]]
    //         index = child
    //         left = 2 * index + 1
    //         if (this.queue.length < left + 2) child = left
    //         else child = this.queue[left] > this.queue[left + 1] ? left + 1 : left
    //     }
    //     return res
    // }
    // Heap.prototype.size = function() {
    //     return this.queue.length
    // }
    
    // let heap = new Heap(), res = []
    // for (let i of arr) heap.push(i)
    // while (heap.size()) res.push(heap.pop())
    // return res

    // 归并排序 稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(n)
    // if (arr.length <= 1) return arr
    // let middle = Math.floor(arr.length/2)
    // let left = MySort(arr.slice(0, middle)), right = MySort(arr.slice(middle))
    // let i, j
    // for (i = 0, j = 0; i < left.length && j < right.length; ) {
    //     arr[i + j] = left[i] < right[j] ? left[i++] : right[j++]
    // }
    // return arr.slice(0, i + j).concat(j === right.length ? left.slice(i) : right.slice(j))

    // 计数排序
    // 时间复杂度：O(n+k)
    // 空间复杂度：O(k)
    // let count = [], res = []
    // for (let i of arr) count[i] = count[i] ? count[i] + 1 : 1
    // for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    //     let c = count[i]
    //     if (c) {
    //         res.push(i)
    //         c--
    //     }
    // } 
    // return res

    // 桶排序 稳定
    // 时间复杂度：O(n+k)
    // 空间复杂度：O(k)
    // let max = Math.max(...arr), min = Math.min(...arr), len = arr.length, size = Math.floor((max - min)/len) + 1
    // let bucket = new Array(size).fill(0).map(() => new Array())
    // for (let i of arr) {
    //     bucket[Math.floor((i - min) / len)].push(i)
    // }
    // let res = []
    // for (let item of bucket) {
    //     for (let i = 1; i < item.length; i++) {
    //         for (let j = 0; j < i; j++) {
    //             if (item[i] <= item[j]) {
    //                 let val = item[i]
    //                 item.splice(i, 1)
    //                 item.splice(j, 0, val)
    //                 break
    //             }
    //         }
    //     }
    //     res.push(...item)
    // }
    // return res

    // 基数排序 稳定
    // 时间复杂度：O(d(n+k))
    // 空间复杂度：O(n+k)

}
module.exports = {
    MySort: MySort
};