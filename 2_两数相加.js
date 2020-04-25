// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

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
    let initNode = new ListNode(-1)
    let flag = initNode
    let temp = 0
    while (l1 !== null && l2 !== null) {
        let sum = l1.val + l2.val + temp
        if (sum > 19) {
            temp = 2
        } else if (sum > 9) {
            temp = 1
        } else {
            temp = 0
        }
        flag.next = new ListNode(sum - 10 * temp)
        flag = flag.next
    }
    if (temp !== 0) {
        flag.next = new ListNode(temp)
    }
    return initNode.next
};

