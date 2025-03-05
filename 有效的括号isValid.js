// 有效的括号是典型的使用栈数据结构的题目
// 遍历字符串，遇到左括号，将其对应的右括号压入栈；
// 遇到右括号，就检查栈顶元素是否与该右括号匹配，如果匹配，弹出栈顶元素。
// 代码的逻辑是不是左括号就看栈是否已空：栈为空或者stack栈顶元素和x不匹配那么就返回false
// 最后如果栈为空，说明所有括号匹配成功

var isValid = function (s) {
    const stack = [];//使用数组模拟栈
    for (let i = 0; i < s.length; i++) {
         const char = s[i];
         if (char === '(') {
            stack.push(')');
         }
         else if (char === '[') {
            stack.push(']');
         } 
         else if (char === '{') {
            stack.push('}');
         }
         else if (!stack || stack[stack.length-1]!==char) {
            return false; //是右括号，不匹配
         }
         else {
            stack.pop(); // 是右括号，匹配
         }
        
    }
    return !stack.length;
}