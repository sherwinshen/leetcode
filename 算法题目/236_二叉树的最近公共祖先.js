// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


const lowestCommonAncestor = function (root, p, q) {
    if (root == null || root === p || root === q) {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }
    return null;
};


const lowestCommonAncestor2 = function (root, p, q) {
    if (root == null || root === p || root === q) {
        return root;
    }
    const getPath = function (node, target, temp) {
        if (node === null) {
            return []
        } else if (node === target) {
            return [...temp, target]
        } else {
            if (node.left) {
                let left = getPath(node.left, target, [...temp, node.left])
                if (left.length>0) return left
            }
            if (node.left) {
                let right = getPath(node.right, target, [...temp, node.right])
                if (right.length>0) return right
            }
        }
    }

    const p_path = getPath(root, p, [root])
    const q_path = getPath(root, q, [root])
    let i;
    for (i = 0; i < p_path.length; i++) {
        if (p_path[i] !== q_path[i]) {
            break
        }
    }
    return p_path[i - 1]
};
