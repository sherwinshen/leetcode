// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 举例：
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

// 递归解法
const coinChange_1 = function (coins, amount) {
    let memo = new Array(amount + 1).fill(0)
    const dp = function (n) {
        if (n === 0) return 0
        if (n < 0) return -1
        if (memo[n] !== 0) return memo[n]
        let res = Infinity
        for (let value of coins) {
            const sub = dp(n - value)
            if (sub !== -1) {
                res = Math.min(res, 1 + sub)
            }
        }
        const result = res === Infinity ? -1 : res
        memo[n] = result
        return result
    }
    return dp(amount)
};


// 迭代解法
const coinChange_2 = function (coins, amount) {
    let memo = new Array(amount + 1).fill(-1)
    memo[0] = 0
    for (let i = 1; i < memo.length; i++) {
        for (let value of coins) {
            if (value <= i) {
                if (memo[i - value] !== -1) {
                    memo[i] = memo[i] === -1 ? memo[i - value] + 1 : Math.min(memo[i], memo[i - value] + 1)
                }
            }
        }
    }
    return memo[amount]
}


res1 = coinChange_1([2], 3)
res2 = coinChange_2([2, 5, 10, 1], 27)
console.log(res1, res2)

