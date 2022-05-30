/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let res = []
    backtracking(0, 0, '')
    return res

    function backtracking (numl, numr, cur) {
        if (numl === n && !numr) {
            res.push(cur)
            return 
        }
        if (numl !== n) {
            backtracking (numl + 1, numr + 1, cur + '(')
        }
        if (numr) {
            backtracking (numl, numr - 1, cur + ')')
        }
    }
};