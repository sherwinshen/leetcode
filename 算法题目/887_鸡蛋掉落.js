// 你将获得 K 个鸡蛋，并可以使用一栋从 1 到 N  共有 N 层楼的建筑。每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。
// 你知道存在楼层 F ，满足 0 <= F <= N 任何从高于 F 的楼层落下的鸡蛋都会碎，从 F 楼层或比它低的楼层落下的鸡蛋都不会破。
// 每次移动，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 X 扔下（满足 1 <= X <= N）。
// 你的目标是确切地知道 F 的值是多少。无论 F 的初始值如何，你确定 F 的值的最小移动次数是多少？


// 方法1：动态规划+二分搜索
// 存在鸡蛋K，楼层N，状态(K,N), 从X层掉落鸡蛋，若碎了，剩余需要确认的楼层数为X-1层，状态变为(K-1,X-1)；若没有碎，剩余需要确认的楼层数为N-X层，状态变为(K,N-X)；
// 现在的目标就转化为，最坏情况下的最优解即 dp(K,N)= min(max(dp(K-1,X-1),dp(K,N-X))),其中1<=X<=N
// 特殊情况：K为1，则dp(K,N)=N，即只能慢慢往上找，当N为0，则dp(K,N)=0

superEggDrop = function (K, N) {
    function dp(k, n) {
        if (k === 1 || n === 1 || n === 2) {
            return n;
        }
        let lo = 1;
        let hi = n;
        while (lo + 1 < hi) {
            let x = parseInt((lo + hi) / 2);
            let t1 = dp(k - 1, x - 1)
            let t2 = dp(k, n - x)
            if (t1 < t2) {
                lo = x;
            } else if (t1 > t2) {
                hi = x;
            } else {
                lo = hi = x;
            }
        }
        let result = dp(k - 1, lo - 1) >= dp(k, n - lo) ? dp(k - 1, lo - 1) : dp(k, n - lo);
        return 1 + result;
    }
    return dp(K, N);
}

const result = superEggDrop(2,6)
console.log(result)
