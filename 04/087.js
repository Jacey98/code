/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    let len = s.length
    if (len < 4 || len > 12) return []
    let res = [], cur = []
    backtracking(0)
    return res

    function backtracking (start) {
        if (start === len && cur.length === 4) {
            res.push(cur.join('.'))
            return 
        }
        if (start === len || cur.length === 4) return
        let i = start
        for (let j = 1; j < 4; j++) {
            if (isIp(s.slice(i, i + j))) {
                cur.push(s.slice(i, i + j))
                backtracking(i + j)
                cur.pop()
            }
        }
    }
    function isIp (s) {
        if (s.length > 1 && s[0] === '0') return false
        return Number(s) < 256
    }
};