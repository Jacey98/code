/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    dfs()
    function dfs() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') continue
                for (let k = 1; k <= 9; k++) {
                    board[i][j] = String(k)
                    if (valid(i, j)) {
                        if (dfs()) return true
                    }
                    board[i][j] = '.'
                }
                return false
            }
        }
        return true
    }
    function valid(i, j) {
    for (let m = 0; m < 9; m++) {
        if (m !== i && board[m][j] === board[i][j]) return false
    }
    for (let n = 0; n < 9; n++) {
        if (n !== j && board[i][n] === board[i][j]) return false
    }
    for (let m = Math.floor(i/3)*3; m < (Math.floor(i/3)+1)*3; m++) {
        for (let n = Math.floor(j/3)*3; n < (Math.floor(j/3)+1)*3; n++) {
            if (m !== i && n !== j && board[m][n] === board[i][j]) return false
        }
    }
    return true
}
};

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))