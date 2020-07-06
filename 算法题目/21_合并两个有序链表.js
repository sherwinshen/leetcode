// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = function (l1, l2) {
    let initNode = new ListNode(-1);
    let flag = initNode
    while (l1!== null && l2!== null) {
        if (l1.val <= l2.val) {
            flag.next = l1
            l1 = l1.next
        } else {
            flag.next = l2
            l2 = l2.next
        }
        flag=flag.next
    }
    flag.next = l1 ? l1 : l2
    return initNode.next
};
