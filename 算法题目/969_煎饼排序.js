// 给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。
// 返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。

// 举例
// 输入：[3,2,4,1]
// 输出：[4,2,4,3]
// 解释：
// 我们执行 5 次煎饼翻转
// 初始状态 A = [3, 2, 4, 1]
// 第一次翻转后 (k=3): A = [4, 2, 3, 1]
// 第二次翻转后 (k=4): A = [1, 3, 2, 4]
// 第三次翻转后 (k=2): A = [3, 1, 2, 4]
// 第四次翻转后 (k=3): A = [2, 1, 3, 4]
// 第五次翻转后 (k=2): A = [1, 2, 3, 4]，此时已完成排序。

// 解题思路
// 1、找到 n 个饼中最大的那个。
// 2、把这个最大的饼移到最底下 —— 先将其翻到最上面然后再翻到最下面
// 3、递归调用 pancakeSort(A, n - 1)。

const pancakeSort = function (A) {
    let result = []
    const findMaxIndex = function (arr) {
        let index = 0
        let max = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                index = i
                max = arr[i]
            }
        }
        return index
    }
    for (let i = A.length - 1; i > 0; i--) {
        const index = findMaxIndex(A.slice(0, i + 1))
        if (index !== i) {
            if(index!==0){
                result.push(index + 1)
                A = [...A.slice(0, index + 1).reverse(), ...A.slice(index + 1)]
            }
            result.push(i + 1)
            A = [...A.slice(0, i + 1).reverse(), ...A.slice(i + 1)]
        }
    }
    return result
};

const res = pancakeSort([3, 2, 4, 1])
console.log(res)