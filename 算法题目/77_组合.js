// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例:
// 输入: n = 4, k = 2
// 输出:
//     [
//         [2,4],
//         [3,4],
//         [2,3],
//         [1,2],
//         [1,3],
//         [1,4],
//     ]

const combine = function (n, k) {
    let result = []
    const backtrack = function (paths, options) {
        if (paths.length === k) {
            result.push(paths)
            return true
        }
        for (let i = options; i <= n; i++) {
            paths.push(i)
            backtrack([...paths], i + 1)
            paths.pop()
        }
    }
    backtrack([], 1, n, k)
    return result
};

const res = combine(4, 2)
console.log(res)