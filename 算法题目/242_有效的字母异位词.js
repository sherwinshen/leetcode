// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 举例：
// 输入: s = "anagram", t = "anagram"  输出: true
// 输入: s = "rat", t = "car"  输出: false


// 方法1：字符串切割成数组，数组排序，由于数组不能直接判等，再将其转成string判等
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let temp1 = s.split('').sort();
    let temp2 = t.split('').sort();
    return temp1.toString() === temp2.toString();
};

// 方法2：由于仅存在a-z的字母，可以构建hash表，比较每个字母出现的次数是否一致来判断
// 代码略
