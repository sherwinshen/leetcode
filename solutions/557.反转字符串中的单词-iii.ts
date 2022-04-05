/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  return s.split(' ').map((str) => str.split('').reverse().join('')).join(' ')
};
// @lc code=end

