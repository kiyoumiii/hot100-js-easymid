// 整个prev，prev的right=node,prev的left=null
var flatten = function(root) {
    let prev = null;
    function travel(node) {
        if (!node) {
            return;
        }
        let left = node.left;
        let right = node.right;
        if (prev){
            prev.right = node;
            prev.left = null;
        }
        prev = node; // 千万别忘了更新prev啊，每次都忘记！！！
        travel(left);
        travel(right);
    }
    travel(root);
    return root;
}