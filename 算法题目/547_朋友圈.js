// 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。
// 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
// 示例:
// 输入:
//     [[1,1,0],
//      [1,1,1],
//      [0,1,1]]
// 输出: 1
// 说明：已知学生0和学生1互为朋友，学生1和学生2互为朋友，所以学生0和学生2也是朋友，所以他们三个在一个朋友圈，返回1。


// 深度优先
const findCircleNum = function (M) {
    let count = 0
    let length = M.length
    let visited = new Array(M.length)
    visited.fill(false)
    const dfs = function (index) {
        visited[index] = true
        for (let i = 0; i < length; i++) {
            if (visited[i] === false && M[index][i] === 1) {
                dfs(i)
                visited[i] = true
            }
        }
    }
    while (visited.includes(false) === true) {
        let index = visited.indexOf(false)
        dfs(index)
        count++
    }
    return count
};

// 广度优先
const findCircleNum2 = function (M) {
    let count = 0
    let length = M.length
    let visited = new Array(M.length) // 是否访问过数组
    visited.fill(false)
    const bfs = function (temp) {
        if (temp.length !== 0) {
            let nowIndex = temp.shift();
            visited[nowIndex] = true
            for (let i = 0; i < length; i++) {
                if (M[nowIndex][i] === 1 && visited[i] === false) {
                    temp.push(i)
                    bfs(temp)
                }
            }

        }
    }
    while (visited.includes(false) === true) {
        let temp = [visited.indexOf(false)]
        bfs(temp)
        count++
    }
    return count
};


const res = findCircleNum(
    [
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1]])
console.log(res)
