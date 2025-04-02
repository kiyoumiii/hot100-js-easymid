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