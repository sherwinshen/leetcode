// 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 给定如下二叉树，以及目标和 sum = 22，
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// 返回:
//
//     [
//         [5,4,11,2],
//         [5,8,4,5]
//     ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
    const result = []
    const backtrace = function (root, arr, curSum) {
        if (!root) return false
        if (!root.left && !root.right && curSum + root.val === sum) {
            result.push([...arr, root.val])
        }
        if (root.left) {
            backtrace(root.left, [...arr, root.val], curSum + root.val)
        }
        if (root.right) {
            backtrace(root.right, [...arr, root.val], curSum + root.val)
        }
    }
    backtrace(root, [], 0)
    return result
};