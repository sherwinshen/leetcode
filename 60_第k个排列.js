// 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 示例 1:
// 输入: n = 3, k = 3
// 输出: "213"

const getPermutation = function (n, k) {
    let res = []
    let temp = []
    for (let i = 1; i <= n; i++) {
        temp.push(i)
    }
    const fac = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];  //1!~9!
    for (let i = 0; i < n - 1; i++) {
        if (k % fac[n - i - 1] !== 0) {
            let num = Math.floor(k / fac[n - i - 1])
            res.push(temp[num])
            temp.splice(temp.indexOf(temp[num]), 1)
            k = k - num * fac[n - i - 1]
        } else {
            let num = k / fac[n - i - 1]
            res.push(temp[num - 1])
            temp.splice(temp.indexOf(temp[num - 1]), 1)
            k = k - (num - 1) * fac[n - i - 1]
        }
    }
    res = res.concat(temp)
    return res.join('')
};

res = getPermutation(3, 4)
console.log(res)
