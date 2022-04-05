/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = {} as { [key: number]: number };
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (rest in map) {
      return [map[rest], i];
    } else {
      map[nums[i]] = i;
    }
  }
}
// @lc code=end
