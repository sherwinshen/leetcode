// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。必须在原数组上操作，不能拷贝额外的数组。尽量减少操作次数。
// 举例
// 输入: [0,1,0,3,12]  输出: [1,3,12,0,0]

// 方法1：双指针，i遍历数组，lastNonZeroFoundAt记录当前填充满非零数的位置
const moveZeroes1 = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }
    for (let j = lastNonZeroFoundAt; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums;
}

// 方法2：对方法1进行优化，避免最后还需要重新填满0区域
const moveZeroes2 = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            if (i > lastNonZeroFoundAt) {
                nums[i] = 0
            }
            lastNonZeroFoundAt++;
        }
    }
    return nums;
}
