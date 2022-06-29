/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 将给定数组排序
 * @param arr int整型一维数组 待排序的数组
 * @return int整型一维数组
 */
function MySort( arr ) {
    // 直接插入排序 稳定
    // 时间复杂度：O(n2)
    // 空间复杂度：O(1)
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] <= arr[j]){
                let val = arr[i]
                arr.splice(i, 1)
                arr.splice(j, 0, val)
                break
            }
        }
    }
    return arr

    // 二分插入排序 稳定
    // 时间复杂度：O(nlogn)
    // 空间复杂度：O(1)
    for (let i = 1; i < arr.length; i++) {
        let j = BinarySearch (arr, 0, i-1, arr[i])
        let val = arr[i]
        arr.splice(i, 1)
        arr.splice(j, 0, val)
    }
    return arr
    
    function BinarySearch (arr, left, right, target) {
        let mid, r = right
        while (left <= right && right >= 0 && left <= r) {
            mid = Math.floor((left + right) / 2)
            if (target < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }

    // 希尔排序
    // 时间复杂度：O()
    // 空间复杂度：O()
    
}
module.exports = {
    MySort : MySort
};



// 冒泡排序
// 快速排序
// 直接选择排序
// 堆排序
// 归并排序
// 计数排序
// 桶排序
// 基数排序