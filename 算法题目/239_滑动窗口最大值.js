// 给定一个数组 nums，有一个大小为k的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回滑动窗口中的最大值。

// 举例:
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]

// 双向队列

const maxSlidingWindow = function (nums, k) {
    const result = []
    const window = []
    const pushData = function (val) {
        while (window.length > 0 && window[window.length - 1] < val) {
            window.pop();
        }
        window.push(val);
    }
    const popData = function (val) {
        if (window.length > 0 && window[0] === val) {
            window.shift();
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            pushData(nums[i])
        } else {
            pushData(nums[i])
            result.push(window[0]);
            popData(nums[i - k + 1]);
        }
    }
    return result
};

const res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(res)