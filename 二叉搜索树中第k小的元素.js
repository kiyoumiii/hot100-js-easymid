// 知道二叉搜索树按照中序遍历后得到的nums数组的第k-1个下标就是第k个最小的值就可以了

var kthSmallest = function(root, k) {
    let pre = null;
    let nums = [];
    function travel(node) {
        if (!node) {
            return ;
        }
        let left = travel(node.left);
        nums.push(node.val);
        let right = travel(node.right);
    }
    travel(root);
    return nums[k-1];
};

// 二刷

var kthSmallest = function(root, k) {
    let pre = null;
    let nums = [];
    function travel(node) {
        if (!node) {
            return ;
        }
        let left = travel(node.left);
        nums.push(node.val);
        let right = travel(node.right);
    }
    travel(root);
    return nums[k-1]; // 第k-1个index就是第k小了，千万别返回第k个下标
}