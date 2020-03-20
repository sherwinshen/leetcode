// 给定一个大小为 n 的数组，找到其中的多数元素(给定的数组总是存在多数元素)。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 方法1：hash表，遍历1次记录出现次数，然后计算最大值，即可找到该元素
const majorityElement1 = function (nums) {
    let obj = {}
    for (let num of nums) {
        if (num in obj) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }
    let maxValue = 0
    let result = 0
    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key]
            result = key
        }
    }
    return result
};

// 方法2：排序过后，多数元素一定在中间位置出现
const majorityElement2 = function (nums) {
    nums.sort();
    const index = Math.floor(nums.length / 2);
    return nums[index];
};

// 方法2：分治思想，如果我们知道数组左边一半和右边一半的众数，我们就可以用线性时间知道全局的众数是哪个。
const majorityElement3 = function (nums) {
    function majority_element_rec(lo, hi) {
        if (lo === hi) {
            return nums[lo]
        }
        let mid = parseInt((hi - lo) / 2) + lo;
        let left = majority_element_rec(lo, mid);
        let right = majority_element_rec(mid + 1, hi);
        if (left === right) {
            return left
        }
        let left_count = 0;
        let right_count = 0;
        for (let i = 0; i < hi + 1; i++) {
            if (nums[i] === left) {
                left_count += 1
            }
            if (nums[i] === right) {
                right_count += 1
            }
        }
        return left_count > right_count ? left : right
    }
    return majority_element_rec(0, nums.length - 1)
};