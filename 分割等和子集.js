var canPartition = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    if (totalSum % 2 !== 0) return false;
    
    const target = totalSum / 2;
    const n = nums.length;
    
    // 初始化dp数组
    const dp = new Array(n + 1).fill().map(() => new Array(target + 1).fill(false));
    
    // 基础情况：和为0时总是true
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }
    
    // 动态规划计算
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    
    return dp[n][target];
};