// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 方法1：排序后操作
const findKthLargest1 = function (nums, k) {
    nums.sort((a, b) => {
        return a - b
    })
    return nums[nums.length - k]
};

// 方法2：创建一个长度为k的堆，将所有数组中的元素加入堆中，并保持堆的大小小于等于k。
const findKthLargest2 = function (nums, k) {
    // 基于python利用heapq标准库实现更加方便
};

// 方法3：快速排序，左右子数组某一个的长度大于k则，目标值一定在该子数组中
const findKthLargest3 = function (nums, k) {
    const partition = function (low, high) {
        const pivot = nums[low]
        while (low < high) {
            while (low < high && nums[high] < pivot) {
                high--
            }
            nums[low] = nums[high]
            while (low < high && nums[low] >= pivot) {
                low++
            }
            nums[high] = nums[low]
        }
        nums[low] = pivot
        return low
    }
    const sort = function (low, high) {
        if (low < high) {
            const index = partition(low, high)
            if (index === k - 1) {
                return true
            } else if (index < k - 1) {
                sort(index + 1, high)
            } else {
                sort(low, index - 1)
            }

        }
    }
    sort(0, nums.length - 1)
    return nums[k - 1]
};

const res = findKthLargest3([3, 2, 1, 5, 6, 4], 2)
console.log(res)
