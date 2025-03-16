// 同样需要dummy

var swapPairs = function(head) {
    let dummy = new ListNode(0,head);
    let cur = dummy;

    while (cur && cur.next && cur.next.next) {
        let firstnode = cur.next;
        let secondnode = cur.next.next;
        let nextpair = secondnode.next;

        cur.next = secondnode;
        secondnode.next = firstnode;
        firstnode.next = nextpair;

        cur = firstnode;
    }

    return dummy.next;
    
};