// 反转一个单链表。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

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


// 迭代
const reverseList = function (head) {
    let pre = null
    let curr = head
    while (curr != null) {
        let temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp
    }
    return pre
};

// 递归
const reverseList2 = function (head) {
    if (head == null || head.next == null) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList2(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead
}
