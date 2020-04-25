// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 给定二叉树 [3,9,20,null,null,15,7],
// 返回:
// [
//     [3],
//     [20,9],
//     [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const zigzagLevelOrder = function (root) {
    let res = []
    if (!root) return res
    let temp = [] // 暂存队列
    temp.push({level: 0, node: root});
    // 偶数层从左至右，奇数层从右至左
    while (temp.length > 0) {
        let {level, node} = temp.shift()
        if (!res[level]) {
            res[level] = [node.val]
        } else {
            if (level % 2 === 0) {
                res[level].push(node.val)
            } else {
                res[level].unshift(node.val)
            }
        }
        if (node.left) {
            temp.push({level: level + 1, node: node.left})
        }
        if (node.right) {
            temp.push({level: level + 1, node: node.right})
        }
    }
    return res
};
