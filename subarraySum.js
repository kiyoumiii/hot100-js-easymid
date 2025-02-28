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