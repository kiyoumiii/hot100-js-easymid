// 动态规划
// 数列的增长速度非常快，整数类型能表示范围有限制，javsscript的number类型能表示的范围有限，2^53 - 1，用一个质数对结果取模，能把结果限制在一个合理的范围内
// 10的9次方+7,它是一个常用的模数
var fib = function (n) {
    let n1 = 0, n2 = 1, sum;
    const mod = 1000000007;
    for (let i = 0; i < n; i++) {
        sum = (n1 + n2) % mod;
        n1 = n2;
        n2 = sum;
    }
    return n1; // 最后return的是n1不是sum，这点要切记，写错就错了
}

const n = 100;
let res = fib(100);
console.log(res);