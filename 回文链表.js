// 本题总体的思路比较明显，遍历后把数组反转，比较反转前后
// 注意1:遍历时一定要先push再next，千万不能写反！
// 注意2:比较反转前后数组时，千万不要直接===，而是遍历一下子吧。因为直接===实际比较的是两者的地址，总是部分错误
var isPalindrome = function(head) {
    let cur = head;
    let arr = [];
    while(cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    let reverse = arr.slice().reverse();
    // return arr === reverse;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==reverse[i]) {
            return false;
        }
    }
    return true;
};