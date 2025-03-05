// 合并区间
// 声明一个merged数组保存结果，先处理空数组，然后对数组进行排序
// 排序之后开始遍历每个二元数组，如果merged是空或者merged的最后一个二元组的右边界比遍历的二元组左边界还要小，那么就直接push
// 否则，说明重合，可以合并，直接将merged的最后一个区间的右边界替换成两者右边界的较大值
// 最后将merged返回

// 注意：千万别忘了事先按照所有interval的左边界sort排序，不然就会错！

var merge = function(intervals) {
    let merged = [];

    if (intervals.length === 0) {
        return [];
    }

    intervals.sort((a,b) => a[0]-b[0]); // 按照区间起点从小到大排序

    for (const interval of intervals) {
        if (merged.length === 0 || merged[merged.length-1][1] < interval[0]) {
            merged.push(interval);
        }
        else {
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1]);
        }
    }

    return merged;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
let res = merge(intervals);
console.log(res);