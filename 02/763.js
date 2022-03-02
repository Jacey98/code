/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    let res = [], max = -1, pre = -1
    for (let i = 0; i < s.length; i++) {
        let n = s.lastIndexOf(s[i])
        if (n > max) max = n
        if (i === max) {
            res.push(max-pre)
            pre = max
            max = i
        }
    }
    return res
};