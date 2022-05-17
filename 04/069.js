/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1, mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid
        else if (arr[mid] < arr[mid-1]) r = mid - 1
        else l = mid + 1
    }
};