// 每个字母最多出现在一个片段中

var partitionLabels = function(s) {
    // 记录每个字母最后出现的位置
    let last = new Array(26);
    const n = s.length;
    const aCodePoint = 'a'.codePointAt(0);
    for (let i = 0; i < n; i++) {
        last[s.codePointAt(i) - aCodePoint] = i;
    }

    // 遍历字符串划分区间
    let partition = [];
    let end = 0, start = 0;
    for (let i = 0; i < n; i++) {
        end = Math.max(end, last[s.codePointAt(i) - aCodePoint]);
        if (i === end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }

    return partition;
}