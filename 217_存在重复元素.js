// 给定一个整数数组，判断是否存在重复元素。如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
// 举例：
// 输入: [1,2,3,1]  输出: true

// 方法1：hash表存储
const containsDuplicate1 = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false
};

// 方法2：排序后遍历
const containsDuplicate2 = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};


console.log(containsDuplicate2([3,1, 2, 3, 4]))