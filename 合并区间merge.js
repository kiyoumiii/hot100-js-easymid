// 合并区间

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