// 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
// 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
// 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

// 举例：
// 输入: [1,2,3,4,5]
// 输出: true

// 方法1：动态规划，保留每个元素前面比自身小的数量，但是时间复杂度o(n^2)，空间复杂度o(n)
const increasingTriplet1 = function (nums) {
    let bp = new Array(nums.length);
    bp.fill(0);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                bp[i] = Math.max(bp[i], bp[j] + 1);
            }
        }
    }
    for (let i = 0; i < bp.length; i++) {
        if (bp[i] === 2) {
            return true;
        }
    }
    return false;
};

// 方法2：双指针small和mid
// 遍历数组，每遇到一个数字，我们将它和 small 和 mid 相比，
// 若小于等于 small ，则替换 small；
// 否则，若小于等于 mid，则替换 mid；
// 否则，若大于 mid，则说明我们找到了长度为 3 的递增数组
const increasingTriplet2 = function (nums) {
    let min1 = Infinity;
    let min2 = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (min1 >= nums[i]) {
            min1 = nums[i]
        } else if (min2 >= nums[i]) {
            min2 = nums[i]
        } else {
            return true
        }
    }
    return false;
};
