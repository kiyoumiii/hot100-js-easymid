// 矩阵置0
// 先遍历一遍标记，再遍历一遍置0
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let row = new Array(m).fill(false);
    let col = new Array(n).fill(false);

    // 遍历矩阵并标记
    for (let i = 0; i < m; i++) {
        for (let j = 0; j< n; j++) {
            if(matrix[i][j] === 0) {
                row[i] = row[j] = true;
            }
        }
    }
    // 遍历矩阵并把标记的置0
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || row[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    
}

const matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);

// 二刷

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row_flag = new Array(m).fill(false);
    let col_flag = new Array(m).fill(false);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(matrix[i][j]===0) {
                row_flag[i] = true;
                col_flag[j] = true; 
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row_flag[i] || col_flag[j] === true) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};