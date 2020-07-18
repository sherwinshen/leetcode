// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 举例：
// 输入: [1,2,2]
// 输出:
//     [
//         [2],
//         [1],
//         [1,2,2],
//         [2,2],
//         [1,2],
//         []
//     ]

const subsetsWithDup = function (nums) {
    nums.sort()
    const result = []
    const backtrack = function (paths, options) {
        result.push(paths)
        for (let i = 0; i < options.length; i++) {
            if (i - 1 >= 0 && options[i] === options[i - 1]) continue
            paths.push(options[i])
            backtrack([...paths], [...options].slice(i+1))
            paths.pop()
        }
    }
    backtrack([], nums)
    return result
};

const res = subsetsWithDup([4,4,4,1,4])
console.log(res)