// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 请不要使用除法，时间复杂度O(n)
// 举例：
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]

// 方法1：左右乘积列表，两个数组，分别存储左边的数乘积和右边的数乘积
const productExceptSelf1 = function (nums) {
    let left = new Array(nums.length);
    left[0] = 1
    let right = new Array(nums.length);
    right[nums.length - 1] = 1
    let res = new Array(nums.length);
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }
    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = nums[j + 1] * right[j + 1]
    }
    for (let k = 0; k < nums.length; k++) {
        res[k] = left[k] * right[k]
    }
    return res
};

// 方法2：左边乘积列表遍历一边后，边遍历右边边计算结果，通过R来保存右边乘积列表的值
const productExceptSelf2 = function (nums) {
    let res = new Array(nums.length);
    res[0] = 1
    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i - 1] * res[i - 1]
    }
    let right = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] = res[j] * right
        right = nums[j] * right
    }
    return res
};

console.log(productExceptSelf2([1, 2, 3, 4]))
