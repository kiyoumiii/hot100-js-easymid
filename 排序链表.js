var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let mid = slow.next;
    slow.next = null;

    //递归
    let left = sortList(head);
    let right = sortList(mid);

    // 合并
    let dummy = new ListNode(0);
    let cur = dummy.next;

    while(left && right) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        }
        else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    // 将剩余的连接到结果链表的后面，因为有可能某一个链表还有没有链接的节点
    cur.next = left ? left : right;
    // 返回的是dummy.next
    return dummy.next;
}