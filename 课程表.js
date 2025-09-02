// 问题转化为检测图中是否存在环​​
// 如果图中存在环，则无法完成所有课程（因为存在循环依赖）。
// 如果图中无环，则存在拓扑排序，可以完成所有课程。
// 三色标级：0-未访问，1-访问中，2-已访问完成

var canFinish = function(numCourses, prerequisites) {
    const g = Array.from({ length: numCourses }, () => []); 
    // Array.from​​：
    //用于创建数组，第二个参数是映射函数（这里返回空数组 () => []）。
    for (const [a, b] of prerequisites) {
        g[b].push(a); // g[b] 表示从 b 出发的所有有向边（b → ...）。因为对[a,b]来说b是a的先修课程
    }

    const colors = Array(numCourses).fill(0);  // Array(numCourses) 是直接调用 Array 构造函数，省略了 new。这是 JavaScript 的语法糖，引擎内部会自动补全为 new Array(numCourses)。
    function dfs(x) {
        colors[x] = 1; // x 正在访问中
        for (const y of g[x]) { // 遍历所有依赖x的课程y
            if (colors[y] === 1 || colors[y] === 0 && dfs(y)) {
                // 如果y正在访问，或者y未被访问但dfs(y)是true
                return true; // 找到了环
            }
        }
        colors[x] = 2; // x 完全访问完毕
        return false; // 没有找到环
    }

    for (let i = 0; i < numCourses; i++) {
        if (colors[i] === 0 && dfs(i)) {
            return false; // 有环
        }
    }
    return true; // 没有环
};


// 8.31
// 原则：所有数组的长度必须等于 numCourses​​（因为课程编号是 0 到 numCourses-1）。prerequisites.length 仅用于遍历边，不决定数组长度。
var canFinish = function(numCourses, prerequisites) {
    const g = Array.from({length: numCourses}, () => []); //g是一个用array实现的邻接表
    // g[i]是一个数组，存储所有依赖课程i的后续课程（i的出边）

    for (const [a,b] of prerequisites) {
        g[b].push(a); // g[b]表示从b出发的所有有向边
    }

    const colors = Array(numCourses).fill(0); // 先初始化为全0的array

    function dfs(x) {
        colors[x] = 1; // 正在访问
        for (const y of g[x]) {  // 遍历以x出发的所有y
            if (colors[y] === 1 || colors[y] === 0 && dfs(y)) {
                return true;
            }
        }
        colors[x] = 2; // 访问完毕
        return false;
    }

    for(let i = 0; i < numCourses; i++) {
        if (colors[i] === 0 && dfs[i]) { // 只有未访问的节点才调用 dfs，确保每个节点只被处理一次
            return false; // 存在环说明无法完成所有课程
        }
    }
    return true; 
}
