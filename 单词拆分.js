// 单词拆分.js

class Solution {
    wordBreak(s, wordDict) {
      const n = s.length;
      const wordSet = new Set(wordDict); // 将字典转换为集合，方便查找
      const dp = new Array(n + 1).fill(false); // 初始化动态规划表
      dp[0] = true; // 空字符串可以被拆分
  
      for (let i = 1; i <= n; i++) { // 遍历背包
        for (let j = 0; j < i; j++) { // 遍历单词
          if (dp[j] && wordSet.has(s.substring(j, i))) {
            dp[i] = true;
            break; // 找到后可以提前退出
          }
        }
      }
  
      return dp[n];
    }
  }
  
  // 测试
  const solution = new Solution();
  console.log(solution.wordBreak("leetcode", ["leet", "code"])); // true
  console.log(solution.wordBreak("applepenapple", ["apple", "pen"])); // true
  console.log(solution.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false