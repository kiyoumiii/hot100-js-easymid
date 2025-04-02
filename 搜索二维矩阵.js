// 和搜索二维矩阵2不一样的地方在于：矩阵的第二个特点是
// 每行的第一个整数大于前一行的最后一个整数
// 所以这道题目整体是可以视为一个一维有序数组
// 将二维矩阵视为一个一维有序数组，然后使用二分查找

var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;
    while(low <= high) {
        let mid = Math.floor((high - low) / 2) + low;
        let x = matrix[Math.floor(mid/n)][mid % n];
        // 这个x就是几行几列的索引
        if (target > x) {
            low = mid + 1;
        }
        else if (target < x) {
            high = mid - 1;
        }
        else {
            return true;
        }
    }
    return false;
}