// 桶排序

var topKthFrequent = function(nums, k) {
    const cnt = new Map();
    for (const x of nums) {
        cnt.set(x,(cnt.get(x) ?? 0) + 1);
    }

    const maxCnt = Math.max(...cnt.values());

    const buckets = Array.from({length: maxCnt + 1}, () => []);
    //  要使用 maxCnt 作为索引，所以必须创建 maxCnt + 1 的长度

    for (const [x,c] of cnt.entries()) {
        // map.entries()返回一个[key,value]对的迭代器（MapIterator 对象）
        buckets[c].push(x); // 次数相同的元素放到同一个桶里
    }

    // 倒序遍历buckets，把出现次数前k大的元素加入答案
    const ans = [];
    for (let i = maxCnt; i >= 0 && ans.length < k; i--) {
        ans.push(...buckets[i]);
    }

    return ans;
}