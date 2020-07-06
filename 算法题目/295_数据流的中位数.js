// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
// 设计一个支持以下两种操作的数据结构：
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例：
// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2

/**
 * initialize your data structure here.
 */
const MedianFinder = function () {
    this.numList = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // 插入排序
    if (this.numList === 0) this.numList.push(num);
    let left = 0;
    let right = this.numList.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.numList[mid] === num) {
            this.numList.splice(mid, 0, num);
            return;
        } else if (this.numList[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.numList.splice(left, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const length = this.numList.length
    const mid = Math.floor((length - 1) / 2);
    if (length % 2 === 0) {
        return (this.numList[mid] + this.numList[mid+1]) / 2
    } else {
        return this.numList[mid]
    }
};


const obj = new MedianFinder()
obj.addNum(1)
obj.addNum(2)
obj.addNum(2)
const param_2 = obj.findMedian()
console.log(param_2)