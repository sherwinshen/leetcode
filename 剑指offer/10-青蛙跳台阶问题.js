// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 示例 1：
// 输入：n = 2
// 输出：2

const numWays = function (n) {
    let map = {}
    const getNum = function (n) {
        if (n === 0) return 1
        if (n === 1 || n === 2) return n
        if (n in map) {
            return map[n]
        }
        const res = (getNum(n - 1) + getNum(n - 2)) % 1000000007
        map[n] = res
        return res
    }
    return getNum(n)
};

const res = numWays(44)
console.log(res)