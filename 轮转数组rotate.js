// 原地翻转数组
// 逻辑思考法：先反转整个数组，再反转前k个元素，在反转剩余元素

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);

    function reverse(nums,start,end) {
        while(start<end) {
            [nums[start],nums[end]] = [nums[end],nums[start]];
            start++;
            end--;
        }
    }
        
}

const nums = [1,2,3,4,5];
let res = rotate(nums,3);
console.log(nums);

// 二刷
var rotate = function(nums, k) {
    k = k % nums.length ;

    function reverse (nums,i,j) {
        while (i < j) {
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
            j--;
        }
    }

    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

    return nums;
};