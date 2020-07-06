// 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
// 举例：
// 输入: [4, 6, 7, 7]
// 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]

const findSubsequences = function (nums) {
    let res = []
    const dfs = function (nums, index, res, path) {
        if (path.length >= 2) {
            if (noRepeat(res, path)) {
                res.push(path)
            }
        }
        for (let i = index; i < nums.length; i++) {
            if (path.length === 0 || nums[i] >= path[path.length - 1]) {
                const newPath = path.concat([nums[i]])
                dfs(nums, i + 1, res, newPath)
            }
        }

    }
    const noRepeat = function (res, path) {
        for (let i = 0; i < res.length; i++) {
            if (res[i].toString() === path.toString()) {
                return false
            }
        }
        return true
    }
    dfs(nums, 0, res, [])
    return res
};