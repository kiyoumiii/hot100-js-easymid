// 不仅要判断有没有环，若有环不用输出true要输出环的入口索引，无环输出null
// 注意：一定要在while循环条件里同时判断fast&&fast.next,不能只判断fast.next不加上fast否则还是不能通过
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast&&fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(slow==fast) {
            slow = head;
            while(slow&&fast) {
                if (slow == fast) {
                    return slow;
                }
                slow = slow.next;
                fast = fast.next;
            }
        }
    }
    return null;
    
};