// 元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素 。
// 设计时间复杂度为O(log n)的算法寻找

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) { // 循环条件是while不是for，别记错了
        const mid = Math.floor((left+right)/2);

        if (nums[mid] < nums[right]) {
            right = mid;  // 这里不是right = mid - 1，因为
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
}