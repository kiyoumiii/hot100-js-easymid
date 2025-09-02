// 电话号码的组合

class Solution {
    constructor() {
      this.letterMap = [
        '', // 0
        '', // 1
        'abc', // 2
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



// 9.1
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const letterMap = [
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

    const result = [];

    const trackBack = (digits, index, path, result) => {
        if (index === digits.length) {
          result.push(path.join('')); // 把path数组转换为字符串存入最终结果集，如path本来是['a','d']被转换后变为'ad'
          return ;
        }

        const letters = letterMap[parseInt(digits[index])]; 
        // digits[index]获取输入字符串中当前位置的数字字符，parseInt将字符转换为数字；letterMap是数组，需要用数字索引访问
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i]);
            trackBack(digits, index + 1, path, result);
            // 这里不要写成下面这行错误写法
            // trackBack(letters, i+1, path, result);
            path.pop();
        }
    };

    trackBack(digits, 0, [], result);
    return result;
}