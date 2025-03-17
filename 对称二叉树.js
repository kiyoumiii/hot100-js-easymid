// 逻辑是如果是空🌲，或者是没有子节点的单个节点都是对称的return tue;
// 如果只有一个子树，那么是不对称的return false
// 如果左子树和右子树的val不相等，则不对称，return false
// 否则，else，就得递归了，让left和right分别递归比较left.left和right.right，left.right和right.left，之后left_flag&&right_flag是true那么才是true

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function isMirror(left,right) {
        if (!left && !right) {
            return true;
        }
        else if (!left && right) {
            return false;
        }
        else if (!right && left) {
            return false;
        }
        else if (left.val != right.val) {
            return false;
        }
        else {
            let left_flag = isMirror(left.left,right.right);
            let right_flag = isMirror(left.right,right.left);
            return (left_flag && right_flag);
        }
    }

    return isMirror(root.left,root.right);   
};