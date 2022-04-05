/*
 * @lc app=leetcode.cn id=784 lang=typescript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
function letterCasePermutation(s: string): string[] {
  const res = [];
  const n = s.length;
  const backtrack = (cur, index) => {
    if (cur.length === n) {
      res.push(cur.join(''));
      return;
    }
    const isNum = /[0-9]/.test(s[index]);
    if (isNum) {
      backtrack([...cur, s[index]], index + 1);
    } else {
      backtrack([...cur, s[index].toLowerCase()], index + 1);
      backtrack([...cur, s[index].toUpperCase()], index + 1);
    }
  };
  backtrack([], 0);
  return res;
}
// @lc code=end
