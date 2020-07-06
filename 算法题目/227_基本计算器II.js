// 实现一个基本的计算器来计算一个简单的字符串表达式的值。
// 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。


// 方法：利用栈，运算符跟随后面的数字，不断进行运算，+-则放入栈中，*/则弹出进行运算
const calculate = function (s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    const isNum = function (s) {
        return !isNaN(Number(s));
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && i !== s.length - 1) {
            continue;
        }
        if (s[i]!==' ' && isNum(s[i])) {
            num = num * 10 + parseInt(s[i])
        }
        if ('+-*/'.includes(s[i]) || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num)
            } else if (sign === '-') {
                stack.push(-num)
            } else if (sign === '*') {
                stack.push(stack.pop() * num)
            } else if (sign === '/') {
                stack.push(parseInt(stack.pop() / num))
            }
            num = 0;
            sign = s[i];
        }
    }
    let res = 0;
    for (let i = 0; i < stack.length; i++) {
        res += stack[i];
    }
    return res;
};

res = calculate(" 3/2 ");
console.log(res)
