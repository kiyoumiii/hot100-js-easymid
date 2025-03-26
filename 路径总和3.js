// map数据结构+前缀和

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