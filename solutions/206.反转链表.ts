/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/* 迭代 */
function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let curr = head;
  while (curr != null) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
}
/* 递归 */
function reverseList2(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  let next = head.next; // next节点，反转后是最后一个节点
  let reverseHead = reverseList2(next);
  head.next = null; // 裁减 head
  next.next = head; // 尾接
  return reverseHead;
}

// @lc code=end
