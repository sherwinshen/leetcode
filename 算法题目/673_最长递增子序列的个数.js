// 给定一个未排序的整数数组，找到最长递增子序列的个数。注意，子序列并不需要连续
// 举例：
// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。

const findNumberOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1)
    const num = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] === dp[j] + 1) {
                    num[i] += num[j]
                } else if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    num[i] = num[j]
                }
            }
        }
    }
    let res = 0
    let max = 0
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > max) {
            max = dp[i]
            res = num[i]
        } else if (dp[i] === max) {
            res += num[i]
        }
    }
    return res
};

const res = findNumberOfLIS([2,2,2])
console.log(res)