// 数组中第K个最大元素，先从小到大排序，然后倒数第k个就是答案了

var findKthLargest = function(nums, k) {
     nums.sort((a,b) => a-b);
     return nums[nums.length-k];
}