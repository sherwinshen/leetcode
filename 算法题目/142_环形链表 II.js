// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 不允许修改给定的链表。你是否可以不用额外空间解决此题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 方法1：快慢指针找到相遇点，然后head头指针和相遇点开始走，再次相遇的点就是入口点
const detectCycle = function (head) {
    if (!head || head.next === null) return null;
    let slow = head;
    let fast = head;
    let start = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            while (slow !== start) {
                slow = slow.next
                start = start.next
            }
            return slow
        }
    }
    return null
}


// 方法2：额外对节点添加标记
const detectCycle2 = function (head) {
    while (head && head.next) {
        if (head.flag) {
            return head
        } else {
            head.flag = 1
            head = head.next
        }
    }
    return null;
};

// 方法3：数组判重
const detectCycle3 = function (head) {
    let arr = []
    while (head && head.next) {
        if (arr.includes(head)) {
            return head
        } else {
            arr.push(head)
        }
    }
    return null;
};
