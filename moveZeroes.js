// 移动0：把0挤到后面
// 用right指针遍历整个nums,right处只要不等于0就让left和right处元素交换，而left++完毕最后的长度仅仅是非0元素的长度

var moveZeroes = function(nums) {
    const n = nums.length;
    let left = 0, right = 0;
    for (let right = 0; right < n; right++) {
        if(nums[right]!==0) {
            [nums[left],nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
}

const nums = [0, 1, 0, 3, 12];
let res = moveZeroes(nums);
console.log(nums);