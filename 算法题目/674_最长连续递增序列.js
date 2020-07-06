// 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
// 示例:
// 输入: [1,3,5,4,7]
// 输出: 3
// 解释: 最长连续递增序列是 [1,3,5], 长度为3。

const findLengthOfLCIS = function (nums) {
    if (nums.length === 0) return 0
    let max = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            count++;
            if (i === nums.length - 1) {
                max = Math.max(count, max)
            }
        } else {
            max = Math.max(count, max)
            count = 1
        }
    }
    return max
};

res = findLengthOfLCIS([1,3,5,4,2,3,4,5])
console.log(res)
