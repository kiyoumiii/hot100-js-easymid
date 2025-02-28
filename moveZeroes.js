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