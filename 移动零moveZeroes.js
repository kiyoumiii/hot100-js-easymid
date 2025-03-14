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

// 二刷
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let len = nums.length;

    // for (let left = 0; left < len-1; left++) {
    //     for (let right = left + 1; right < len; right++) {
    //         if (nums[right] !== 0) {
    //             [nums[left],nums[right]] = [nums[right],nums[left]];
    //         }
    //     }
    // }

    for (let right = 0; right < len; right++) {
        if(nums[right] !== 0) {
            [nums[left],nums[right]] = [nums[right],nums[left]];
            left++;
        }
    }
    return nums;
};

// 注意千万不能写内外嵌套两层循环，一个是根本无法保证原版顺序，一个是时间复杂度还特别高
// 注意只循环right就可以了，left在每次循环的时候++即可。