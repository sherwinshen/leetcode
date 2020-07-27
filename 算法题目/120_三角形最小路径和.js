// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

// 举例:
// [2]
// [3,4]
// [6,5,7]
// [4,1,8,3]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

const minimumTotal = function (triangle) {
    const length = triangle.length
    if (length === 0) return 0
    if (length === 1) return triangle[0][0]
    const dp = []
    for (let i = 0; i < length; i++) {
        dp.push(new Array(i + 1))
    }
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < length; i++) {
        dp[i][0] = dp[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
        }
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
    }
    return Math.min(...dp[length - 1])
};

const res = minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
])
console.log(res)