// 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
// 请注意，它是排序后的第k小元素，而不是第k个元素。
// 举例：
// matrix = [
//     [ 1,  5,  9],
//     [10, 11, 13],
//     [12, 13, 15]
// ],
// k = 8,
// 返回 13。


// 方法：找出二维矩阵中最小的数left，最大的数right，那么第k小的数必定在left~right之间，通过寻找小于等于mid的元素个数count来不断二分知道找到
const kthSmallest = function (matrix, k) {
    let row = matrix.length;
    let col = matrix[0].length;
    let left = matrix[0][0];
    let right = matrix[row - 1][col - 1];
    const findNotBiggerThanMid = function (matrix, mid, row, col) {
        let count = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (matrix[i][j] <= mid) {
                    count++
                } else {
                    break
                }
            }
        }
        return count
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const count = findNotBiggerThanMid(matrix, mid, row, col);
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
};

let res = kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
], 5)

console.log(res)

