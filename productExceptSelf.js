var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    let tmp = 1;

    // 计算前缀积
    for(let i = 1; i < n; i++) {
        res[i] = res[i-1] * nums[i-1];
    }

    // 计算后缀积&更新res
    for (let i = n-2; i >= 0; i--) {
        tmp *= nums[i+1];// tmp是后缀积，不要覆盖已经存储好的前缀积
        res[i] *= tmp; // res已经存储为前缀积了，tmp又存储了后缀积，相乘就是答案了
    }

    return res;
}

const nums = [1,2,3,4];
let res = productExceptSelf(nums);
console.log(res);
