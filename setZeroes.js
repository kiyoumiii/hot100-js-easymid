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