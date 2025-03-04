// 动态规划
// 状态转移方程：dp[j] = min(dp[j], dp[j - coin] + 1)
// 初始化时dp[0] = 0表示凑成金额0需要0个金币
// 双层循环遍历，第一层遍历硬币，第二层遍历金额，返回到需要的最少的硬币个数

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity); //金额从0到amount，所以长度是amount+1
    dp[0] = 0; // 金额为0需要0个金币，注意：这点一定要初始化，别忘了初始化了！

    for (const coin of coins) { // 遍历硬币
        for (let j = coin; j <= amount; j++) { // 金额为j需要多少个硬币,注意：j不是从0开始遍历，而是从coin
            if (dp[j - coin] !== Infinity) { // 可以用coin来凑成金额j，如果j-coin已经在初始化前被赋值过，那么它就可以更新
                dp[j] = Math.min(dp[j], dp[j - coin] + 1); // 选取更小的更新dp[j]
            }
        }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1; // 金额为amount时需要的硬币个数被更新过吗？如果是，就返回dp[amount]，如果否，说明不能凑到这个金额，返回-1。
}