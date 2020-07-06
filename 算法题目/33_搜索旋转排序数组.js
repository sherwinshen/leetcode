// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
// 你可以假设数组中不存在重复的元素。的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4

const search = function (nums, target) {
    // 折半查找分割点
    const getSplit = function (nums, start, end) {
        if (nums[start] <= nums[end]) return start
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] > nums[mid + 1]) {
                return mid + 1;
            } else if (nums[mid] < nums[start]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    // 折半查找数值
    const binary = function (nums, start, end, target) {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return -1
    }
    const index = getSplit(nums, 0, nums.length - 1)
    if (target >= nums[0] && target <= nums[index - 1]) {
        return binary(nums, 0, index - 1, target)
    } else {
        return binary(nums, index, nums.length - 1, target)
    }
};

const res = search([3,1],3)
console.log(res)
