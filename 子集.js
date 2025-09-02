class Solution {
    subsets(nums) {
      const result = []; // 存储所有子集
      this.trackBack(nums, 0, [], result); // 调用回溯函数
      return result;
    }
  
    trackBack(nums, startIndex, path, result) {
      result.push([...path]); // 将当前路径加入结果集
      for (let i = startIndex; i < nums.length; i++) { // 遍历可选元素
        path.push(nums[i]); // 选择当前元素
        this.trackBack(nums, i + 1, path, result); // 递归
        path.pop(); // 撤销选择
      }
    }
  }
  
  // 测试
  const solution = new Solution();
  console.log(solution.subsets([1, 2, 3]));



// 8.31
class Solution {
  subsets(nums) {
    const result = [];
    this.trackBack(nums, 0, [], result);
    return result;
  }

  trackBack(nums, startIndex, path, result) {
    result.push([...path]); // 循环外已经push到result中
    for (let i = startIndex; i < nums.length; i++) {
        path.push(nums[i]); //循环哪只push到path中
        this.trackBack(nums, i+1, path, result);
        path.pop();
    }
  }
}

// 通过力扣
var subsets = function(nums) {
    const result = [];
    
    const trackBack = (nums, startIndex, path, result) => {
        result.push([...path]);  // 关键：必须拷贝当前路径
        
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);  // 做选择
            trackBack(nums, i + 1, path, result);  // 递归
            path.pop();          // 撤销选择
        }
    };
    
    trackBack(nums, 0, [], result);
    return result;
};
// 因为题目尝试直接调用var subsets = function(nums)这个方法