/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) return root;
  const queue = [];
  queue.push({
    node: root,
    layer: 0,
  });
  while (queue.length !== 0) {
    const cur = queue.shift();
    if (queue.length === 0) {
      cur.node.next = null;
    } else if (queue[0].layer !== cur.layer) {
      cur.node.next = null;
    } else {
      cur.node.next = queue[0].node;
    }
    cur.node.left &&
      queue.push({
        node: cur.node.left,
        layer: cur.layer + 1,
      });
    cur.node.right &&
      queue.push({
        node: cur.node.right,
        layer: cur.layer + 1,
      });
  }
  return root;
}
// @lc code=end
