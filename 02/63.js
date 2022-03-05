/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let num = 1
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) num = 0
        obstacleGrid[i][0] = num
    }
    num = 1
    for (let i = 1; i < n; i++) {
        if (obstacleGrid[0][i] === 1) num = 0
        obstacleGrid[0][i] = num
    }
    // console.log(obstacleGrid)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0
            else obstacleGrid[i][j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j]
        }
    }
    // console.log(obstacleGrid)
    return obstacleGrid[m-1][n-1]
};
console.log(uniquePathsWithObstacles([[1,0]]))