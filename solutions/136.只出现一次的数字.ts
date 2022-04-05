/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i + 1];
  }
  return nums[0];
}
// @lc code=end
