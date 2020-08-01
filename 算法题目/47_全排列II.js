// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
// 示例:
// 输入: [1,1,2]
// 输出:
//     [
//         [1,1,2],
//         [1,2,1],
//         [2,1,1]
//     ]

const permuteUnique = function (nums) {
    const backtrack = function (first, nums) {
        let newNums = [...nums]
        if (first === length) {
            output.push(newNums)
        } else {
            let used = []
            for (let i = first; i < length; i++) {
                if (used.indexOf(newNums[i]) === -1) {
                    used.push(newNums[i])
                    swap(newNums, first, i)
                    backtrack(first + 1, newNums)
                    swap(newNums, first, i)
                }
            }
        }

    }

    const swap = function (arr, p, q) {
        let temp = arr[p]
        arr[p] = arr[q]
        arr[q] = temp
    }

    const length = nums.length;
    let output = []
    // backtrack(array,first)——first:当前到达的层数，used:当前这层使用过的数(用于剪枝)
    backtrack(0, nums);
    return output
};

res = permuteUnique([1, 1, 2])
console.log(res)


// 全排列
function permuteUnique(nums) {
    let result = []
    const length = nums.length
    if (nums.length === 0) return result
    nums.sort()
    const backtrack = function (paths, options) {
        if (paths.length === length) {
            result.push(paths)
            return true;
        }
        for (let i = 0; i < options.length; i++) {
            if (i + 1 <= options.length - 1 && options[i] === options[i + 1]) {
                continue
            }
            const newPaths = [...paths, options[i]]
            const newOptions = [...options]
            newOptions.splice(i, 1)
            backtrack(newPaths, newOptions)
        }

    }
    backtrack([], nums)
    return result
}

const res_permuteUnique = permuteUnique([1, 1, 2])
console.log('permuteUnique', res_permuteUnique)