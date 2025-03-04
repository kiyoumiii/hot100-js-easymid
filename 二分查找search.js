// 二分查找的时间复杂度为O(logn)，是一种高效的查找方法
// 初始化左右指针，left指针初始化为数组的起始索引0，right指针初始化为数组的最后一个元素的索引，即len(nums)-1;
// while循环,条件是left<right,计算中间索引，比较中间元素与目标值
// 如果target偏小，就在左边寻找，right = middle - 1; 如果target偏大，就在右边寻找,left = middle + 1
// 注意返回的是索引，不是值
var search = function (nums, target) {
    let left = 0;
    let right =nums.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2 );

        if (nums[middle] > target) {
            right = middle - 1;
        }
         else if (nums[middle] < target) {
            left = middle + 1;
         }
         else {
            return middle;
         }
    }
    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const result = search(nums, target);
console.log(result); 
