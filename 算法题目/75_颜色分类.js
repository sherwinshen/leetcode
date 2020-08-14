// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 示例:
// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]

// 思路：借助快速排序的变形三路快排
// 0到p0值均为0，p1至末尾均为2，p0和p1之间的为未知或为1
const sortColors = function (nums) {
    let p0 = 0
    let p1 = nums.length - 1
    let cur = 0
    const swap = function (i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    while (cur <= p1) {
        if (nums[cur] === 0) {
            swap(p0, cur)
            p0++
            cur++
        } else if (nums[cur] === 2) {
            swap(p1, cur)
            p1--
        } else {
            cur++
        }
    }
    return nums
};

const res = sortColors([2, 0, 2, 1, 1, 0])
console.log(res)