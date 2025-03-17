// 题目中说，二叉树的直径，可以经过也可能不经过根节点root，所以一定不要混淆直径和深度的概念！
// 直径=leftlen+rightlen,其中的leftlen和rightlen是左子树和右子树的深度
// 递归函数内部虽然在递归后更新了最大直径，但还是要返回最大深度Math.max(leftlen,rightlen)以让深度值可以边递归边计算出来，从而更新直径。

var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }

    let diameter = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        let leftdepth = dfs(node.left);
        let rightdepth = dfs(node.right);
        diameter = Math.max(diameter,leftdepth+rightdepth);

        return Math.max(leftdepth,rightdepth)+1;
    }

    dfs(root);
    return diameter;
}

