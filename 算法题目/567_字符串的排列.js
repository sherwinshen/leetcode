// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
// 示例1:
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").

// 设置一个长度26的数组，记录s2的字母的频率，通过滑动窗口来增减字母频率，直到数组全为0
const checkInclusion = function (s1, s2) {
    let tempArr = new Array(26).fill(0);
    if (s1.length > s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        tempArr[s1[i].charCodeAt() - 97]++;
        tempArr[s2[i].charCodeAt() - 97]--;
    }
    const allZero = function (arr) {
        for (let value of arr) {
            if (value !== 0) {
                return false;
            }
        }
        return true;
    }
    if (allZero(tempArr)) return true
    for (let j = s1.length; j < s2.length; j++) {
        tempArr[s2[j-s1.length].charCodeAt() - 97]++;
        tempArr[s2[j].charCodeAt() - 97]--;
        if (allZero(tempArr)) return true
    }
    return false
};

res = checkInclusion("ab", "eidbaooo")
console.log(res)
