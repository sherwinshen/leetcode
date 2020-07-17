// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
// 说明：
// 字母异位词指字母相同，但排列不同的字符串。

// 输入: s: "cbaebabacd" p: "abc"
// 输出: [0, 6]
// 解释:
//     起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
//     起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

const findAnagrams = function (s, p) {
    let left = 0
    let right = 0

    let need = {}
    let window = {}
    let res = []
    for (let i = 0; i < p.length; i++) {
        if (p[i] in need) {
            need[p[i]] += 1
        } else {
            need[p[i]] = 1
        }
    }

    const isValid = function (window) {
        for (let key in need) {
            if (!window[key]) {
                return false
            }
            if (window[key] < need[key]) {
                return false
            }
        }
        return true
    }
    const sum = function (window) {
        let sum = 0
        for (let key in window) {
            sum += window[key]
        }
        return sum
    }

    while (right < s.length) {

        if (s[right] in window) {
            window[s[right]] += 1
        } else {
            window[s[right]] = 1
        }

        right++
        while (isValid(window)) {
            if (sum(window) === p.length) {
                res.push(left)
            }

            window[s[left]] -= 1
            left++
        }
    }

    return res

};

const res = findAnagrams('cbaebabacd', 'abc')
console.log(res)