// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

// 示例 1:
// 输入: 4->2->1->3
// 输出: 1->2->3->4

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

const sortList = function (head) {
    let mergeList = (left, right) => {
        let res = new ListNode(0);
        let pre = res;
        while (left && right) {
            if (left.val <= right.val) {
                pre.next = left;
                left = left.next;
            } else {
                pre.next = right;
                right = right.next;
            }
            pre = pre.next;
        }
        pre.next = left ? left : right;
        return res.next;
    }
    let mergeSort = (node) => {
        if (!node || !node.next) return node;
        let mid = node;
        let fast = node.next;
        while (fast && fast.next) {
            mid = mid.next;
            fast = fast.next.next;
        }
        let left = node;
        let right = mid.next;
        mid.next = null;
        return mergeList(mergeSort(left), mergeSort(right));
    }
    return mergeSort(head);
};
