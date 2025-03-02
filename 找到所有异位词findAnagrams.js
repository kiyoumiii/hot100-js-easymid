// 要维护26字母的数组+滑动窗口，窗口的长度是子串的长度
// 还要写一个函数判两数组相等

var findAnagrams = function(s, p) {
    const slen = s.length;
    const plen = p.length;
    const scount = new Array(26).fill(0);
    const pcount = new Array(26).fill(0);

    const res = [];

    if (slen < plen) {
        return res;
    }

    for (let i = 0; i < plen; i++) {
        pcount[p.charCodeAt(i) - 97]++;
        scount[s.charCodeAt(i) - 97]++;
    }

    if(arraysEqual(scount, pcount)) {
        res.push(0);
    }

    for(let i = plen; i < slen; i++) {
        // 字母进入窗口与离开窗口
        scount[s.charCodeAt(i) - 97]++;
        scount[s.charCodeAt(i - plen) - 97]--;

        if(arraysEqual(scount, pcount)) {
            res.push(i-plen+1); //res是子串的开始索引，即刚才离开窗口的位置的下一个
        }
    }

    return res;

}

// 需要一个辅助函数判两数组相等，而在python中可以直接用==判断
function arraysEqual(arr1, arr2) {
    for(let i = 0; i < 26; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

const s = 'cbaebabacd';
const p = 'abc';
let res = findAnagrams(s,p);
console.log(res);