// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
// insert(val)：当元素 val 不存在时，向集合中插入该项。
// remove(val)：元素 val 存在时，从集合中移除该项。
// getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。

/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
    this.set = [];
    this.map = new Map();  // val - index
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (val in this.map) {
        return false;
    } else {
        this.set.push(val)
        this.map[val] = this.set.length - 1
        return true;
    }

};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (val in this.map) {
        // 用数组最后一个数进行替换
        let num = this.set[this.set.length - 1]
        let newIndex = this.map[val]
        this.set[newIndex] = num
        this.map[num] = newIndex
        this.set.pop()
        delete this.map[val];
        return true;
    } else {
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.set[Math.floor(Math.random() * this.set.length)]
};


const obj = new RandomizedSet()
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.getRandom())
console.log(obj.remove(0))
console.log(obj.insert(0))

