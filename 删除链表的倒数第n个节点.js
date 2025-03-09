// 链表问题都用dummy哨兵节点
// 在链表中删除节点，如果要删除第n个节点就要找到它前面一个节点
// 那么显然要删除倒数第n个节点就要先找到倒数第n+1个节点
// 快指针先走n+1步，慢指针在dummy处，这样fast和slow之间就相隔n+1个节点
// 然后同时移动fast和slow,直到fast指向链表末尾,slow就在倒数第n+1个节点处，直接把它删除
// 

var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0, head);
    let fast = dummyHead, slow = dummyHead;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // 快慢指针同时移动
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    // 等fast到末尾的时候slow就找到倒数第n+1个节点了

    // 删除倒数第n个节点
    slow.next = slow.next.next;

    // 返回链表的头节点
    return dummyHead.next;
}