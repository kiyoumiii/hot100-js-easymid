// 这道题最关键的是逻辑，二叉树都要左便利右便利，没啥可说，逻辑记住
// 因为如果root是null才会返回空，否则返回自己，所以如果左右子树都返回非空，说明它们两个分别在左右子树中，那么当前节点（root）就是最近公共祖先
// 如果有一个是null说明它在另一个子树中，刚好另一个子树非空说明它在这边的子树中，那么就返回这个非空的子树left或者right

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

// 二刷

var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
}

// 三刷

var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    else {
        return (left!==null) ? left : right;
    }
}