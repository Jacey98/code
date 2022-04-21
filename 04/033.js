/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let arrStr = new Array()
    let mapRes = new Map()
    let res = new Array()
    for (let i = 0; i < strs.length; i++) {
        let arr = new Array(26).fill(0)
        for (let j of strs[i]) {
            arr[j.charCodeAt() - 'a'.charCodeAt()]++
        }
        arrStr.push(arr.toString())
        if (!mapRes.has(arrStr[i])) {
            mapRes.set(arrStr[i], res.length)
            res.push([strs[i]])
        } else {
            res[mapRes.get(arrStr[i])].push(strs[i])
        }
    }
    return res
};