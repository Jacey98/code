/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
 function threeSum( num ) {
    let len = num.length
    if (len < 3) return []
    num.sort((a, b) => a-b)
    let map = new Map()
    let res = []
    for (let i = 0; i < len; i++) {
        map.set(num[i], i)
    }
    for (let i = 0; i < len-2; i++) {
        if (i && num[i] === num[i-1]) continue
        for (let j = i+1; j < len-1; j++) {
            if (j !== i+1 && num[j] === num[j-1]) continue
            if (map.has(-num[i]-num[j])) {
                let k = map.get(-num[i]-num[j])
                if (k > j) res.push([num[i], num[j], num[k]])
            }
        }
    }
    return res
}
module.exports = {
    threeSum : threeSum
};