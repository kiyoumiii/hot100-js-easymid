// 只出现一次的数字
// 原理：
// 任何数和其自身做异或运算，结果是0：a ^ a = 0
// 任何数和0做异或运算，结果仍然是原来的数：a ^ 0 = a
// 所以出现2次的都会变成0，和出现1次的做异或后变成这个数
var singleNumber = function(nums) {
    let ans = 0;
    for (const x of nums) {
        ans ^= x;
    }
    return ans;
};