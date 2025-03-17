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