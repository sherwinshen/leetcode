const oldArr = [
    1,
    [
        2, [3],
        [4, 5, 6],
        [7, 8, 9],
        10,
        11,
    ],
    12,
    13,
    14,
    [15, 16, 17],
];

// ES6 新特性 flat
function reduction_1(arr) {
    return arr.flat(Infinity)
}

// 转字符串再转数组
function reduction_2(arr) {
    return arr.toString().split(',').map((item) => Number(item))
}

// 递归
function reduction_3(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(reduction_3(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(reduction_1(oldArr))
console.log(reduction_2(oldArr))
console.log(reduction_3(oldArr))