/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // 每一行初始化为 1
        for (let j = 1; j < i; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j]; // 计算中间值
        }
        res.push(row); // 将当前行加入结果
    }
    return res;
};