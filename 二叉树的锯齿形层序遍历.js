// 给定一个二叉树，先从左往右遍历一层，再从右往左遍历下一层

// 用一个队列q存储当前层的节点
// 使用一个标志位left控制遍历方向:left=1表示从左到右，0表示从右到左
// 遍历每一层，从队列取出当前层的所有节点，将它们的值存入临时数组t
// 根据left的值决定是否反转t，然后将t加入结果数组ans
// 将当前层节点的子节点加入队列qq准备遍历下一层

var zigzagLevelOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    } // 这个只要是二叉树都会写的

    const q = [root]; // q是当前层的队列
    let flag = 1; // 1表示从左到右

    while(q.length) {
        const tmp = []; // 临时数组
        const qq = []; // qq是下一层的队列

        for (const {val, left, right} of q) {
           tmp.push(val); // 将当前节点的值加入临时数组
           left && qq.push(left); // 如果左子节点存在，加入临时队列
           right && qq.push(right); // 如果右子节点存在，加入临时队列
        }

        // 根据标志位决定是否反转临时数组
        res.push(flag ? tmp : tmp.reverse());
        q.splice(0, q.length, ...qq); // 更新队列为下一层的节点
        flag = !flag; // 反转标志位
    }

    return res;
}

