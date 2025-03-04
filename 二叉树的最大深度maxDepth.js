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