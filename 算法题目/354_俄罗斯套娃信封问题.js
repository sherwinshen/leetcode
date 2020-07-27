// 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
// 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出: 3
// 解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。

// 先将信封按照index为0的数进行排序，注意，由于信封的宽高相等是不能放进的，因此如果index为0的数相等则需要比较index为1的数，且将大的放在前面
// 然后再根据【300_最长上升子序列】来进行找到index为1的数组成的数组的最长上升子序列

const maxEnvelopes = function (envelopes) {
    if (envelopes.length === 0) return 0
    const length = envelopes.length
    envelopes.sort((item1, item2) => {
        if (item1[0] < item2[0]) {
            return -1
        } else if (item1[0] === item2[0]) {
            if (item1[1] < item2[1]) {
                return 0
            } else {
                return -1
            }
        } else {
            return 0
        }
    })
    console.log('env', envelopes)
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(envelopes[i][1])
    }
    console.log('arr', arr)
    const dp = new Array(length)
    dp[0] = 1
    for (let i = 1; i < length; i++) {
        let max = 1
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                max = Math.max(max, dp[j] + 1)
            }
        }
        dp[i] = max
    }
    console.log('dp', dp)
    return Math.max(...dp)
};

const res = maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]])
console.log(res)