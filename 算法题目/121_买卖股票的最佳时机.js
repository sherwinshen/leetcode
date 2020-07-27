// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
// 注意：你不能在买入股票前卖出股票。

// 示例:
// 输入: [7,1,5,3,6,4]
// 输出: 5（6-1）

const maxProfit = function (prices) {
    let max = 0
    const dp = new Array(prices.length).fill(0)
    dp[0] = prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i - 1], prices[i - 1])
    }
    for (let i = 1; i < prices.length; i++) {
        const temp = prices[i] - dp[i]
        if (temp > 0) {
            max = Math.max(max,temp)
        }
    }
    return max
};

const res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res)