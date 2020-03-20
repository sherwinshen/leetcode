// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

// 示例 1：
// 输入: s = "catsanddog"  wordDict = ["cat", "cats", "and", "sand", "dog"]
// 输出: [ "cats and dog", "cat sand dog" ]

// 方法1：暴力法
const wordBreak1 = function (s, wordDict) {
    let result = []
    if (wordDict.indexOf(s) !== -1 || s === '') {
        result.push(s)
    }
    for (let i = 1; i < s.length; i++) {
        if (wordDict.indexOf(s.substring(0, i)) !== -1) {
            let res = wordBreak1(s.substring(i, s.length), wordDict)
            if (res.length !== 0) {
                for (let j = 0; j < res.length; j++) {
                    result.push(s.substring(0, i) + ' ' + res[j])
                }
            }
        }
    }
    return result
};

// 方法2：记忆回溯法
const wordBreak2 = function (s, wordDict) {
    let hash = {}
    const word_Break = function (s, wordDict, start) {
        if (start in hash) {
            return hash[start]
        }
        let result = [];
        if (wordDict.indexOf(s.substring(start, s.length)) !== -1) {
            result.push(s.substring(start, s.length))
        }
        for (let end = start + 1; end < s.length; end++) {
            if (wordDict.indexOf(s.substring(start, end)) !== -1) {
                let res = word_Break(s, wordDict, end)
                if (res.length !== 0) {
                    for (let j = 0; j < res.length; j++) {
                        result.push(s.substring(start, end) + ' ' + res[j])
                    }
                }
            }
        }
        hash[start] = result
        return result
    }
    return word_Break(s, wordDict, 0)
};

// 方法3：动态规划，dp[k]数组存储s[0:k−1]可被拆分成合法单词的句子
const wordBreak3 = function (s, wordDict) {
    let dp = new Array(s.length + 1);
    dp[0] = ['']

    for (let i = 1; i <= s.length; i++) {
        let temp = []
        for (let j = 0; j < i; j++) {
            if (dp[j].length > 0 && wordDict.indexOf(s.substring(j, i)) !== -1) {
                for (let k = 0; k < dp[j].length; k++) {
                    if (dp[j][k] === '') {
                        temp.push(dp[j][k] + s.substring(j, i))
                    } else {
                        temp.push(dp[j][k] + ' ' + s.substring(j, i))
                    }
                }
            }
        }
        dp[i] = temp
    }
    return dp[s.length]
}