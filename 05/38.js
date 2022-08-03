/**
 * 
 * @param matrix int整型二维数组 
 * @return int整型一维数组
 */
 function spiralOrder( matrix ) {
    if (!matrix.length) return []
    let res = [], r1 = 0, r2 = matrix.length-1, c1 = 0, c2 = matrix[0].length-1
    while (r1 < r2 && c1 < c2) {
        for (let j = c1; j < c2; j++) res.push(matrix[r1][j])
        for (let i = r1; i < r2; i++) res.push(matrix[i][c2])
        for (let j = c2; j > c1; j--) res.push(matrix[r2][j])
        for (let i = r2; i > r1; i--) res.push(matrix[i][c1])
        r1++
        r2--
        c1++
        c2--
    }
    if (r1 === r2 && c1 === c2) res.push(matrix[r1][r2])
    else if (r1 === r2) for (let j = c1; j <= c2; j++) res.push(matrix[r1][j])
    else if (c1 === c2) for (let i = r1; i <= r2; i++) res.push(matrix[i][c2])
    return res
}
module.exports = {
    spiralOrder : spiralOrder
};