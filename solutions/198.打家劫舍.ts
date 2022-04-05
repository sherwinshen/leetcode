/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  const memo = new Array(n + 1).fill(0);
  memo[1] = nums[0];
  memo[2] = nums[1];
  for (let i = 3; i < n + 1; i++) {
    memo[i] = nums[i - 1] + Math.max(memo[i - 2], memo[i - 3]);
  }
  return Math.max(memo[n - 1], memo[n]);
}
// @lc code=end
