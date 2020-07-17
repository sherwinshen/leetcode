// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

const lengthOfLongestSubstring = function (s) {
    let left = 0
    let right = 0

    let window = ''
    let length = 0
    let max = 0

    while (right < s.length) {
        window += s[right]
        right++
        length++
        while (window.indexOf(s[right - 1]) !== window.length - 1) {
            length--
            max = Math.max(max, length)
            window = window.slice(1)
            left++
        }
    }
    max = Math.max(max, length)
    return max
}

res = lengthOfLongestSubstring(" ")
console.log(res)