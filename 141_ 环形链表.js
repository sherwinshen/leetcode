// 给定一个链表，判断链表中是否有环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。


// 方法1：快慢指针：慢指针走一步，快指针走两步，如果有环，则两者一定会相遇
// 方法2：hash表存储节点是否访问过，如果遇到已经访问过的则表示存在环

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle1 = function (head) {
    let fast = head
    let slow = head
    while (fast && slow && fast.next) {
        fast = fast.next.next;
        slow = fast.next
        if (fast === slow) {
            return true
        }
    }
    return false
};


const hasCycle2 = function (head) {
    let map = new Map();
    let node = head;
    map.set(node, true)
    while (node.next) {
        if(map.get(node.next)) return true;
        map.set(node.next, true);
        node = node.next
    }
    return false
};
