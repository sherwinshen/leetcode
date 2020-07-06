// 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。

// 例如:
// 输入:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]
// 输出: 2
// 解释:
// (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0


// 方法：2个hash表分别记录AB和CD的和情况，然后hash表进行计算，注意第二个hash表其实不用记录，直接计算即可。
const fourSumCount = function (A, B, C, D) {
    let res = 0
    let hash_ab = {};
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            const sum = A[i] + B[j];
            if (sum in hash_ab) {
                hash_ab[sum] += 1
            } else {
                hash_ab[sum] = 1
            }
        }
    }
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            const sum = C[i] + D[j];
            if (0-sum in hash_ab) {
                res += hash_ab[0-sum]
            }
        }
    }
    return res
};

res = fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])
console.log(res)
