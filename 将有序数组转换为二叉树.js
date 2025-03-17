// 注意千万不要用if(!nums)判断数组为空，因为空数组不是null和undefiend，它在js中也是真值。

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
}