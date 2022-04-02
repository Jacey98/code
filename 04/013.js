/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    this.matrix = matrix
    this.arr = new Array(this.matrix.length + 1).fill(0).map(() => new Array(this.matrix[0].length + 1).fill(0))
    for (let i = 1; i <= this.matrix.length; i++) {
        for (let j = 1; j <= this.matrix[0].length; j++) {
            this.arr[i][j] = this.matrix[i-1][j-1] + this.arr[i-1][j] + this.arr[i][j-1] - this.arr[i-1][j-1]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.arr[row2+1][col2+1] - this.arr[row1][col2+1] - this.arr[row2+1][col1] + this.arr[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */