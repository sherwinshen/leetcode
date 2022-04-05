/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const length = triangle.length;
  if (length === 0) return 0;
  if (length === 1) return triangle[0][0];
  const dp = [];
  for (let i = 0; i < length; i++) {
    dp.push(new Array(i + 1));
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  return Math.min(...dp[length - 1]);

};
// @lc code=end

