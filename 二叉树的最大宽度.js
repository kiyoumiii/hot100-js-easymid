// 定义二叉树节点
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxWidthOfBinaryTree(root) {
    if (!root) return 0; // 如果树为空，宽度为 0

    let maxWidth = 0; // 记录最大宽度
    const queue = []; // BFS 队列
    queue.push({ node: root, index: 0 }); // 将根节点和其索引加入队列

    while (queue.length > 0) {
        const levelSize = queue.length; // 当前层的节点数
        const firstIndex = queue[0].index; // 当前层第一个节点的索引
        const lastIndex = queue[levelSize - 1].index; // 当前层最后一个节点的索引
        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1); // 更新最大宽度

        // 遍历当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            const { node, index } = queue.shift(); // 出队

            // 将左子节点加入队列，索引为 2 * index
            if (node.left) {
                queue.push({ node: node.left, index: 2 * index });
            }

            // 将右子节点加入队列，索引为 2 * index + 1
            if (node.right) {
                queue.push({ node: node.right, index: 2 * index + 1 });
            }
        }
    }

    return maxWidth;
}