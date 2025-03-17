// dfs里面除了常规化递归关键就是left和right的互换操作了
var invertTree = function(root) {
    if (!root) {
        return root;
    }

    function dfs(root) {
        if (!root) {
            return ;
        }
        [root.left,root.right] = [root.right,root.left];
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return root;
};