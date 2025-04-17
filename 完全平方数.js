// 完全平方数
// 对于每个整数 i，我们需要找到所有可能的完全平方数 j*j，使得 i - j*j >= 0。然后，f[i] 可以通过 f[i - j*j] + 1 来更新。我们需要遍历所有可能的 j，找到最小的 f[i - j*j] + 1。
var numSquares = function(n) {
    const f = new Array(n+1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        let minn = Number.MAX_VALUE;
        for (let j = 1; i-j*j >= 0 ; j++) {
            minn = Math.min(minn, f[i-j*j]);
        }
        f[i] = minn + 1;
    }
    return f[n];
};

var numSquares = function(n) {
    const f = new Array(n+1).fill(0);

    for (let i = 1; i <= n; i++) {
        let minn = Number.MAX_VALUE;
        for (let j = 1; i-j*j >= 0; j++) {
            minn = Math.min(minn, f[i-j*j]);
        }
        f[i] = minn + 1;
    }
    return f[n];
}