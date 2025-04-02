var canFinish = function(numCourses, prerequisites) {
    const g = Array.from({ length: numCourses }, () => []);
    for (const [a, b] of prerequisites) {
        g[b].push(a);
    }

    const colors = Array(numCourses).fill(0);
    function dfs(x) {
        colors[x] = 1; // x 正在访问中
        for (const y of g[x]) {
            if (colors[y] === 1 || colors[y] === 0 && dfs(y)) {
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
