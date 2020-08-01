// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
// 举例：
// s = "leetcode" 返回 0.
// s = "loveleetcode" 返回 2.

// 方法1：借助hash表记录
const firstUniqChar1 = function (s) {
    if (s === '') {
        return -1;
    }
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in hash)) {
            hash[s[i]] = i
        } else {
            hash[s[i]] = false
        }
    }
    for (let item in hash) {
        if (hash[item] !== false) {
            return hash[item]
        }
    }
    return -1
};

// 方法2：顺序索引和逆序索引是否一致
const firstUniqChar2 = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};


const result = firstUniqChar2('loveleetcode')
console.log(result)