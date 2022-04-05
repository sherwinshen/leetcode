/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  /* 滑动窗口解题 */
  let left = 0;
  let right = 0;
  let max = 0;
  while (right <= s.length) {
    right++;
    const curStr = s.slice(left, right)
    const index = curStr.indexOf(s[right-1]);    
    if (index !== curStr.length - 1) {
      max = Math.max(max, right - left -1);
      left = left + index + 1
    }
  }
  return Math.max(max, right - left-1);
}
// @lc code=end
