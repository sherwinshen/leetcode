/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res = [];
  const n = nums.length;
  const backtrack = (cur, rest) => {
    if (cur.length === n) {
      res.push(cur);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      const newArray = [...rest];
      newArray.splice(i, 1);
      backtrack([...cur, rest[i]], newArray);
    }
  };

  backtrack([], nums);
  return res;
}
// @lc code=end

function permute2(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const init = [nums[i]];
    let newArray = [...nums];
    newArray.splice(i, 1);
    const next = permute(newArray);
    for (let j = 0; j < next.length; j++) {
      res.push(init.concat(next[j]));
    }
  }
  return res;
}

function permute3(nums: number[]): number[][] {
  const backtrack = function (first, nums) {
    let newNums = [...nums];
    if (first === length) {
      output.push(newNums);
    } else {
      for (let i = first; i < length; i++) {
        swap(newNums, first, i);
        backtrack(first + 1, newNums);
        swap(newNums, first, i);
      }
    }
  };
  const swap = function (arr, p, q) {
    let temp = arr[p];
    arr[p] = arr[q];
    arr[q] = temp;
  };
  let output = [];
  const length = nums.length;
  backtrack(0, nums);
  return output;
};
