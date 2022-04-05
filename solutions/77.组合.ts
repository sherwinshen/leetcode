/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let result = [];
  const backtrack = function (paths, options) {
    if (paths.length === k) {
      result.push(paths);
      return true;
    }
    for (let i = options; i <= n; i++) {
      paths.push(i);
      backtrack([...paths], i + 1);
      paths.pop();
    }
  };
  backtrack([], 1);
  return result;
}
// @lc code=end
