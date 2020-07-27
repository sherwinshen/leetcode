// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：每行的元素从左到右升序排列；每列的元素从上到下升序排列。

// 方法1：二分法搜索，迭代矩阵对角线，从当前元素对列和行搜索
const searchMatrix1 = function (matrix, target) {

    function binary_search(matrix, target, start, flag) {
        let lo = start;
        let hi = matrix[0].length - 1;
        if (flag === false) {
            hi = matrix.length - 1;
        }
        while (hi >= lo) {
            let mid = parseInt((lo + hi) / 2);
            if (flag) { // searching a column
                if (matrix[start][mid] < target) {
                    lo = mid + 1;
                } else if (matrix[start][mid] > target) {
                    hi = mid - 1;
                } else {
                    return true
                }
            } else { // searching a row
                if (matrix[mid][start] < target) {
                    lo = mid + 1;
                } else if (matrix[mid][start] > target) {
                    hi = mid - 1;
                } else {
                    return true
                }
            }
        }
    }

    if (matrix.length === 0) {
        return false
    }
    let min = matrix.length
    if (matrix.length > matrix[0].length) {
        min = matrix[0].length
    }
    for (let i = 0; i < min; i++) {
        let vertical = binary_search(matrix, target, i, true)
        let horizontal = binary_search(matrix, target, i, false)
        if (vertical || horizontal) {
            return true
        }
    }
    return false
};

// 方法2：矩阵左下角元素上面的一定比它小，右边的比它大，从该元素开始查找，如果target如果小则往上，反之则往右
const searchMatrix2 = function (matrix, target) {
    if (matrix.length === 0) {
        return false
    }
    let i_index = matrix.length - 1;
    let j_index = 0;
    while (i_index >= 0 && j_index < matrix[0].length) {
        if (target === matrix[i_index][j_index]) {
            return true
        } else if (target < matrix[i_index][j_index]) {
            i_index--;
        } else if (target > matrix[i_index][j_index]) {
            j_index++;
        }
    }
    return false
};

