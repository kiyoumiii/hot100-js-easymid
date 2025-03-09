// 无重复字符最长子串：用Set数据结构维护一个滑动窗口+双指针
// 用left和right左右指针，注意right初始化为-1
// left指针遍历整个字符串，只要left-1不越界就把left-1从set里delete
// right在循环内部，当right+1不越界且right+1处字符不在set里，也就是无重复就把right+1添加add到set里，然后right++
// 每次循环，都更新一下res为当前最大的滑动窗口长度即right-left+1的值

// 注意：当前的子串是以left和right为左右边界且包含它们的，每次滑动，myset是删除left-1而不是left，right在left循环内部，它每次向右滑动是向myset加入right+1而不是right
// 注意：while循环中判断的是right+1,千万别都写成right了
// 注意：最外层循环就是以left为依据在循环的，left的循环内部刚开始还要确认一下left是否已经大于1

var lengthOfLongestSubstring = function(str) {
    const myset = new Set();
    const n = str.length;
    let right = -1;
    let res = 0;

    for (let left = 0; left < n; left++) {
        if(left!==0) {
            myset.delete(str[left-1]);
        }

        while(right + 1 < n && !myset.has(str[right+1])) {
            myset.add(str[right+1]);
            right++;
        }

        res = Math.max(res,(right-left+1));
    }
    return res;
}

const str = 'abcabcbb';
let res = lengthOfLongestSubstring(str);
console.log(res);