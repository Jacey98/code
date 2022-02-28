/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    let num = 0
    for (let i = 0; i < g.length; i++) {
        if (!s[0]) return num
        if (s[0] >= g[i]) num++ 
        else i--
        s.shift()
    }
    return num
};