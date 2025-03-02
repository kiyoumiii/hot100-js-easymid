// 合并有序数组，主要是记住splice这个方法，从m开始切割一个长度为num1.length-m的数组切片，可以用...nums2把这个切片替换掉
//splice完毕，再sort一下保持有序

var mergeOrderArray = function(nums1,m,nums2,n) {
    nums1.splice(m, nums1.length-m, ...nums2);
    nums1.sort((a,b) => a-b);
}

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;
mergeOrderArray(nums1,m,nums2,n);
console.log(nums1);