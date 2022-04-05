/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const leftValue = Math.abs(nums[left]);
    const rightValue = Math.abs(nums[right]);
    if (leftValue <= rightValue) {
      result.unshift(rightValue * rightValue);
      right--;
    } else {
      result.unshift(leftValue * leftValue);
      left++;
    }
  }
  return result;
}
// @lc code=end
