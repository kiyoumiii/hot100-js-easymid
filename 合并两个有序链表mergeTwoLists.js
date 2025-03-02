// 合并两个有序链表，使得合并后仍然有序，如果题目没有说明已经定义好每个单节点了就把ListNode如下自定义一下
// 比较两个链表的头节点值，谁比较小就选中谁连接到结果链表中,递归或迭代处理它剩余的节点和另一个链表，然后返回它

class ListNode {
    constructor(val = 0, next = null) {// 类的构造函数
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) { // 比较两个的头节点的值
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }

    else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }

}