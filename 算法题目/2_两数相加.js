// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储一位数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const head = new ListNode(-1)
    let cur = head
    let add = 0
    while (l1 !== null && l2 !== null) {
        const num = l1.val + l2.val + add
        if (num < 10) {
            cur.next = new ListNode(num)
            add = 0
        } else if (num < 20) {
            cur.next = new ListNode(num - 10)
            add = 1
        } else {
            cur.next = new ListNode(num - 20)
            add = 2
        }
        l1 = l1.next
        l2 = l2.next
        cur = cur.next
    }
    let temp = l1 === null ? l2 : l1
    while (temp !== null) {
        const num = temp.val + add
        if (num < 10) {
            cur.next = new ListNode(num)
            add = 0
        } else if (num < 20) {
            cur.next = new ListNode(num - 10)
            add = 1
        } else {
            cur.next = new ListNode(num - 20)
            add = 2
        }
        temp = temp.next
        cur = cur.next
    }
    if(add!==0){
        cur.next = new ListNode(add)
    }
    return head.next
};

