// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

// 示例:
// 输入:
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
// 输出: 4

const maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0
    // 构建dp table
    const dp = []
    for (let i = 0; i <= matrix.length; i++) {
        dp.push([])
        for (let j = 0; j <= matrix[0].length; j++) {
            dp[i][j] = 0
        }
    }
    // 开始执行
    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                if (dp[i][j] > 0 && dp[i + 1][j] > 0 && dp[i][j + 1] > 0) {
                    const min = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1])
                    dp[i + 1][j + 1] = Math.pow(Math.sqrt(min) + 1, 2)
                } else {
                    dp[i + 1][j + 1] = 1
                }
            } else {
                dp[i + 1][j + 1] = 0
            }
            max = Math.max(dp[i + 1][j + 1], max)
        }
    }
    return max
};

const res = maximalSquare([
    ["0", "0", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"]]
)
console.log(res)