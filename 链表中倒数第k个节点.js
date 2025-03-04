// 总体思路：声明一个左指针一个右指针，初始都在head
//右指针先走k步，然后左右指针一起走，那么它们之间的距离始终为k
// 右指针走到尽头的时候，左指针的位置就是倒数第k个节点了

var trainingPlan = function(head, k) {
    let left = head;
    let right = head;

    while(k) {
        right = right.next;
        k--;
    }

    while(right) {
        left = left.next;
        right = right.next;
    }

    return right;
}