// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 示例:
// 输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]

const permute = function (nums) {
    if (nums.length === 1) {
        return [nums]
    }
    let res = []
    for (let i = 0; i < nums.length; i++) {
        const init = [nums[i]]
        let newArray = [...nums]
        newArray.splice(i, 1)
        const next = permute(newArray)
        for (let j = 0; j < next.length; j++) {
            res.push(init.concat(next[j]))
        }
    }
    return res
};

const permute2 = function (nums) {
    const backtrack = function (first, nums) {
        let newNums = [...nums]
        if (first === length) {
            output.push(newNums)
        } else {
            for (let i = first; i < length; i++) {
                swap(newNums, first, i)
                backtrack(first + 1, newNums)
                swap(newNums, first, i)
            }
        }
    }
    const swap = function (arr, p, q) {
        let temp = arr[p]
        arr[p] = arr[q]
        arr[q] = temp
    }
    let output = []
    const length = nums.length;
    backtrack(0, nums);
    return output
}

res = permute2([1, 2, 3])
console.log(res)
