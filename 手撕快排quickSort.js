// 补充题目：手撕快排
// 快排的核心思想：选择一个基准pivot，将数组一分两半，递归的对两部分进行排序
// 这里选择中间元素作为基准，循环结束条件是left>=right
// 分区操作，使用双指针i和j：i从左向右移动，找到第一个大于等于pivot的元素，j从右向左移动找到第一个小于等于pivot的元素
// 如果i<=j，则交换arr[i]和arr[j]，并移动指针
// 平均时间复杂度：O(n log n)
// 最坏时间复杂度：O(n²)

var sortArray = function (nums) {
    const quickSort = (arr, left, right) => {
        if (left >= right) return;

        const pivot = arr[Math.floor((left + right) / 2)];
        let i = left, j = right;

        while(i<=j) { //这里没有=就会出错
            while(arr[i] < pivot) i++;
            while(arr[j] > pivot) j--;

            if (i<=j) {//同理
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
                j--;
            }
        }

        // 递归排序左半部分和右半部分
        quickSort(arr, left, j);
        quickSort(arr, i, right);

    };

    quickSort(nums, 0, nums.length-1);
    return nums;
}