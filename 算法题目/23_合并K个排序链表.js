// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:
// 输入:
// [
//     1->4->5,
//     1->3->4,
//     2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 方法1：借助数组存储所有节点
const mergeKLists = function (lists) {
    let len = lists.length;
    if (len === 0) return null;
    if (len === 1) return lists[0];
    let arr = [];
    for (let i = 0; i < len; i++) {
        let temp = lists[i];
        while (temp) {
            arr.push(temp.val);
            temp = temp.next;
        }
    }
    arr.sort((a, b) => a - b);
    let heap = new ListNode();
    let cur = heap;
    for (let i = 0, len = arr.length; i < len; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return heap.next;
};


// 方法2：两两归并
const mergeKLists2 = function (lists) {
    if (lists.length === 0) return null;
    const merge = function (head1, head2) {
        let init = new ListNode(0);
        let flag = init
        while (head1 && head2) {
            if (head1.val <= head2.val) {
                flag.next = head1
                flag = flag.next
                head1 = head1.next
            } else {
                flag.next = head2
                flag = flag.next
                head2 = head2.next
            }
        }
        if(head1) flag.next = head1
        if(head2) flag.next = head2
        return init.next
    }
    const mergeSort = function (lists) {
        if (lists.length === 1) {
            return lists[0]
        }
        let mid = Math.floor(lists.length / 2)
        let head1 = mergeSort(lists.slice(0, mid + 1))
        let head2 = mergeSort(lists.slice(mid + 1, lists.length))
        return merge(head1, head2)
    }
    return mergeSort(lists)
}

