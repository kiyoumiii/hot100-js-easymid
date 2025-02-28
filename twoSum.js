var twoSum = function(nums, target) {
    let mymap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (mymap.has(diff)) {
            return [mymap.get(diff), i];
        }
        mymap.set(nums[i], i);
    }
    return [];
    }


    // 示例输入
    const nums = [2, 7, 11, 15];
    const target = 9;

    // 调用函数并输出结果
    const result = twoSum(nums, target);
    console.log(result); 