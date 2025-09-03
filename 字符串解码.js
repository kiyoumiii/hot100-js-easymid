// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"


var decodeString = function(s) {
    let stack = [];
    let res = '';
    let multi = 0;

    for (let c of s) {
        if (c === '[') { // 要进一个新的嵌套层级
            stack.push([res, multi]); // 把当前的res和multi压入栈
            res = '';
            multi = 0;
            // 重置
        } else if (c === ']') { // 当前嵌套层级结束
            let [lastRes, curMulti] = stack.pop(); // 弹栈
            res = lastRes + res.repeat(curMulti); // 计算lastRes + res.repeat(curMulti)
        } else if (c >= '0' && c <= '9') { // c是数字
            multi = multi * 10 + parseInt(c); // multi被更新成数字了
        } else { // 字母
            res += c; //直接加入res
        }
    }
    return res;
}