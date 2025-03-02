// 图像旋转90度
// 思路就是根据旋转规律：对于一个n*n的矩阵，顺时针旋转90度后，矩阵的第i行就会变成新矩阵的第n-i-1列
// 原地翻转；先将第i行和第n-i-1行交换，再沿主对角线翻转：matrix[i][j]和matrix[j][i]交换
var rotate = function(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < Math.floor(n/2); i++) {
        for(let j = 0; j < n; j++) {
            [matrix[i][j],matrix[n-i-1][j]] = [matrix[n-i-1][j], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
}