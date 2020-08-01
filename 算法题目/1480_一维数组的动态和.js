// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
// 示例 1：
// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]

const runningSum = function (nums) {
    const length = nums.length
    if (length === 0) return []
    const result = new Array(length).fill(0)
    result[0] = nums[0]
    for (let i = 1; i < length; i++) {
        result[i] = result[i - 1] + nums[i]
    }
    return result
};

const result = runningSum([1, 2, 3, 4])
console.log(result)