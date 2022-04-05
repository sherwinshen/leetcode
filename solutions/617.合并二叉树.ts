/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  const merge = (cur_root1, cur_root2) => {
    const newNode = new TreeNode();
    newNode.val = (cur_root1?.val ?? 0) + (cur_root2?.val ?? 0);
    if (cur_root1?.left || cur_root2?.left) {
      newNode.left = merge(cur_root1?.left, cur_root2?.left);
    } else {
      newNode.left = null;
    }
    if (cur_root1?.right || cur_root2?.right) {
      newNode.right = merge(cur_root1?.right, cur_root2?.right);
    } else {
      newNode.right = null;
    }
    return newNode;
  };

  return root1 || root2 ? merge(root1, root2) : null;
}
// @lc code=end
