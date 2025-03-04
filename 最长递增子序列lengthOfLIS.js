// 这些元素的下标可以不连续，但它们的值必须严格递增
// 动态规划，dp[i]表示i之前包括i的以nums[i]结尾的最长递增子序列的长度
// dp[i]是有0～i-1各个位置的最长递增子序列推导而来

var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    const n = nums.length;
    const dp = new Array(n).fill(1);
    let result = 1; //每个dp[i]的起始大小至少都是1

    // 外层循环从1开始遍历nums,内层循环从0到i-1遍历nums；
    // 如果nums[i]>nums[j],说明可以将nums[i]接在以nums[j]结尾的递增子序列后面，
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
}

const nums = [10,9,2,5,3,7,101,18];
let res = lengthOfLIS(nums);
console.log(res);

