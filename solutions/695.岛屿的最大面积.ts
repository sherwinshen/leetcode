/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  // 深度遍历搜索
  const dfs = function (grid, i, j) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === 0
    ) {
      return 0;
    }
    let area = 1;
    grid[i][j] = 0;
    area += dfs(grid, i + 1, j);
    area += dfs(grid, i - 1, j);
    area += dfs(grid, i, j + 1);
    area += dfs(grid, i, j - 1);
    return area;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(grid, i, j));
      }
    }
  }
  return max;
}
// @lc code=end
