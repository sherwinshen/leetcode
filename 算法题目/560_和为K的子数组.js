// 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
// 输入:nums = [1,1,1], k = 2
// 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

const subarraySum = function (nums, k) {
    const preSum = new Array(nums.length + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        preSum[i + 1] = preSum[i] + nums[i]
    }
    let result = 0

    for (let i = 1; i < preSum.length; i++) {
        for (let j = 0; j < i; j++) {
            if (preSum[i] - preSum[j] === k)
                result++;
        }
    }
    return result
};

const res = subarraySum([1,1,1], 2)
console.log(res)