/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  /* 方法一：不断pop并加至开头 */
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  /* 方法二：通过切片slice实现 */
  const rotatePoint = nums.length - k % nums.length;
  nums.splice(0, 0, ...nums.splice(rotatePoint));

  /* 方法三：反转数组所有元素，在转换点再左右分别反转一次即可 */
  // const rotatePoint = k % nums.length;
  // const reverse = (start, end) => {
  //   while (start < end) {
  //     [nums[start++], nums[end--]] = [nums[end], nums[start]];
  //   }
  // };
  // reverse(0, nums.length - 1);
  // reverse(0, rotatePoint - 1);
  // reverse(rotatePoint, nums.length - 1);
}
// @lc code=end
