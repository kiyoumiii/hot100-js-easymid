function swapKthNode(head, k) {
    if (!head || k <= 0) return head;
    
    let forwardKth = head;
    for (let i = 1; i < k; i++) {
        if (!forwardKth.next) return head;
        forwardKth = forwardKth.next;
    }

    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        if (!fast) return head;
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    const backwardKth = slow;

    const temp = forwardKth.val;
    forwardKth.val = backwardKth.val;
    backwardKth.val = temp;

    return head;
}

// 辅助函数：将链表转换为数组
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while(current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}