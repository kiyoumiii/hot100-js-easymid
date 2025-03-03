// DFS深度搜索：从根节点开始，递归遍历每个节点，在遍历过程中，将当前路径的数字累加；
// 当到达叶节点时，将当前路径表示的数字加入总和

var sumNumbers = function (root) {
    return dfs(root,0); // 初始时，从root开始，初始化preSum是0
}

const dfs = (root, prevSum) => {
    if(root === null) {
        return 0; // 注意，这里一定要返回0，不要return;这样并不是返回到上一层递归了因为它不在递归中，而是返回了undefined，会造成无法通过
    }
    const sum = preSum * 10 + root.val;
    if (root.left == null && root.right == null) {
        return sum; //到叶子节点了，就把sum返回
    }
    else {
        return dfs(root.left, sum) + dfs(root.right, sum); // 递归
    }
}