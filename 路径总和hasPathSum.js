// 不断减去遍历到的节点，到叶子节点就判0，然后递归

var hasPathSum = function(root, targetSum) {
    if(root === null) {
        return false;
    }

    targetSum -= root.val;

    if (root.left === null && root.right === null) {
        return targetSum === 0;
    }

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// 二叉树结构：
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1

const root = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null }
        },
        right: null
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: null,
            right: { val: 1, left: null, right: null }
        }
    }
};

const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // 输出: true