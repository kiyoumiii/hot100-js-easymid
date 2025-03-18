// python -> js
var pathSum = function(root, targetSum) {
    // 初始化前缀和计数对象，用于记录每个前缀和出现的次数
    const cnts = new Map();
    // 前缀和为 0 的情况初始化为 1 次
    cnts.set(0, 1);

    function dfs(node, cnts, prefix) {
        // 如果节点为空，返回 0
        if (!node) {
            return 0;
        }
        // 计算当前的前缀和
        prefix += node.val;
        // 计算满足条件的路径数量
        let res = cnts.has(prefix - targetSum) ? cnts.get(prefix - targetSum) : 0;
        // 更新当前前缀和的出现次数
        cnts.set(prefix, (cnts.get(prefix) || 0) + 1);

        // 递归处理左子树
        if (node.left) {
            res += dfs(node.left, cnts, prefix);
        }
        // 递归处理右子树
        if (node.right) {
            res += dfs(node.right, cnts, prefix);
        }

        // 回溯，减少当前前缀和的出现次数
        cnts.set(prefix, cnts.get(prefix) - 1);
        return res;
    }

    // 调用深度优先搜索函数
    const res = dfs(root, cnts, 0);
    return res;
};