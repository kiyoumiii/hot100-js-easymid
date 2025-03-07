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
