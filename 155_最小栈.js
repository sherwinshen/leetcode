/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let min = Infinity
    for (let i = 0; i < this.stack.length; i++) {
        if (this.stack[i] < min) {
            min = this.stack[i]
        }
    }
    return min
};


var obj = new MinStack()

obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())
