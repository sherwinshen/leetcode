// 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
// 要求返回这个链表的 深拷贝。
// 我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
// val：一个表示 Node.val的整数。
// random_index：随机指针指向的节点索引（范围从0到n-1）；如果不指向任何节点，则为 null。

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

// 第一次循环拷贝普通属性并记录random指针
// 第二次循环按照对应关系给random赋值

const copyRandomList = function (head) {
    if (!head) return null
    const newHead = new Node()
    let temp = newHead
    let cur = head
    const map = new Map()
    while (temp !== null) {
        temp.val = cur.val
        temp.next = cur.next ? new Node() : null
        map.set(cur, temp)
        cur = cur.next
        temp = temp.next
    }
    temp = newHead
    while (head) {
        temp.random = head.random ? map.get(head.random) : null
        head = head.next
        temp = temp.next
    }
    return newHead
};
