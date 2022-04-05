/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  // n & (n - 1) 可以直接将将 n 二进制表示的最低位 1 移除
  // 如果 n 是正整数并且 n & (n - 1) 为 0 那么 n 就是 2 的幂
  return n > 0 && (n & (n - 1)) === 0;
}
// @lc code=end
