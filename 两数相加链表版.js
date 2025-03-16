// 这道题的两个数是用逆序的非空链表表示的
// 需要一个哨兵节点

var addTwoNumbers = function(l1,l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let carry = 0;

    while(l1 || l2 || carry) {
        if(l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            carry += l2.val;
            l2 = l2.next;
        }

        cur.next = new ListNode(carry % 10); // cur最开始是dummy，让它的下一位开始存储对10取余的结果，注意别忘了用一个new的ListNode把它包裹住
        carry = Math.floor(caryy / 10); // carry是进位，注意别忘了写Math.floor

        cur = cur.next; // 移动，刚好数学相加的时候是从后往前加的，这样和链表逆序刚好对上了，不需要额外的reverse之类的操作
    }

    return dummy.next; //最后返回的是头节点
}


// 三刷

var addTwoNumbers = function(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;

    let carry = 0;
    let curnum = 0;
    let tmp = 0;
    let dummy = new ListNode(0);
    let curnode = dummy;

    while(cur1 || cur2 || carry) {
        let cur1_val = cur1 ? cur1.val : 0;
        let cur2_val = cur2 ? cur2.val : 0;
        tmp = cur1_val + cur2_val + carry;
        curnum = tmp % 10;
        carry = Math.floor(tmp / 10);
        let node = new ListNode(curnum);
        curnode.next = node;
        curnode = curnode.next;
        if (cur1) {
            cur1 = cur1.next;
        }
        if (cur2) {
            cur2 = cur2.next;
        }
    }

    return dummy.next;

};