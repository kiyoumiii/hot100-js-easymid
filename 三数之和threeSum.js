// 三数之和为0，返回所有三元组
// 先给数组排序
// 遍历数组，找以nums[i]开头的符合和为0的三元组，找到就push到res中
// 如若nums[i]>0它后面都是大于0直接break
// 跳过重复元素continue，确保nums[i]不重复
// 左右指针，left从i+1开始，right从n-1开始
// 开始循环，条件是left<right，让nums[i]+left+right，如果和小于0，说明left小了，left++；如果和大于0，说明right大了，right--；如果等于0，把三者push到res里。
// 等于0的时候push完毕还是要去重，确保nums[left]和nums[right]不重复，不然还是会找到重复的结果。

var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0) {
            break;
        }

        if(i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i+1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                result.push([nums[i], nums[left], nums[right]]);

                while(right > left && nums[right]===nums[right-1]) right--;
                while(right > left && nums[left]=== nums[left+1]) left++;

                left++;
                right--;
            }
        }
    }
    return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
let res = threeSum(nums);
console.log(res);