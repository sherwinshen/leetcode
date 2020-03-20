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
    const partition = function (left, right, pivot_index) {
        const pivot = nums[pivot_index]
        const temp = nums[pivot_index]
        nums[pivot_index] = nums[right]
        nums[right] = temp

        let store_index = left
        for (let i = left; i < right; i++) {
            if (nums[i] < pivot) {
                const temp = nums[store_index]
                nums[store_index] = nums[i]
                nums[i] = temp
                store_index += 1
            }
        }
        const temp2 = nums[right]
        nums[right] = nums[store_index]
        nums[store_index] = temp2

        return store_index


    }
    const select = function (left, right, k_small) {
        if (left === right) {
            return nums[left]
        } else {
            const pivot_index = partition(left, right, left)
            if (pivot_index === k_small) {
                return nums[pivot_index]
            } else if (k_small < pivot_index) {
                return select(left, pivot_index - 1, k_small)
            } else {
                return select(pivot_index + 1, right, k_small)
            }
        }

    }
    return select(0, nums.length - 1, nums.length - k)
};

const res = findKthLargest3([3, 2, 1, 5, 6, 4], 2)
console.log(res)