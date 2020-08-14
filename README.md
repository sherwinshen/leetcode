# 算法

简介：本项目主要记录[Leetcode](https://leetcode-cn.com)中的算法学习，主要基于Javascript语言(含少量Python)。

作者：[Envision](https://github.com/MrEnvision)         联系邮箱：[EnvisionShen@gmail.com](mailto:EnvisionShen@gmail.com)

参考资料：[fucking-algorithm](https://github.com/labuladong/fucking-algorithm)   个人总结：[背诵记忆版](算法笔记/背诵记忆版.md)



## 算法内容

1. 排序算法：快速排序、归并排序、计数排序
2. 搜索算法：回溯、递归、剪枝技巧
3. 图论：最短路、最小生成树、网络流建模
4. 动态规划：背包问题、最长子序列、计数问题
5. 基础技巧：分治、倍增、二分、贪心



## 数据结构

1. 数组与链表：单 / 双向链表、跳舞链
2. 栈与队列
3. 树与图：最近公共祖先、并查集
4. 哈希表
5. 堆：大 / 小根堆、可并堆
6. 字符串：字典树、后缀树



## 算法基本操作

数据结构的存储方式可以认为只有两种：**数组（顺序存储）和链表（链式存储）**，散列表、栈、队列、堆、树、图等均可以通过数组和链表来实现。那么算法呢，无非也就是针对数组和链表的增删改查，再简单说就是遍历+访问。

**数组遍历**

```js
function traverse(array) {
    for (let i = 0; i < array.length; i++) {
        // 访问array[i]   
    }
}
```

**链表遍历**

```js
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 迭代
function traverse(head) {
    for (let p = head; p != null; p = p.next) {
        // 访问p.val
    }
}

// 递归
function traverse(head) {
    if (head !== null) {
        // 访问head.val
        traverse(head.null)
    }
}
```

**二叉树遍历** - 链表进化

```js
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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

**N叉树遍历** - 二叉树进化

```js
function TreeNode(val) {
    this.val = val;
    this.children = [];
}

function traverse(head) {
    if(head !== null){
        // 访问当前节点head.val
        for(let i=0;i<head.children.length;i++){
            traverse(this.head.children[i])
        }
    }
}
```



## 算法解题框架

[1. 动态规划解题框架](算法笔记/动态规划解题框架.md)

[2. 回溯算法解题框架](算法笔记/回溯算法解题框架.md)

[3. 二分查找解题框架](算法笔记/二分查找解题框架.md)

[4. 滑动窗口解题框架](算法笔记/滑动窗口解题框架.md)

[5. 双指针解题框架](算法笔记/双指针解题框架.md)

[6. 排序算法总结](算法笔记/排序算法.md)

[7.位运算](算法笔记/位运算.md)



## 常见问题思路

- 两数之和问题，通常思路是排序再通过双指针来实现，或者通过 HashMap 或者 HashSet 处理无序数组的相关问题，注意在解决算法问题是要善于借助不同的数据结构来实现， 链表问题也可以借助数组来解决。
- 巧用前缀和来解决问题，[前缀和优化](https://github.com/labuladong/fucking-algorithm/blob/master/算法思维系列/前缀和技巧.md)。
- 递归是一种解题思维方式，递归代码最重要的两个特征：结束条件和自我调用。自我调用是在解决子问题，而结束条件定义了最简子问题的答案。

```js
function func(){
  // 最简子问题，结束条件
  // 自我调用，缩小规模
}
```

- 分治算法可以分三步走：分解 -> 解决 -> 合并

```
1.分解原问题为结构相同的子问题。
2.分解到某个容易求解的边界之后，进行第归求解。
3.将子问题的解合并成原问题的解。
```



------

如果发现本项目有错误，欢迎提交 issues 指正。