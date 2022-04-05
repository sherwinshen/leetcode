/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let res = 0;
  while (n) {
    n &= n - 1;
    res++;
  }
  return res;
}
// @lc code=end
