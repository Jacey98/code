let len = Number(readline())
let arr = readline().trim().split(/\s+/).map(a => Number(a)).sort((a,b)=> a-b)
if (arr[1] < 0) {
    console.log(arr[len-1]*Math.max(arr[0]*arr[1], arr[len-2]*arr[len-3]))
} else {
    console.log(arr[len-1]*arr[len-2]*(arr[len-3]))
}
