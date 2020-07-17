// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。
// 输入: S = "ADOBECODEBANC", T = "ABC"
// 输出: "BANC"

const minWindow = function (s, t) {
    let left = 0
    let right = 0

    let window = {}
    let need = {}
    let res = ''

    for (let i = 0; i < t.length; i++) {
        if (t[i] in need) {
            need[t[i]] += 1
        } else {
            need[t[i]] = 1
            window[t[i]] = 0
        }
    }

    const isValid = function (window) {
        for (let key in need) {
            if (window[key] < need[key]) {
                return false
            }
        }
        return true
    }

    while (right < s.length) {
        if (t.indexOf(s[right]) !== -1) {
            window[s[right]] += 1
        }
        right++

        while (isValid(window)) {
            let temp = s.slice(left, right)
            if (res === '') {
                res = temp
            } else {
                res = temp.length < res.length ? temp : res
            }

            if (t.indexOf(s[left]) !== -1) {
                window[s[left]] -= 1
            }
            left++
        }
    }
    return res
};


const res = minWindow("ADOBECODEBANC", "ABC")
console.log(res)