// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//
// 示例:
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6 - [4,-1,2,1]

const maxSubArray = function (nums) {
    if (nums.length === 0) return 0
    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i]
        max = Math.max(max, dp[i])
    }
    return max
};

const res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(res)