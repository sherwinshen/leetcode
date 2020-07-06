// 给定一个Excel表格中的列名称，返回其相应的列序号。
// 举例：
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ZY -> 701

// 方法1：根据hash表
const titleToNumber1 = function (s) {
    const map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        res = res * 26 + map.indexOf(s[i]) + 1
    }
    return res
};

// 方法1：根据ACSII码
const titleToNumber2 = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        res = res * 26 + s[i].charCodeAt() - 64;
    }
    return res
};

