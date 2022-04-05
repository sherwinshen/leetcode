/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 双指针，i遍历数组，lastNonZeroFoundAt记录当前填充满非零数的位置
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      if (i > lastNonZeroFoundAt) {
        nums[i] = 0;
      }
      lastNonZeroFoundAt++;
    }
  }
}
// @lc code=end
