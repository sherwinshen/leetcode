// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 举例：
// 输入: s = "leetcode", wordDict = ["leet", "code"]  输出: true
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]  输出: false


// 方法1：暴力使用递归和回溯。为了找到解，我们可以检查字典单词中每一个单词的可能前缀，如果在字典中出现过，那么去掉这个前缀后剩余部分回归调用。
const wordBreak1 = function (s, wordDict) {
    if (wordDict.indexOf(s) !== -1) {
        return true
    }
    for (let i = 1; i < s.length; i++) {
        if (wordDict.indexOf(s.substring(0, i)) !== -1) {
            if (wordBreak1(s.substring(i, s.length), wordDict)) {
                return true
            }
        }
    }
    return false
};

// 方法2：改进方法1，使用一个数组来存储子问题的解
const wordBreak2 = function (s, wordDict) {
    if (wordDict.indexOf(s) !== -1) {
        return true
    }
    let memo = new Array(s.length);
    const word_Break = function (s, wordDict, start) {
        if (memo[start] != null) {
            return memo[start];
        }
        for (let i = start + 1; i <= s.length; i++) {
            if (wordDict.indexOf(s.substring(0, i)) !== -1 && wordBreak2(s.substring(i, s.length), wordDict, i)) {
                return memo[start] = true;
            }
        }
        return memo[start] = false;
    }
    return word_Break(s, wordDict, 0)
};

// 方法3：动态规划
const wordBreak3 = function (s, wordDict) {
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length]
};
