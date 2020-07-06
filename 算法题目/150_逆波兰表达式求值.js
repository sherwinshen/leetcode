// 根据逆波兰表示法，求表达式的值。有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
// 整数除法只保留整数部分。
// 示例 1：
// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: ((2 + 1) * 3) = 9

const evalRPN = function (tokens) {
    let res = [tokens[0], tokens[1]]
    for (let i = 2; i < tokens.length; i++) {
        switch (tokens[i]) {
            case '+':
                let temp1_2 = res.pop();
                let temp1_1 = res.pop();
                const temp1 = parseInt(temp1_1)+parseInt(temp1_2)
                res.push(temp1);
                break;
            case '-':
                let temp2_2 = res.pop();
                let temp2_1 = res.pop();
                const temp2 =parseInt(temp2_1)-parseInt(temp2_2)
                res.push(temp2);
                break;
            case '*':
                let temp3_2 = res.pop();
                let temp3_1 = res.pop();
                const temp3 =parseInt(temp3_1)*parseInt(temp3_2)
                res.push(temp3);
                break;
            case '/':
                let temp4_2 = res.pop();
                let temp4_1 = res.pop();
                res.push(parseInt(parseInt(temp4_1)/parseInt(temp4_2)));
                break;
            default:
                res.push(tokens[i])
        }
    }
    return res[0]
};

res = evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
console.log(res)

