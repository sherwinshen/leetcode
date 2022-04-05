# LeetCode 算法题解

> 本项目主要包括 [Leetcode](https://leetcode-cn.com) 中算法题解（主要基于 TS/JS语言）以及常见算法的解题思路和框架。推荐阅读 👉 [fucking-algorithm](https://github.com/labuladong/fucking-algorithm)   

# 1. 算法内容

- 排序算法：快速排序、归并排序、计数排序
- 搜索算法：回溯、递归、剪枝技巧
- 图论：最短路、最小生成树、网络流建模
- 动态规划：背包问题、最长子序列、计数问题
- 基础技巧：分治、倍增、二分、贪心
- [数据结构](./notes/data-structure.ts)：
  - 数组与链表：单 / 双向链表
  - 栈与队列
  - 树与图：最近公共祖先、并查集
  - 哈希表
  - 堆：大 / 小根堆、可并堆
  - 字符串：字典树、后缀树

# 2. 算法基本操作

数据结构的存储方式可以认为只有两种：**数组（顺序存储）和链表（链式存储）**，散列表、栈、队列、堆、树、图等均可以通过数组和链表来实现。那么算法呢，无非也就是针对数组和链表的增删改查，再简单说就是遍历+访问。

## 2.1 数组遍历

```js
function traverse(array) {
  for (let i = 0; i < array.length; i++) {
    // 访问array[i]   
  }
}
```

## 2.2 链表遍历

```javascript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 迭代
function traverse(head) {
  for (let p = head; p != null; p = p.next) {
    // 访问 p.val
  }
}

// 递归
function traverse(head) {
  if (head !== null) {
    // 访问 head.val
    traverse(head.null)
  }
}
```

## 2.3 进阶遍历

### 2.3.1 二叉树遍历 - 链表进化

```javascript
class TreeNode(val) {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(head) {
  if(head !== null){
    // 前序遍历 head.val
    traverse(head.left)
    // 中序遍历 head.val
    traverse(head.right)
    // 后序遍历 head.val
  }
}
```

### 2.3.2 N叉树遍历 - 二叉树进化

```javascript
class TreeNode(val) {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

function traverse(head) {
  if(head !== null){
    // 访问当前节点head.val
    for(let i = 0; i < head.children.length; i++){
      traverse(this.head.children[i])
    }
  }
}
```

# 3. 算法解题框架

## 3.1 常见解题框架

- [动态规划解题框架](./notes/动态规划解题框架.md)
- [深度/广度优先搜索算法解题框架](./notes/DFS和BFS解题框架.md) （深度优先搜索算法即回溯算法）
- [二分查找解题框架](./notes/二分查找解题框架.md)
- [滑动窗口解题框架](./notes/滑动窗口解题框架.md)
- [双指针解题框架](./notes/双指针解题框架.md)
- [排序算法](./notes/排序算法.md)
- [位运算](./notes/位运算.md)

## 3.2 常见解题思路

### 3.2.1 分治

分治主要分为三步走：分解 -> 解决 -> 合并

1. 分解原问题为结构相同的子问题。
2. 分解到某个容易求解的边界之后，进行第归求解。
3. 将子问题的解合并成原问题的解。

### 3.2.2 递归

递归主要包括两部分内容：结束条件和自我调用，其中自我调用是在解决子问题，而结束条件定义了最简子问题的答案。

```javascript
function recursion(){
  // 最简子问题，结束条件
  // 自我调用，缩小规模
}
```

------

如果发现本项目有错误，欢迎提交 issues 或联系 [Sherwin](https://github.com/sherwinshen)。

