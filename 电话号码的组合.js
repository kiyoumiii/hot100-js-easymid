// 电话号码的组合

class Solution {
    constructor() {
      this.letterMap = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
      ];
      this.result = [];
      this.s = '';
    }
  
    trackBack(digits, index) {
      if (index === digits.length) { // 递归终止条件
        this.result.push(this.s);
        return;
      }
      if (index < digits.length) {
        const key = parseInt(digits[index]); // 当前数字
        const letters = this.letterMap[key]; // 当前数字对应的字母
        for (let i = 0; i < letters.length; i++) { // 遍历字母
          this.s += letters[i]; // 选择当前字母
          this.trackBack(digits, index + 1); // 递归处理下一个数字
          this.s = this.s.slice(0, -1); // 撤销选择（回溯）
        }
      }
    }
  
    letterCombinations(digits) {
      if (digits.length === 0) { // 特殊情况处理
        return this.result;
      }
      this.trackBack(digits, 0); // 调用回溯函数
      return this.result;
    }
  }
  
  // 测试
  const solution = new Solution();
  console.log(solution.letterCombinations('23'));