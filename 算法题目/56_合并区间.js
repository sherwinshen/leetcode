// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

const merge = function (intervals) {
    if (intervals.length===0) return [];
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length - 1][1]) {
            let temp = res.pop()
            res.push([temp[0],Math.max(intervals[i][1],temp[1])])
        }else {
            res.push(intervals[i])
        }
    }
    return res
};

res = merge([[1, 4], [4, 6], [8, 10], [15, 18]])
console.log(res)
