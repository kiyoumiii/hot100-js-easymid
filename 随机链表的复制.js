var copyRandomList = function(head) {
    if (!head) return head;

    let cur = head;
    const mymap = new Map();

    while (cur) {
        mymap.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    cur = head;

    while (cur) {
        mymap.get(cur).next = mymap.get(cur.next) || null;
        mymap.get(cur).random = mymap.get(cur.random) || null;
        cur = cur.next;
    }

    return mymap.get(head);
};