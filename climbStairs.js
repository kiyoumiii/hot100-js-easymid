// 每次可以爬1或2个台阶，爬到n阶有几种方法
// 爬到第n阶的方法数=爬到第n-1阶的方法数+爬到第n-2阶的方法数
// p存储f(n-2)，q存储f(n-1)，r存储f(n)
// 每次循环体内，把q赋给p,把r赋给q，r=p+q

var climbStrais = function(n) {
    let p = 0, q = 0, r = 1;
    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}