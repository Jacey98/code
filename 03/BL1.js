// 超时
// let num = Number(readline())
// let res = '', len = Infinity
// function dfs(cur, str) {
//     if (cur >= num) {
//         if (cur === num && str.length < len) {
//             res = str
//         }
//         return
//     }
//     for (let i = 2; i < 4; i++) {
//         dfs(2*cur + i - 1, str + i)
//     }
// }
// dfs(0, '')
// console.log(res)

let num = Number(readline())
let str = ''
while (num) {
    if (num % 2) {
        str = '2'.concat(str)
        num = (num-1)/2
    } else {
        str = '3'.concat(str)
        num = (num-2)/2
    }
}
console.log(str)