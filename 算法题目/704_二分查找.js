// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 举例：
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4

const search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
};

let res = search([-1, 0, 3, 5, 9, 12], 2)
console.log(res)


// 在S中找满足条件的T
function slidingWindow(S, T) {
    let left = 0;
    let right = 0;

    // window 存储当前滑动窗口包含的内容

    while (right < S.length) {
        // window 添加 S[right] 的内容
        right++
        while (window存储的内容满足条件) {
            // window 删除S[left] 的内容
            left++
        }
    }
    // 返回数据视题目而定，也需要在前面过程中视题目而处理
}