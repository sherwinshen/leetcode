// 将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位。
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
// 举例：
// 输入: 4
// 输出: [
//     [".Q..",  // 解法 1
//         "...Q",
//         "Q...",
//         "..Q."],
//
//     ["..Q.",  // 解法 2
//         "Q...",
//         "...Q",
//         ".Q.."]
// ]

// 这题是典型的回溯算法，详见回溯算法解题框架

const solveNQueens = function (n) {
    let result = []
    const isValid = function(temp, j) {
        let i = temp.length
        for (let x = 0; x < i; x++) {
            let y = temp[x]
            if (y === j || x - y === i - j || x + y === i + j) {
                return false
            }
        }
        return true
    }
    const backtrack = function (n, temp) {
        if (temp.length === n) {
            result.push(
                temp.map(i => {
                    let strArr = Array(n).fill('.')
                    strArr.splice(i, 1, 'Q')
                    return strArr.join('')
                })
            )
            return true
        }
        for (let j = 0; j < n; j++) {
            if (isValid(temp, j)) {
                temp.push(j)
                backtrack(n, temp)
                temp.pop()
            }

        }
    }
    backtrack(n, [])
    return result
};

let res = solveNQueens(4)
console.log(res)
