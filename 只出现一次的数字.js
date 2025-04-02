// 只出现一次的数字
var singleNumber = function(nums) {
    let ans = 0;
    for (const x of nums) {
        ans ^= x;
    }
    return ans;
};