/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    let arr = String(n).split('').map(i => +i)
    let flag = arr.length
    for (let i = flag - 2; i >= 0; i--) {
        if (arr[i] > arr[i+1]) {
            arr[i]--
            flag = i+1
        }
    }
    for (let i = flag; i < arr.length; i++) {
        arr[i] = 9
    }
    return Number(arr.join(''))
};