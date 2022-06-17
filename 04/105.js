/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max = 0
    let len1 = grid.length, len2 = grid[0].length
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (grid[i][j]) max = Math.max(max, dfs(i, j, 0))
        }
    }
    return max

    function dfs (i, j, area) {
        grid[i][j] = 0
        if(i + 1 < len1 && grid[i+1][j]) area = dfs(i + 1, j, area)
        if(j + 1 < len2 && grid[i][j+1]) area = dfs(i, j + 1, area)
        if(i - 1 >= 0 && grid[i-1][j]) area = dfs(i - 1, j, area)
        if(j - 1 >= 0 && grid[i][j-1]) area = dfs(i, j - 1, area)
        return area + 1
    }
};