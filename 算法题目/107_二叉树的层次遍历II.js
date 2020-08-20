// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：
// [
//     [15,7],
//     [9,20],
//     [3]
// ]


const levelOrderBottom = function (root) {
    const res = []
    const queue = [{node: root, depth: 0}]
    while (queue.length > 0) {
        const temp = queue.shift()
        if (temp.node !== null) {
            if (res[temp.depth]) {
                res[temp.depth].push(temp.node.val)
            } else {
                res[temp.depth] = [temp.node.val]
            }
            if(temp.node.left) queue.push({node: temp.node.left, depth: temp.depth + 1})
            if(temp.node.right) queue.push({node: temp.node.right, depth: temp.depth + 1})
        }
    }
    return res.reverse()
};

