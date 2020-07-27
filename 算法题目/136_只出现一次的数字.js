// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 算法应该具有线性时间复杂度。


// 方法1：排序，两两对比
const singleNumber1 = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

// 方法2：异或操作，两个相等的数异或为0；一个不为0的数与0异或为这个数本身。
const singleNumber2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[0] = nums[0] ^ nums[i + 1];
    }
    return nums[0];
};


