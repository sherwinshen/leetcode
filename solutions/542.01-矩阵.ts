/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
  let m = mat.length;
  let n = mat[0].length;
  // 目标结果
  let res = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  // 如果 (i, j) 的元素为 0，那么距离为 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {      
      if (mat[i][j] === 0) {
        res[i][j] = 0;
      }
    }
  }
  
  // 水平向右移动 + 竖直向下移动
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);
      if (j - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
    }
  // 水平向左移动 + 竖直向下移动
  for (let i = m - 1; i >= 0; i--)
    for (let j = 0; j < n; j++) {
      if (i + 1 < m) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);
      if (j - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
    }
  // 水平向左移动 + 竖直向上移动
  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 < m) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);
      if (j + 1 < n) res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
    }
  // 水平向右移动 + 竖直向上移动
  for (let i = 0; i < m; i++)
    for (let j = n - 1; j >= 0; j--) {
      if (i - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);
      if (j + 1 < n) res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
    }
  return res;
}
// @lc code=end
