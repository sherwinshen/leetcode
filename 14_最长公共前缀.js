// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 方法1：水平扫描法，依次遍历字符串，当最长公共前缀为空时停止遍历，反之遍历至结束
const longestCommonPrefix1 = function (strs) {
    if (strs === null || strs.length === 0) return "";
    let res = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (res === '') return res
        let max = res.length <= strs[i].length ? res.length : strs[i].length
        res = res.substring(0, max)
        for (let j = 0; j < max; j++) {
            if (res[j] !== strs[i][j]) {
                res = res.substring(0, j)
                break
            }
        }
    }
    return res
}

// 方法2：分治，LCP(Si，Sj)分解成两个子问题LCP(Si，Smid)和LCP(Smid+1，Sj)，其中mid为(i+j)/2
const longestCommonPrefix2 = function (strs) {
    const commonPrefix = function (strs, start, end) {
        if (start === end) return strs[start]
        const mid = Math.floor((start + end) / 2)
        const left = commonPrefix(strs, start, mid)
        const right = commonPrefix(strs, mid + 1, end)
        const max = left.length <= right.length ? left.length : right.length;
        let res = left.substring(0, max)
        for (let j = 0; j < max; j++) {
            if (left[j] !== right[j]) {
                res = res.substring(0, j)
                break
            }
        }
        return res
    }
    if (strs === null || strs.length === 0) return "";
    return commonPrefix(strs, 0, strs.length - 1)

}


// 方法23：答案一定在长度最小的字符串中，找到长度最小的字符串，对给字符串不断进行二分来判断，对于不符合的丢弃
// 代码略