/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
  let queue = [];
  const m = grid.length;
  const n = grid[0].length;
  const isValid = (i, j) => {
    return i >= 0 && i < m && j >= 0 && j < n;
  };
  let cnts = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  // 先查找并记录初始损坏的橙子
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        cnts++;
        if (grid[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }
  }
  let day = 0;
  while (queue.length !== 0) {
    cnts -= queue.length;
    const newQueue = [];
    while (queue.length !== 0) {
      const [cur_i, cur_j] = queue.shift();
      for (let [add_i, add_j] of dirs) {
        if (
          isValid(cur_i + add_i, cur_j + add_j) &&
          grid[cur_i + add_i][cur_j + add_j] === 1
        ) {
          newQueue.push([cur_i + add_i, cur_j + add_j]);
          grid[cur_i + add_i][cur_j + add_j] = 2;
        }
      }
    }
    newQueue.length > 0 && day++;
    queue = newQueue;
  }
  return cnts == 0 ? day : -1;
}
// @lc code=end
