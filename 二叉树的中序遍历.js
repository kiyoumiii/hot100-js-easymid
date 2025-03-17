// 统一写法，迁移到二叉树遍历问题上

var inorderTraversal = function(root) {
    const res = [];

    const dfs = (node) => {
        if (!node) {
            return ;
        }
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    };

    dfs(root);
    return res;
}

const root = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
}

console.log(inorderTraversal(root));

// 三刷
var inorderTraversal = function(root) {
    let res = [];
    if (!root) {return []};

    function dfs(root) {
        if (!root) {
            return ;
        }
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    return res;
};