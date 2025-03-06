var lowestCommonAncestor = function(root, p, q) {
    if (root == null || root === p || root === q) {
        return root; //如果root是null就返回null，否则返回根节点即当前节点
    }

    //递归遍历左子树和右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // 如果左右节点都返回非空节点，说明p和q分别位于当前节点的左右子树中，那么当前节点就是最近公共祖先
    if (left !== null && right !== null) {
        return root;
    }

    // 如果左右子树中只有一个非空，那么就是返回它自己
    return left !== null ? left : right;
}