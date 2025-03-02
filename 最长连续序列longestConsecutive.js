// 最长连续序列：不管在nums里是否连续，只要作为数字是连续的
// 用Set数据结构
// 把nums放到set里，去重
// 用for(let num of myset)遍历set，如若说对当前的num来说，num-1不在set中说明这个num就是一个新开的序列，那就把cur置为1
// 当对于当前的以num为开头的序列来说，set里面已有num+1，那么就让cur++,num也++继续循环，循环完毕之后在while循环外根据curRes更新一下res的max值

var longestConsecutive = function(nums) {
    let longestRes = 0;
    const mySet = new Set(nums);

    for(let num of mySet) {
        if(!mySet.has(num-1)) {
            let curRes = 1;

            while(mySet.has(num+1)) {
                curRes++;
                num++;
            }

            longestRes = Math.max(longestRes, curRes);
        }
    }
    return longestRes;
}

const nums = [100, 4, 200, 1, 3, 2];
let res = longestConsecutive(nums);
console.log(res);