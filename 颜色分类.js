// 颜色分类

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0, white = 0, blue = 0;
    for (let num of nums) {
        switch (num) {
            case 0: {
                red++;
                break;
            }
            case 1: {
                white++;
                break;
            }
            case 2: {
                blue++;
                break;
            }
            default: {
                break;
            }
        }
    }
    return nums.fill(0,0,red).fill(1,red,red+white).fill(2,red+white);
};