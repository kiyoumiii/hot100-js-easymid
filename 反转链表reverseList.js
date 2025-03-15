// 本题的核心思想是遍历链表，逐个改变指针方向
// 初始时，cur是head，pre是cur的先锋是null
// 遍历时，一定要先用tmp把cur.next保存一下再把pre赋给cur.next
// 改变完cur.next之后，要把pre移到cur了，然后把cur移到后面，注意交换的逻辑
// 最关键的一点是最后return 的是pre

var reverseList = function() {
    let pre = null;
    let cur = head;
    
    while(cur) {
        const tmp = cur.next;
        cur.next = pre; // 反转
        pre = cur;
        cur = tmp;
    }
    return pre;
}

// 三刷

var reverseList = function(head) {
    let pre = null;
    let cur = head;
    let tmp = null;

    while(cur) {
        tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }

    return pre;
};