// 快慢指针，快指针走两步慢指针走一步，如能相遇就是有环
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) { // 只要fast.next不是null，fast.next.next就不会报错，它可以是null
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
}



