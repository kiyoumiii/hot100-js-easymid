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