/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const reverse = (index1, index2) => {
    const temp = s[index1];
    s[index1] = s[index2];
    s[index2] = temp;
  };
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    reverse(left, right);
    left++;
    right--;
  }
}
// @lc code=end
