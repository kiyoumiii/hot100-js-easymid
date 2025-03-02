// 已知二维矩阵从左到右升序，从上到下升序，高效搜索target
// 从右上角开始搜索，如果target比当前元素小，就左移1列；
// 如果target比当前元素大，就下移1行。


var searchMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let x =0, y = n-1; //从右上角开始搜索

    while(x < m && y >= 0) {
        if (target < matrix[x][y]) {
            y--;
        }
        else if (target > matrix[x][y]) {
            x++;
        }
        else if (target === matrix[x][y]) {
            return true;
        }
    }

    return false;
}