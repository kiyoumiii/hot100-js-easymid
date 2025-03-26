// 给定一个不含重复数字的数组nums，返回其所有可能的全排列，典型的回溯递归
// 回溯原理：通过递归枚举所有可能的排列，使用一个used数组记录哪些数字已经被使用过，用path长度判断是否找到一个排列
// 在回溯函数中，首先先判断path和num的长度是否相等了，相等则将path展开后push到result中，跳到上一级迭代
// 然后遍历nums，如果下标i已经在used中了就continue跳过，然后把i标记为used为true，把nums[i]push到path中，然后递归回溯函数；
// 然后撤销回溯，让path执行pop()把刚才的nums[i]弹出，再这个i标记为used为false

var permute = function(nums) {
    const result = [];
    trackBack(nums, new Array(nums.length).fill(false), [], result);
    return result;
}

const trackBack = (nums, used, path, result) => {
    if (path.length === nums.length) {
        result.push([...path]); // 别写错了...[path]
        return; //return不会终止函数，而是会跳到上一级迭代
    }

    for (let i = 0; i < nums.length; i++) {
        if(used[i]) {
            continue; //如果下标i已经在used数组中了，就跳过
        }
        used[i] = true; // 选择当前数字
        path.push(nums[i]); 
        trackBack(nums, used, path, result); // 递归
        path.pop(); // 撤销回溯
        used[i] =false; // 撤销回溯
    }
}

const nums = [1,2,3];
let res = permute(nums);
console.log(res);

// 全排列，二刷

var permute = function(nums) {
    let res = [];
    // 嵌套的辅助函数
    function trackBack(used, path) {
        if (nums.length === path.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            used[i] = true;
            path.push(nums[i]);
            trackBack(used, path);
            path.pop();
            used[i] = false;
        }
    };

    trackBack(new Array(nums.length).fill(false), []);
    return res;
};

