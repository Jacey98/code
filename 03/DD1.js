let len = Number(readline())
let input = readline().split(' ').map(a => Number(a))
let dp = new Array(len).fill(0)
let res = input[0]
dp[0] = input[0]
for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i-1] + input[i], input[i])
    res = Math.max(res, dp[i])
}
console.log(res)