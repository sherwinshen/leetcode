// 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
// 举例：
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。


// 方法1：动态规划，bp数组存储 bp[i]=(i_min,i_max)记录当前最大值和最小值，注意遇到负数时，需要将当前bp反转再计算min和max
const maxProduct = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let max = -Infinity;
    let iMax = 1;  //以当前元素结尾的，最大的，子序列乘积
    let iMin = 1; //以当前元素结尾的，最小的，子序列乘积
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            const temp = iMax;
            iMax = iMin;
            iMin = temp;
        }
        iMax = iMax * nums[i] > nums[i] ? iMax * nums[i] : nums[i];
        iMin = iMin * nums[i] < nums[i] ? iMin * nums[i] : nums[i];
        max = iMax > max ? iMax : max;
    }
    return max;
};
