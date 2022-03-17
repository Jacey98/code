let arr = [], line
while (line = readline()) {
    let lines = line.split(' ')
    arr.push(...lines)
}
arr = arr.map(i => Number(i))
let first = arr.shift()
let sum = first*(1+first)/2
for (let i of arr) {
    sum -= i
}
console.log(sum)