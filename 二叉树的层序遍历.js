// levels是一个数组，里面的元素也是数组，每个子数组代表一层，要一层一层的加入新的子数组
// 依据就是当levels.length===level的时候就该加入一个新的子数组了，因为level的长度刚好是等于level层数的，遍历到第4层的时候就push第4个子数组

var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const levels = [];

    function travel(node,level) {
        if (!node) {
            return ;
        }

        if (levels.length === level) {
            levels.push([]); //加下一层
        }

        levels[level].push(node.val); //先把当前的val值push到levels[level]
        travel(node.left, level+1); // 遍历子树的时候，level是比当前层+1的哦
        travel(node.right, level+1);
    }

    travel(root,0);

}