var maxDepth = function (root) {
    return getDepth(root);
}

const getDepth = (node) => {
    if(!node) {
        return 0;
    }

    const leftHeight = getDepth(node.left);
    const rightHeight = getDepth(node.right);
    const height = 1 + Math.max(leftHeight, rightHeight);

    return height;
}

// 三刷
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    function getDepth(node) {
        if (!node) {
            return 0;
        }
        let leftlen = getDepth(node.left);
        let rightlen = getDepth(node.right);
        let maxlen = 1 + Math.max(leftlen,rightlen);
        return maxlen;
    }

    let maxlen = getDepth(root);
    return maxlen;
};