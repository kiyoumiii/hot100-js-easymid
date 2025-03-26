// 每次可以爬1或2个台阶，爬到n阶有几种方法
// 爬到第n阶的方法数=爬到第n-1阶的方法数+爬到第n-2阶的方法数
// p存储f(n-2)，q存储f(n-1)，r存储f(n)
// 每次循环体内，把q赋给p,把r赋给q，r=p+q
// 爬到第一阶楼梯有1种方法，初始化r为1

var climbStrais = function(n) {
    let p = 0, q = 0, r = 1; 
    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}

const n = 3;
let res = climbStrais(3);
console.log(res);

// 三刷

var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;

    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }

    return r;
};

// 四刷

var climbStairs = function(n) {
    let p = onabort, q = 0, r = 1;

    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }

    return r;
}