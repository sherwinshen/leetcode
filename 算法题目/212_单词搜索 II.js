// 给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

// 示例:
// 输入:
// words = ["oath","pea","eat","rain"]
// board = [
//     ['o','a','a','n'],
//     ['e','t','a','e'],
//     ['i','h','k','r'],
//     ['i','f','l','v']
// ]
// 输出: ["eat","oath"]

// 构建字典树 - 参考题208
class TrieNode {
    constructor() {
        this.END = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
}

Trie.prototype.insert = function (word) {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
        if (currNode.children[word[i]] === undefined) {
            currNode.children[word[i]] = new TrieNode();
        }
        currNode = currNode.children[word[i]];
    }
    currNode.END = true;
};


const findWords = function (board, words) {
    let m = board.length;
    let n = board[0].length;
    // 将words初始化为字典树
    let wordsTrie = new Trie();
    for (let i = 0; i < words.length; i++) {
        wordsTrie.insert(words[i]);
    }
    // DFS 搜索
    let boardDFS = (i, j, curStr, currNode) => {
        // 找到对应
        if (currNode.END) {
            result.push(curStr);
            currNode.END = false; // 避免重复
        }
        if (i < 0 || j < 0 || i === m || j === n) {
            return false;
        }
        const restore = board[i][j];
        // 剪枝
        if (restore === '#' || !currNode.children[restore]) {
            return false
        }
        // 前进
        board[i][j] = '#';
        curStr += restore;
        boardDFS(i - 1, j, curStr, currNode.children[restore]);
        boardDFS(i + 1, j, curStr, currNode.children[restore]);
        boardDFS(i, j - 1, curStr, currNode.children[restore]);
        boardDFS(i, j + 1, curStr, currNode.children[restore]);
        // 还原(回溯)
        board[i][j] = restore;
    }
    // 寻找结果
    let result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            boardDFS(i, j, '', wordsTrie.root);
        }
    }
    return result
}

const res = findWords([
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
], ["oath", "pea", "eat", "rain"])
console.log(res)