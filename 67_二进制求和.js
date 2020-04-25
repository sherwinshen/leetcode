// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"

const addBinary = function (a, b) {
    let str = '';
    let add = 0;
    let i, j;
    for (i = a.length - 1, j = b.length - 1; i >= 0 && j >= 0; i--, j--) {
        let temp = add + parseInt(a[i]) + parseInt(b[j])
        if (temp <= 1) {
            str = temp + str
            add = 0
        } else if (temp === 2) {
            str = '0' + str
            add = 1

        } else {
            str = '1' + str
            add = 1
        }
    }
    if (i >= 0) {
        for (let k = i; k >= 0; k--) {
            let temp = add + parseInt(a[k])
            if (temp <= 1) {
                str = temp + str
                add = 0
            } else if (temp === 2) {
                str = '0' + str
                add = 1
            }
        }
    }
    if (j >= 0) {
        for (let k = j; k >= 0; k--) {
            let temp = add + parseInt(b[k])
            if (temp <= 1) {
                str = temp + str
                add = 0
            } else if (temp === 2) {
                str = '0' + str
                add = 1
            }
        }
    }
    if (add === 1) {
        str = '1' + str
    }
    return str
};

const res = addBinary('1', '111')
console.log(res)
