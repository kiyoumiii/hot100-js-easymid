// 和为k的子数组，返回满足的子数组个数
// 前缀和，用map数据结构维护
// 初始化时，注意前缀为0的set为1；遍历nums中的num，累加prefix前缀和；
// 如果说map中已经存在前缀和为prefix-k的键了，就用get把对应value累加到res上
// 否则，就用set更新哈希表，给key为prefix的值设置为get(prefix)+1或者0+1（当这个prefix是undefined的时候保证正确）


var subarraySum = function(nums,k) {
    const hash_map = new Map();
    hash_map.set(0,1); // 初始化前缀和为0的value是1
    let prefix = 0;
    let res = 0;

    for(let num of nums) {
        prefix += num;
        if (hash_map.has(prefix - k)) {
            res += hash_map.get(prefix - k); //已经存在了，累加
        }
        hash_map.set(prefix, (hash_map.get(prefix) || 0) + 1);//更新哈希表，如果是undefined或0那么会返回0，+1
    }

    return res;
}

const nums = [1,1,1];
const k = 2;
let res = subarraySum(nums,k);
console.log(res);