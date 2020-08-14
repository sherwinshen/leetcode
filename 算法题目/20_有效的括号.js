// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例:
// 输入: "([)]"
// 输出: false

const isValid = function (s) {
    const arr = s.split('')
    const stack = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ')' || arr[i] === ']' || arr[i] === '}') {
            const temp = stack.pop()
            if ((arr[i] === ')' && temp !== '(') || (arr[i] === ']' && temp !== '[') || (arr[i] === '}' && temp !== '{')) {
                return false
            }
        } else {
            stack.push(arr[i])
        }
    }
    return stack.length === 0;
};

const res = isValid('[')
console.log(res)