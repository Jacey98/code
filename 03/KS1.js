let len = Number(readline())
let arr = readline().trim().split(/\s+/).map(a => Number(a))
let max = 0, isum = arr[0], jsum = arr[len-1]
for (let i = 1, j = len-2; i <= j+1;) {
    if (isum > jsum) {
        jsum += arr[j]
        j--
    } else if (isum < jsum) {
        isum += arr[i]
        i++
    } else {
        max = Math.max(max, isum)
        isum += arr[i]
        jsum += arr[j]
        i++
        j--
    }
}
console.log(max)