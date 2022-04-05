/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
// @lc code=end
