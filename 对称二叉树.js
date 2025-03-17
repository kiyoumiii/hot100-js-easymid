// 逻辑是如果是空🌲，或者是没有子节点的单个节点都是对称的return tue;
// 如果只有一个子树，那么是不对称的return false
// 如果有左右两个子树，那么就得递归了，让left和right分别递归后left&&right是true那么才是true

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function dfs(root) {
        if (!root.left && !root.right) {
            return true;
        }
        else if (!root.left && root.right) {
            return false;
        }
        else if (root.left && !root.right) {
            return false;
        }
        else if (root.left && root.right) {
            let left = dfs(root.left);
            let right = dfs(root.right);
            return (left&&right);
        }
    }

    return dfs(root);
}