/**
 * 
 * @param a int整型一维数组 
 * @param n int整型 
 * @param K int整型 
 * @return int整型
 */
 function findKth( a ,  n ,  K ) {
    let idx, left = 0, right = n-1
    while (1) {
        idx = fastSort(a, left, right)
        if (idx === K - 1) return a[idx]
        if (idx < K - 1) left = idx + 1
        else right = idx - 1
    }
    function fastSort(arr, left, right) {
        let cur = arr[left]
        while (left < right) {
            while (left < right && arr[right] <= cur) right--
            if (left < right) arr[left++] = arr[right]
            while (left < right && arr[left] > cur) left++
            if (left < right) arr[right--] = arr[left]
        }
        arr[left] = cur
        return left
    }
}
module.exports = {
    findKth : findKth
};