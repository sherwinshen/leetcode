// 给定一个二叉树，确定它是否是一个完全二叉树。

// 示例
// 输入：[1,2,3,4,5,6]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = function (root) {
    const queue = [root]
    while (queue[0] !== null) {
        const temp = queue.shift()
        queue.push(temp.left)
        queue.push(temp.right)
    }
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] !== null) {
            return false
        }
    }
    return true
};