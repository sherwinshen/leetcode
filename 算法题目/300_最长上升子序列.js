// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

const lengthOfLIS = function(nums) {
    const length = nums.length
    if(length===0) return 0
    const dp = new Array(length)
    dp[0] = 1
    for (let i = 1; i < length; i++) {
        let max = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, dp[j] + 1)
            }
        }
        dp[i] = max
    }
    return Math.max(...dp)
};

const res = lengthOfLIS([10,9,2,5,3,7,101,18])
console.log(res)