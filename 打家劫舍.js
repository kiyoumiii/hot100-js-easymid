// 动态规划，连续偷相邻的会报警
// dp[i]表示偷窃到第i间房屋时能够获得的最大金额
// 如果偷盗第i间房屋，就不能偷窃第i-1间房屋，最大金额为dp[i-2]+nums[i-1]
// 状态转移方程： dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])

var rob = function(nums) {
    const len = nums.length;

    if (len===0) {
        return 0;
    } // 没有房屋返回0,常规操作

    const dp = new Array(len+1); // 创建dp数组

    dp[0] = 0; // 初始化，第0间也要进行初始化；后面还有n间，所以刚开始创建的数组长度是n+1
    dp[1] = nums[0]; // 初始条件

    for (let i = 2; i <= len; i++) { //下一行最小的是i-2，必须保证不溢出
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
        // 要么不偷窃第i间房，那么可以偷窃第i-1间房；
        // 要么偷窃第i间房，那么不能偷窃第i-1间只能偷窃第i-2间房，dp[i-2]加上第i间房的金额，第i间房的金额在nums数组中的下标是i-1
    }

    return dp[len]; //在dp数组中dp[i]就是第i间房的数据，和下标是吻合的，这点要注意
}

// 二刷

var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp = new Array(nums.length+1);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1]);
    }

    return dp[nums.length];

};