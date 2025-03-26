// res变量用于记录target应该插入的位置
// res初始化为n主要是为了应对target大于数组中所有元素的情况
// 当target <= nums[mid]时说明target可能在当前mid位置或者mid位置的左边
// 所以要更新res为mid，因为mid位置有可能是target最终插入的位置。
// 如果是target > nums[mid]那么target就应该在mid位置的右边，无需插入res，只要把left置为mid+1就可以去右边找了
var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n-1;
    let res = n;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if (target <= nums[mid]) {
            right = mid - 1;
            res = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return res;
};

// 二刷

var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n-1;
    let res = n;

    while(left <= right) { // 这里一定要<=不能少了这个=不然就会出错
        let mid = Math.floor((left+right)/2);
        if (target <= nums[mid]) {
            right = mid - 1;
            res = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return res;
};