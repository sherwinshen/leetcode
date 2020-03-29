// 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
// 列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function (nestedList) {
    this.list = []
    this.initList(nestedList)
};

NestedIterator.prototype.initList = function (nestedList) {
    for (let i = 0; i < nestedList.length; i++) {
        if (nestedList[i].isInteger()) {
            this.list.push(nestedList[i].getInteger())
        } else {
            this.initList(nestedList[i].getList())
        }
    }
}

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.list.length !== 0;
};

/**
 * @this NestedIterator
 * @returns {NestedInteger}
 */
NestedIterator.prototype.next = function () {
    return this.list.shift();
};


nestedList = [[1, 1], 2, [1, 1]]
const i = new NestedIterator(nestedList), a = [];
while (i.hasNext()) a.push(i.next());

