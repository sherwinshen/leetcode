# 深度/广度优先搜索算法解题框架

## 1. 深度优先搜索算法 DFS

深度优先搜索算法DFS即**回溯算法**，回溯算法主要包含三个特征：

1. 路径：已经做出的选择
2. 选择列表：当前可以做的选择
3. 结束条件：到达决策树底层，无法再做选择的条件

**常见场景：**

- **子集问题**可以利用数学归纳思想，假设已知一个规模较小的问题的结果，思考如何推导出原问题的结果，也可以用回溯算法，要用 `start` 参数排除已选择的数字。

- **组合问题**利用的是回溯思想，结果可以表示成树结构，我们只要套用回溯算法模板即可，关键点在于要用一个 `start` 排除已经选择过的数字。

- **排列问题**是回溯思想，也可以表示成树结构套用算法模板，关键点在于使用 `contains` 方法排除已经选择的数字。

**解题模版：**

```js
let result = []
function backtrack(路径, 选择列表){
  // 结束条件
  if(满足结束条件){
    result.push(路径)
    return
  }
  // 进行选择
  for(let 选择 of 选择列表){
    // 做选择加入路径
    路径.push(选择)
    // 进入下一层
    backtrack(路径, 选择列表)
    // 撤销选择，进行for循环的下一轮
    路径.pop(选择)
  } 
}
```

## 2. 广度优先搜索算法 BFS

```js
// 计算从起点 start 到终点 target 的最近距离
function BFS(root, target) {
  const queue = []; // 核心数据结构-队列
  const visited = []; // 记录已访问，避免走回头路
  let step = 0;  // 根节点到目标节点之间的深度
  
  queue.push(root); // 将起点加入队列
  visited.push(root);
  
  while (queue.length !== 0) {
    const curSize = queue.lenght;
    /* 将当前队列中的所有节点向四周扩散 */
    for(let i=0; i<curSize; i++) {
      const cur = queue.shift();
      /* 划重点：这里判断是否到达终点 */
      if (cur.value === target) {
        return step
      }
      /* 将 cur 的相邻节点加入队列 */
      for(let i=0; i< cur.children.length; i++) {
        /* 如果不在visited中*/
         if (cur.children[i] !== visited) {
           queue.push(cur.children[i]);
           visited.push(cur.children[i]);
         }
      }
    }
    /* 划重点：更新步数在这里 */
    step++;
  }
}
```

---

如果发现本项目有错误，欢迎提交 issues 指正。
