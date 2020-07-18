// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）,解集不能包含重复的子集。
// 示例:
// 输入: nums = [1,2,3]
// 输出:
//     [
//         [3],
//         [1],
//         [2],
//         [1,2,3],
//         [1,3],
//         [2,3],
//         [1,2],
//         []
//     ]


const subsets = function (nums) {
    let result = []
    const isRepeat = function (paths) {
        if (paths.length === 0) return false
        const index = paths.length - 1
        return paths.indexOf(paths[index]) !== index;
    }
    const backtrack = function (paths, options) {
        if (isRepeat(paths)) {
            return true
        }
        result.push(paths)
        for (let i = 0; i < options.length; i++) {
            paths.push(options[i])
            backtrack([...paths], [...options].slice(i))
            paths.pop()
        }
    }
    backtrack([], nums)
    return result
}

const res = subsets([1, 2, 3])
console.log(res)

