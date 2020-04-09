// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
// 示例:
// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]


const restoreIpAddresses = function (s) {
    let res = []
    const dfs = function (str, temp) {
        if (temp.length === 3) {
            if (regular(str)) {
                res.push(temp.join('.').concat('.' + str))
            }
        } else {
            for (let i = 1; i < 4; i++) {
                if (regular(str.slice(0, i))) {
                    dfs(str.slice(i),[...temp,str.slice(0, i)])
                }
            }
        }
    }
    // 用于判断是否有效, 0<=arr<=255且如果是一位可以为0，如果超过一位，不能以0开头
    const regular = function (arr) {
        if (!arr.length) return false
        return 0 <= +arr && +arr <= 255 && (arr.length > 1 ? !!+arr[0] : true)
    }
    dfs(s, [])
    return res
};

res = restoreIpAddresses("25525511135")
console.log(res)

