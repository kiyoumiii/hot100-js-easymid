const binarySearch = (nums, target, lower) => {
    const n = nums.length;
    let left = 0, right = n - 1; ans = n;
    while (left <= right) {
        const mid = Math.floor((left+left)/2);
        if ((target < nums[mid]) || (lower && target <= nums[mid])) {
            right = mid - 1;
            ans = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange = function(nums, target) {
    let ans = [-1,-1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (rightIdx < nums.length && leftIdx <= rightIdx && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx,rightIdx];
    }
    return ans;
};


// 9.2


var searchRange = function (nums, target) {
    
    const findLeft = () => {
        let left = 0, right = nums.length - 1, ans = -1;
        while(left <= right) {
            const mid = Math.floor((left+right)/2);
            if (target <= nums[mid]) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    };

    const findRight = () => {
        let left = 0, right = nums.length - 1, ans = -1;
        while (left <= right) {
            const mid = Math.floor((left+right)/2);
            if (target >= nums[mid]) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    };

    const leftIdx = findLeft();
    const rightIdx  = findRight();

    if (leftIdx !== -1 && nums[leftIdx] === target) {
        return [leftIdx, rightIdx];
    }

    return [-1,-1];
}
