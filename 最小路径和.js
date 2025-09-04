// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // 直接在原网格上更新最小路径和
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue; // 起点保持不变
            } else if (i === 0) {
                // 第一行只能从左向右
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                // 第一列只能从上向下
                grid[i][j] += grid[i - 1][j];
            } else {
                // 其他位置取上方和左方的较小值
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    
    return grid[m - 1][n - 1];
};