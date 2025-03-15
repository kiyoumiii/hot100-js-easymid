// 顺时针螺旋矩阵

var spiralOrder = function (matrix) {
    if (!matrix.length) return [];

    const res = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0, top = 0, right = cols - 1, bottom = rows - 1; 

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }

        for (let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }

        if(top < bottom && left < right) { // 这行保证不是单列或者单行
            for (let i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
    
            for (let i = bottom - 1; i > top; i--) {
                res.push(matrix[i][left]);
            }
        }

        top++;
        bottom--;
        left++;
        right--;
    }

    return res;
    
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
let res = spiralOrder(matrix);
console.log(res);


// 二刷

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, bottom = m-1, left = 0, right = n-1;
    let res = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }

        for (let i = top+1; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }

        if(top < bottom && left < right) {
            for (let i = right-1; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            
            for (let i = bottom-1; i >= top+1; i--) {
                res.push(matrix[i][left]);
            }
        }

        // for (let i = right-1; i >= left; i--) {
        //     res.push(matrix[bottom][i]);
        // }
        
        // for (let i = bottom-1; i >= top+1; i--) {
        //     res.push(matrix[i][left]);
        // }

    
        left++;
        right--;
        top++;
        bottom--;
    }

    return res;
};

