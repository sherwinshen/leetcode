// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
// 举例：
// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]

// 方法1：借助0-100的数组存储信息
const smallerNumbersThanCurrent1 = function (nums) {
    let temp = new Array(101);
    temp.fill(0)
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        temp[nums[i]] += 1
    }

    for (let j = 1; j < 101; j++) {
        temp[j] += temp[j - 1]
    }
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === 0) {
            res.push(0)
        } else {
            res.push(temp[nums[k] - 1])
        }
    }
    return res
};


// 方法2：排序再计算
const smallerNumbersThanCurrent2 = function (nums) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i])
    }
    temp.sort((a, b) => {
        return a - b
    })
    console.log(temp)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        res.push(temp.indexOf(nums[i]))
    }
    return res
};

res = smallerNumbersThanCurrent2([5, 0, 10, 0, 10, 6])
console.log(res)

// [2,0,4,0,4,3]