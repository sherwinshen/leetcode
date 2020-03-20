// 给定两个数组，编写一个函数来计算它们的交集。
// 举例：
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

// 进阶：
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

// 方法1：先排序，后双指针
const intersect1 = function (nums1, nums2) {
    nums1.sort((a, b) => {
        return a - b
    });
    nums2.sort((a, b) => {
        return a - b
    });
    let res = [];
    let i_index = 0;
    let j_index = 0;
    while (i_index < nums1.length && j_index < nums2.length) {
        if (nums1[i_index] < nums2[j_index]) {
            i_index++;
        } else if (nums1[i_index] > nums2[j_index]) {
            j_index++;
        } else {
            res.push(nums1[i_index])
            i_index++;
            j_index++;
        }
    }
    return res
};

// 方法2：hash映射，如果对应nums1比nums2小很多的情况并不是很适合
const intersect2 = function (nums1, nums2) {
    let map = {}
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in map) {
            map[nums1[i]] += 1
        } else {
            map[nums1[i]] = 1
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if(nums2[j] in map){
            res.push(nums2[j]);
            map[nums2[j]]--;
            if(map[nums2[j]]===0){
                delete map[nums2[j]]
            }
        }
    }
    return res

};


nums1 = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81]
nums2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]
res = intersect2(nums1, nums2)
console.log(res)

// 0,  4,  5,  6,  7, 34, 38,
//     44, 45, 57, 61, 77, 79, 85,
//     88, 89, 92