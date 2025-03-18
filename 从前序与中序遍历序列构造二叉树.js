// 前序遍历的第一个值就是当前子树的根节点
// 在中序遍历中找到根节点的位置，把中序数组分割成左右两部分，左边就是左子树，右边就是右子树
// 再把前序遍历数组进行一下分割，依据是在上一步中分割好的左子树和右子树的长度
var buildtree = function(preorder,inorder) {
    if (preorder.length === 0) {
        return null;
    }

    const rootval = preorder[0];
    const root = new TreeNode(rootval);

    const root_inorder_idx = inorder.indexOf(rootval);

    const inorder_left = inorder.slice(0,root_inorder_idx);
    const inorder_right = inorder.slice(root_inorder_idx+1);

    const preorder_left = preorder.slice(1,1+inorder_left.length);
    const preorder_right = preorder.slice(1+inorder_left.length);

    root.left = buildtree(preorder_left,inorder_left);
    root.right = buildtree(preorder_right,inorder_right);
}

// 二刷通过
// preoder和inoder交替在分割，分割的顺序和逻辑一定要记清楚才行啊

var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    const root_val = preorder[0];

    const root = new TreeNode(root_val);

    const root_inorder_idx = inorder.indexOf(root_val);

    const inorder_left = inorder.slice(0,root_inorder_idx);
    const inrorder_right = inorder.slice(root_inorder_idx+1);

    const preorder_left = preorder.slice(1,1+inorder_left.length);
    const preorder_right = preorder.slice(1+inorder_left.length);

    root.left = buildTree(preorder_left,inorder_left);
    root.right = buildTree(preorder_right,inrorder_right);

    return root;
};