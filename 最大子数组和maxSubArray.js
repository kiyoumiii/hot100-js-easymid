// 本题中dp[i]表示以第i个元素结尾的最大子数组和
// 以第一个元素结尾的最大子数组和就是它本身
// 状态转移时，每个元素nums[i]有两个选择，一个是加入到dp[i-1]一个是作为新起点

var maxSubArray = function(nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let res = dp[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        res = Math.max(res, dp[i]);
    }

    return res;
}

const nums = [-1, 1, -3, 4, -1, 2, 1 ,-5, 4];
let res = maxSubArray(nums);
console.log(res);