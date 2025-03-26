
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