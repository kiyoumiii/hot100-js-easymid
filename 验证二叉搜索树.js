// 判断一个树是否是搜索二叉树
// 按照中序遍历的特性来判断，因为一个二叉搜索树中序遍历后，得到的序列应该是严格递增的
// 所以可以通过中序遍历，在遍历过程中检查当前节点的值是否大于前一个节点的值

var isValidBST = function(root) {
    let pre = null;

    function inorderTravelsal(node) {
        if (!node) {
            return true;
        }

        let left = inorderTravelsal(node.left);

        if(pre !== null && pre.val >= node.val) {
            return false;
        }

        pre = node;

        let right = inorderTravelsal(node.right);

        return left&&right;
    }

    return inorderTravelsal(root);
}

// 二刷
var isValidBST = function(root) {
    let pre = null;

    function travel(node) {
        if (!node) {
            return true;
        }
        let left = travel(node.left);

        if(pre!=null && pre.val>=node.val) { // 先判断pre等不等于null不等于才判断顺序是不是不合理，不合理直接返回false，不然后面就可以返回true了
            return false;
        }

        let right = travel(node.right);

        return left&&right;
    }
    return travel(root);
}