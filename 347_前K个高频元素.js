// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// 示例 1:
// 输入: nums = [1,2,1,2,1,3], k = 2
// 输出: [1,2]

// 方法：通过hash表获取各元素的出现频次，然后利用堆来获得前k个
const topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    const arrayObj = Array.from(map);
    arrayObj.sort((a, b) => {
        return b[1]-a[1];
    })
    let res = []
    for (let i = 0; i < k; i++) {
        res.push(arrayObj[i][0])
    }
    return res;
};

//注本例使用python语言构建堆更加方便
// def topKFrequent(nums, k):
//     count = collections.Counter(nums)
//     return heapq.nlargest(k, count.keys(), key=count.get)


const res = topKFrequent([1,2,1,2,1,3],2);
console.log(res);