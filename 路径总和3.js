// map数据结构+前缀和
// dfs遍历维护前缀和哈希表，记录每个前缀和出现的次数；
// 在遍历到每个节点的时候，就看当前前缀和与目标值的差值在哈希表中是否存在，如果存在就说明有这样的路径，将相应次数累加到结果中
var pathSum = function(root, targetSum) {
    let ans = 0;
    const cnt = new Map();
    cnt.set(0,1);
    function dfs(node,s) {
        if (node===null) {
            return;
        }
        s += node.val;
        ans += (cnt.get(s-targetSum) ?? 0);
        cnt.set(s,(cnt.get(s) ?? 0) + 1);
        dfs(node.left, s);
        dfs(node.right, s);
        cnt.set(s, cnt.get(s)-1);
    }
    dfs(root,0);
    return ans;
}

// 8.30
var pathSum = function(root, targetSum) {
    let ans = 0;
    const cnt = new Map();
    cnt.set(0,1); // 空路径的和为1

    function dfs(node,s) {
        if (node === null) {
            return ;
        }
        s += node.val;
        // 下面语法的意思是： cnt.get(s) 返回 undefined（即 s 不在 Map 中），则使用默认值 0。
        ans += (cnt.get(s-targetSum) ?? 0); // 先查询历史前缀和
        cnt.set(s,(cnt.get(s) ?? 0) + 1); // 再更新当前前缀和
        dfs(node.left, s); // 第二个参数是s不是0
        dfs(node.right, s);
        cnt.set(s, cnt.get(s)-1);  // 回溯​​（Backtracking），即恢复哈希表 cnt 的状态，确保在递归的不同路径之间不会互相干扰。
    }

    dfs(root,0); // 初始s=0空路径的和
    return ans;
}