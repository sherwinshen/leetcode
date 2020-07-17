// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
// 举例：
// 输入: amount = 5, coins = [1, 2, 5]
// 输出: 4
// 解释: 有四种方式可以凑成总金额:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1


const change = function (amount, coins) {
    let memo = new Array(amount + 1).fill(0)
    memo[0] = 1
    for (let val of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i - val >= 0) {
                memo[i] += memo[i - val]
            }
        }
    }
    return memo[amount]
};