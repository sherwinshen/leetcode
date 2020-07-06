// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。要求使用空间复杂度为 O(1) 的 原地 算法。至少3种方法
// 举例
// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]

// 方法1：pop最后一个加至开头
const rotate1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        const temp = nums.pop()
        nums.unshift(temp)
    }
    return nums
};

// 方法2：通过切片slice实现 - 缺点在于slice返回新的数组了，空间复杂度为o(n)，即不在原数组上操作
const rotate2 = function (nums, k) {
    const rotatePoint = nums.length - k % nums.length;
    return nums.slice(rotatePoint).concat(nums.slice(0, rotatePoint))
}

// 方法3： 通过splice实现
const rotate3 = function (nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k));
    return nums
}

// 方法4： 反转数组所有元素，在转换点再左右分别反转一次即可
const rotate4 = function (nums, k) {
    const rotatePoint = k % nums.length;
    nums.reverse()
    return nums.slice(0, rotatePoint).reverse().concat(nums.slice(rotatePoint).reverse())
}

console.log(rotate4([1,2,3,4,5,6,7],3))
