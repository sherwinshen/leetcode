// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

// 举例：
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app");     // 返回 true

const TrieNode = function () {
    this.next = {};
    this.isEnd = false;
};

const Trie = function () {
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {

    let nowNode = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!nowNode.next[word[i]]) {
            nowNode.next[word[i]] = new TrieNode();
        }
        nowNode = nowNode.next[word[i]]
    }
    nowNode.isEnd = true
};

Trie.prototype.search = function (word) {
    let nowNode = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!nowNode.next[word[i]]) {
            return false
        }
        nowNode = nowNode.next[word[i]]
    }
    return nowNode.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
    let nowNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
        if (!nowNode.next[prefix[i]]) {
            return false
        }
        nowNode = nowNode.next[prefix[i]];
    }
    return true;
};





const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");
console.log(trie.search("app"));     // 返回 true