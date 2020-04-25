// 给定一个未排序的整数数组，找出最长连续序列的长度。
// 要求算法的时间复杂度为 O(n)。

// 示例:
// 输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

const longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    // 第一步转成set，去重
    const set = new Set(nums);
    // 遍历set，从没有比当前num小的那个数开始查找，也就是说当前这个是序列的起始值
    let res = 1;
    for (let value of set) {
        let count = 1
        // 也就是说该元素为序列的起始值
        if (!set.has(value-1)) {
            while (set.has(++value)) {
                count++
            }
        }
        res = Math.max(res,count)
    }
    return res
};

const res = longestConsecutive([100, 4, 200, 1, 3, 2])
console.log(res)
