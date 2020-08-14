// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 给定二叉树 [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const maxDepth = function (root) {
    let max = 0
    const traversal = function (node, depth) {
        if (node === null) {
            max = Math.max(max, depth)
            return true
        }
        traversal(node.left, depth + 1)
        traversal(node.right, depth + 1)
    }
    traversal(root, 0)
    return max
};