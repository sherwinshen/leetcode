/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  /* 设置一个长度26的数组，记录s2的字母的频率，通过滑动窗口来增减字母频率，直到数组全为0 */
  let tempArr = new Array(26).fill(0);
  if (s1.length > s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    tempArr[s1[i].charCodeAt(0) - 97]++;
    tempArr[s2[i].charCodeAt(0) - 97]--;
  }
  const allZero = function (arr) {
    for (let value of arr) {
      if (value !== 0) {
        return false;
      }
    }
    return true;
  };
  if (allZero(tempArr)) return true;
  for (let j = s1.length; j < s2.length; j++) {
    tempArr[s2[j - s1.length].charCodeAt(0) - 97]++;
    tempArr[s2[j].charCodeAt(0) - 97]--;
    if (allZero(tempArr)) return true;
  }
  return false;
}
// @lc code=end
