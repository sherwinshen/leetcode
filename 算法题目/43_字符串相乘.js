// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
// 示例 1:
// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

// 首先利用code码获得数值，然后讲字符串存储为数组，然后循环遍历利用*10计算
// 示例为[1,2,3]和[4,5,6] 3*6+3*50+3*400 + 20*6+20*50+20*400 + 100*6+100*50+100*400
const multiply = function (num1, num2) {
    const zeroCode = '0'.charCodeAt();
    let num1Arr = [];
    let num2Arr = [];
    let res = [];
    for (let i = 0; i < num1.length; i++) {
        num1Arr.push(num1[i].charCodeAt() - zeroCode);
    }
    for (let i = 0; i < num2.length; i++) {
        num2Arr.push(num2[i].charCodeAt() - zeroCode);
    }
    for (let i = num1Arr.length - 1; i > -1; i--) {
        for (let j = num2Arr.length - 1; j > -1; j--) {
            const resArr = (num1Arr[i] * num2Arr[j]).toString().split('');
            resArr.reverse();
            const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i;
            let next = 0, k = 0;
            while (k < resArr.length || next !== 0) {
                let sum = (res[index + k] | 0) + next;
                if (k < resArr.length) {
                    sum += +resArr[k];
                }
                res[index + k] = sum % 10;
                next = sum / 10 >= 1 ? 1 : 0;
                k++;
            }
        }
    }
    return res.reverse().join('');
};


const multiply2 = function(num1, num2) {
    return (BigInt(num1)*BigInt(num2)).toString();
};


res = multiply2("123456789", "987654321")
console.log(res)
