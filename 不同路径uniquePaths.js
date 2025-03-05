// 机器人从左上角向右下角移动，每次只能向右或向下移动一步，总共有多少条不同的路径
// 本题是一个组合数学计算题目，直接用公式
var uniquePaths = function (m,n) {
    let ans = 1;
    for(let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
}