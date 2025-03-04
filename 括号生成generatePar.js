// 递归回溯法：open表示当前已经使用的左括号数量，i是当前正在填充的位置
// 左括号的数量不能超过n，右括号的数量不能超过左括号的数量
// open < n则放置左括号并递归，i-open < open则放置右括号并递归
// 当i达到2n时，将当前组合加入结果列表

var generateParenthesis = function (n) {
    const m = n * 2; //总数
    const path = new Array(m); //当前组合，现在初始化后，每个元素会时undefined
    const res = [];

    const dfs = (open, i) => { 
        if(i === m) {
            res.push(path.join('')); // path是数组，结果是字符串，用join('')来处理
            return ; // 返回到上一层递归
        }
        if (open < n) { // 可以放左括号
            path[i] = '('; // 注意不是path.push('('),因为path在初始化的时候已经有长度，再这样push进去会越变越长
            dfs(open + 1, i+1); // 递归放置左括号
        }
        if (i - open < open) { // 可以放右括号
            path[i] = ')'; 
            dfs(open, i+1); // 递归放置右括号
        }
    }

    dfs(0, 0);
    return res;

}

const n = 3;
console.log(generateParenthesis(n));