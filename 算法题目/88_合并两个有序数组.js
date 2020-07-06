// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
// 说明:
// 1、初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 2、你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。


// 方法1：合并再排序
const merge1 = function (nums1, m, nums2, n) {
    function compare(e1, e2) {
        return e1 - e2;
    }

    for (let i = 0; i < n; i++, m++) {
        nums1[m] = nums2[i]
    }
    nums1.sort(compare)
};

// 方法2：双指针，从后开始比较（注意区别与从前开始比较，从前开始需要复制一个nums1在进行）
const merge2 = function (nums1, m, nums2, n) {
    let i_index = m - 1;
    let j_index = n - 1;
    let index = m + n - 1;
    while (i_index >= 0 && j_index >= 0) {
        if (nums1[i_index] > nums2[j_index]) {
            nums1[index] = nums1[i_index];
            i_index--;
        } else {
            nums1[index] = nums2[j_index];
            j_index--;
        }
        index --;
    }
    while (j_index >= 0) {
        nums1[index] = nums2[j_index];
        j_index--;
        index--;
    }
};
