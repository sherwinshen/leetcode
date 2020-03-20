// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
// 示例：
// 输入: "aab"
// 输出: [ ["aa","b"], ["a","a","b"] ]


// 方法1：分治思想，将大问题分解为小问题，利用小问题的结果，解决当前大问题。
const partition1 = function (s) {
    function isPalindrome(s) {
        const str = s.split('').reverse().join('');
        return str === s;
    }

    if (s.length === 0) {
        return [[]];
    }

    let result = [];
    for (let i = 1; i <= s.length; i++) {
        if (!isPalindrome(s.substring(0, i))) {
            continue;
        }
        const arr = [s.substring(0, i)];
        const temp = partition1(s.substring(i, s.length));
        for (let i = 0; i < temp.length; i++) {
            const el = arr.concat(temp[i]);
            result.push(el);
        }
    }
    return result;

};

// 方法2：回溯思想，深度优先遍历
const partition2 = function (s) {
    let temp = []
    let result = []

    function isPalindrome(s) {
        const str = s.split('').reverse().join('');
        return str === s;
    }

    if (s === "") {
        return result;
    }

    function dfs(s, n) {
        if (n === s.length) {
            let arr = [];
            for (let item of temp) {
                arr.push(item);
            }
            result.push(arr)
            return
        }
        for (let i = n; i < s.length; i++) {
            if (isPalindrome(s.substring(n, i + 1))) {
                let str = s.substr(n, i - n + 1)
                temp.push(str)
                dfs(s, i + 1)
                temp.pop()
            }
        }
    }

    dfs(s, 0)
    return result;
};
