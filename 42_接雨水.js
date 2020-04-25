// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例:
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6


const trap = function (height) {
    let left_max = [0]
    let right_max = [0]
    let count = 0
    for (let i = 0; i < height.length - 1; i++) {
        left_max.push(Math.max(left_max[i], height[i]))
    }
    for (let j = height.length - 1; j > 0; j--) {
        right_max.unshift(Math.max(right_max[0], height[j]))
    }
    for (let i = 0; i < height.length - 1; i++) {
        if (Math.min(left_max[i], right_max[i]) - height[i] > 0) {
            count += (Math.min(left_max[i], right_max[i]) - height[i])
        }
    }
    return count
};
const res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
console.log(res)

