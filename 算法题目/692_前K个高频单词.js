// 给一非空的单词列表，返回前 k 个出现次数最多的单词。
// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

// 示例 1：
// 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]

const topKFrequent = function (words, k) {
    const map = new Map()
    words.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })
    return [...map].sort((a, b) => {
        if (a[1] - b[1] === 0) {
            return a[0].localeCompare(b[0])
        }
        return b[1] - a[1]
    }).map(item => item[0]).slice(0, k)
};

const res = topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)
console.log(res)
