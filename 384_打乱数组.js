// 打乱一个没有重复元素的数组。

// 举例：
// 以数字集合 1, 2 和 3 初始化数组。
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);
// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
// solution.shuffle();
// 重设数组到它的初始状态[1,2,3]。
// solution.reset();

// 注意两个点！
// 第一个是数组是引用类型，数组赋值后值的改变会互相影响的！！！要运用拷贝！！！
// 第二点是洗牌算法的运用


const Solution = function (nums) {
    this.array = nums
    this.original = JSON.parse(JSON.stringify(nums))
};


Solution.prototype.reset = function () {
    this.array = this.original
    this.original = JSON.parse(JSON.stringify(this.original))
    return this.array
};

Solution.prototype.shuffle = function () {
    let aux = this.array
    let arr = []
    while (aux.length > 0) {
        let index = Math.floor(Math.random() * aux.length)
        arr.push(aux[index])
        aux.splice(index, 1)
    }
    this.array = arr
    return this.array
};

// 洗牌算法 - 在每次迭代中，生成一个范围在当前下标到数组末尾元素下标之间的随机整数，接下来，将当前元素和随机选出的下标所指的元素互相交换
Solution.prototype.shuffle2 = function () {
    for (let i = 0; i < this.array.length; i++) {
        let index = Math.floor(Math.random() * ((this.array.length - 1) -i + 1) + i )
        const temp = this.array[i]
        this.array[i] = this.array[index]
        this.array[index] = temp
    }
    return this.array
};

