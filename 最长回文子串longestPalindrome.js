// 最长回文子串
// 回文串可以分为两种：奇数长度是以单个字符为中心偶数长度是以两个字符为中心
// 遍历字符串中每个字符s[i],以s[i]为中心向左右扩展，找到最长的奇数长度回文子串
// 以s[i]和s[i+1]为中心，向左右扩展，找到最长的偶数长度回文子串
// 比较并记录最长的回文子串

var longestPalindrome = function (s) {
    const expanAroundCenter = (s, left, right) => {
        while(left>=0 && right < s.length && s[left] === s[right]) {
            left--;
            right++
        }
        return [left+1, right-1]; // 跳出while循环时,left和right是不满足回文条件的位置，所以满足的还得+1和-1
    }

    let start = 0, end = 0; // 记录最长回文子串的起始和结束索引，初始化为0，后面要比较和更新

    for(let i = 0; i < s.length; i++) {
        const [start1, end1] = expanAroundCenter(s, i, i);
        const [start2, end2] = expanAroundCenter(s, i, i+1);

        if (end1 - start1 > end - start) {
            start = start1;
            end = end1;
        }

        if (end2 - start2 > end - start) {
            start = start2;
            end = end2;
        }
    }

    return s.slice(start, end+1); // slice是左闭右开的

}

var longestPalindrome = function(s) {
    function expand (nums, left, right) {
        while(left >= 0 && right <= nums.length-1 && left <= right && nums[left] === nums[right]) {
            left--;
            right++;
        }
        return [left+1, right+1];
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const [start1, end1] = expand(s,i,i);
        const [start2, end2] = expand(s,i,i+1);

        if (end1 - start1 > end - start) {
            end = end1;
            start = start1;
        }

        if (end2 - start2 > end - start) {
            end = end2;
            start = start2;
        }
    }

    return s.slice(start, end+1);
}
