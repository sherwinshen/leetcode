// 翻转一棵二叉树。
//
// 示例
// 输入：
//    4
//  /   \
// 2     7
// / \   / \
// 1   3 6  9
// 输出：
//     4
//   /   \
//  7     2
// / \   / \
// 9  6 3   1

const invertTree = function (root) {
    if (root !== null) {
        const temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
    }
    return root
};