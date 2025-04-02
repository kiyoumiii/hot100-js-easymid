// 完全平方数
/**
 * @param {number} n
 * @return {number}
 */
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