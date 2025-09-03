// 数组是已经被从某个下标开始进行了向左旋转之后的数组
// 目标是高效的找到target，返回下标/-1，时间复杂度必须是O(log n)

var search = function(nums, target) {
    if (!nums.length) return -1;

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        // 从mid分开左右，两个部分至少有一个是有序的

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // 情况1:左半部分有序，[left..mid] 有序
            if (nums[left] <= target && target < nums[mid]) { //注意这个条件
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // 这里必须是和第一个if是else关系而不是并列的if，不然的话有可能同时成立这两个if条件
            // 情况2:右半部分有序，[mid...right]有序
            if (nums[mid] < target && target <= nums[right]) { // 注意这个条件，等号也注意
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}


