// 给定一个字符串，逐个翻转字符串中的每个单词。
// 示例 1：
// 输入: "the sky is blue"
// 输出: "blue is sky the"

const reverseWords = function (s) {
    let arr = s.split(' ');
    let newArr = arr.filter(value => {
        return value !== '';
    })
    newArr.reverse();
    return newArr.join(' ');
};
res = reverseWords("a good   example")
console.log(res)
