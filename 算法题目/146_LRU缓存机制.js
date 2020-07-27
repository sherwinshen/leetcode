// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
//
// 获取数据 get(key) - 如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字/值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

// 示例:
// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得关键字 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得关键字 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.capacity = capacity
    this.used = 0
    this.value = []
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    for (let i = 0; i < this.value.length; i++) {
        if (this.value[i].key === key) {
            const value = this.value[i].value
            const deleteItem = this.value.splice(i, 1)
            this.value.push(deleteItem[0])
            return value
        }
    }
    return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let flag = false
    let index = -1
    for (let i = 0; i < this.value.length; i++) {
        if (this.value[i].key === key) {
            flag = true
            index = i
            break
        }
    }
    if (flag) {
        this.value.splice(index, 1)
        this.value.push({key, value})
    } else {
        if (this.used === this.capacity) {
            this.value.shift()
            this.value.push({key, value})
        } else {
            this.value.push({key, value})
            this.used += 1
        }
    }
};

const cache = new LRUCache(2 /* 缓存容量 */);

console.log(cache.get(2));
cache.put(2, 6);
console.log(cache.get(1));
cache.put(1, 5);
cache.put(1, 2);    // 该操作会使得关键字 2 作废 // 返回 -1 (未找到)
cache.get(1)
console.log(cache.get(1));
console.log(cache.get(2));

