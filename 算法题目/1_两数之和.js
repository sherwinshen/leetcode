// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 举例：
// 给定 nums = [2, 7, 11, 15], target = 9
// 返回 [0, 1]

// 方法1：通过一个hash表来存储当前数字需要的剩余数字
const twoSum = function (nums, target) {
    let temp = {}
    for (let i = 0; i < nums.length; i++) {
        const left = target - nums[i];
        if (nums[i] in temp) {
            return [temp[nums[i]], i]
        } else {
            temp[left] = i
        }
    }
};
