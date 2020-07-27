// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例
// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释:  (5-1=4) + (6-3=3)

const maxProfit = function (prices) {
    let num = 0
    let cur = prices[0]
    for (let i = 1; i < prices.length; i++) {
        const temp = prices[i] - cur
        if (temp >= 0) {
            num += temp
            cur = prices[i]
        }else {
            cur = Math.min(prices[i], cur)
        }
    }
    return num
};

const res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res)