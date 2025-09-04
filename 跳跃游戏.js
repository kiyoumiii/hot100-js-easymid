// 贪心算法

var canJump = function(nums) {
    let n = nums.length;
    let mostfar = 0;

    for (let i = 0; i < n; i++) {
        if (mostfar >= i) { // 这里如果不写这个条件就无法通过
            // 只有当 i <= mostfar 时​​，才说明我们能够到达位置 i，才有资格从 i 位置起跳
            mostfar = Math.max(mostfar, nums[i]+i); 
            // nums[i]+i表示从当前位置i能跳到的最远位置
            if (mostfar >= n - 1) {
                // 最后一个index是n-1
                return true;
            }
        }
    }

    return false;
}