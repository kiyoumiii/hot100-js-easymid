// 首先计算两个链表的长度差dis，将较长链表的头节点向前移动dis步，使两链表剩余长度相同
// 同时遍历两个链表，找到第一个相同节点，即交点

var getIntersectionNode = function() {
    const getLength = (head) => {
        let length = 0;
        while(head) {
            head = head.next;
            length++;
        }
        return length;
    };


    // 向前移动step步
    const moveFoward = (head,step) => {
        while(step > 0) {
            head = head.next;
            steps--;
        }
        return head;
    };

    // 计算两个链表长度差
    const dis = getLength(headA) - getLength(headB);

    // 移动较长的链表
    if (dis > 0) {
        headA = moveFoward(headA, dis);
    } else {
        headB = moveFoward(headB, Math.abs(dis));
    }

    // 同时遍历两个链表，找到交点
    while(headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null;//最后是没有交点的情况
}