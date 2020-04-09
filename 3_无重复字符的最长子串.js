// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

const lengthOfLongestSubstring = function (s) {
    let res = 0;
    let tmpStr = '';
    // i,j为活动窗口
    for (let i = 0, j = 0; j < s.length; j++) {
        if (tmpStr.indexOf(s[j]) !== -1) {
            i = i + tmpStr.indexOf(s[j]) + 1
            tmpStr = s.substring(i, j + 1)
        } else {
            tmpStr = s.slice(i, j+1)
            res = Math.max(res, tmpStr.length)
        }
    }
    return res
};

res = lengthOfLongestSubstring('pwwkew')
console.log(res)
