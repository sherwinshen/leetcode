// 编写一个程序，找到两个单链表相交的起始节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 方法1：通过数组来暂存
const getIntersectionNode = function (headA, headB) {
    let res = []
    while (headA) {
        res.push(headA)
        headA = headA.next
    }
    while (headB) {
        if (res.includes(headB)) {
            return headB
        }
    }
    return null
};

// 方法2：链表A遍历完后链接到B头部，链表B遍历完后链接到A头部，两者同步进行，如果遇到相同的则为入口，反之最后为null
const getIntersectionNode = function (headA, headB) {
    let pA = headA;
    let pB = headB;
    let flag;
    while (pA !== pB) {
        if(pA === headB && flag) return null
        if (pA) {
            pA = pA.next;
        } else {
            flag = true
            pA = headB;
        }
        pB = pB ? pB.next : headA;
    }
    return pA;
}
