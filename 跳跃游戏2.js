// 返回最小跳跃次数

var jump = function(nums) {
    let n = nums.length, 
        end = 0, // 当前跳跃的边界
        mostfar = 0, 
        steps = 0;

    for (let i = 0; i < n - 1; i++) {
        // 遍历到n-1就停止因为最后一个位置不需要再跳
        // 此处如果不小心写成i < n就会出错
        if (i <= mostfar) {
            mostfar = Math.max(mostfar, i+nums[i]);
            // 到达当前跳跃边界，那么就应该再跳一次
            if (i === end) {
                end = mostfar;
                steps++;
            }
        }
    }
    return steps;
}