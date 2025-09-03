// 对每一天返回下一个温度更高的天气在几天后

// 单调栈，栈中保存的是温度的索引，这是为了方便计算天数差
// 遍历，当找到更高温度时，计算天数差 i - prevIndex

var dailyTemperatures = function(temperatures) {
    const stack = [];
    const n = temperatures.length;
    const ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const currentTemp = temperatures[i];

        while (stack.length > 0 && currentTemp > temperatures[stack[stack.length-1]]) { //新温度比栈顶那天的温度高
            const prevIndex = stack.pop(); // 弹出栈顶索引，要拿到它计算天数差了
            ans[prevIndex] = i - prevIndex; // 计算天数差
        }

        stack.push(i); // 将当前索引入栈
    }

    return ans;
}