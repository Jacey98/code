let num = Number(readline())
while (num--) {
    let len = Number(readline())
    let input = readline().trim().split(/\s+/).map(a => Number(a))
    let arr = new Array(len-1).fill(0).map(() => new Array(2))
    for (let i = 0; i < len-1; i++) {
        arr[i][0] = Math.min(input[i+1], input[i])
        arr[i][1] = Math.max(input[i+1], input[i])
    }
    arr.sort((a, b) => a[0]- b[0])
    let res = 'n'
    for (let i = 0; i < len-2; i++) {
        for (let j = i+1; j < len-1 && arr[j][0] < arr[i][1]; j++) {
            if (arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) {
                res = 'y'
                break
            }
        }
        if (res === 'y') break
    }
    console.log(res)
}