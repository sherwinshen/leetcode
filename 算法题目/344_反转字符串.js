// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 举例：
// 输入：["h","e","l","l","o"] 输出：["o","l","l","e","h"]

// 方法1：双指针
const reverseString = function (s) {
    let i_index = 0;
    let j_index = s.length-1;
    while (j_index > i_index) {
        const temp = s[i_index];
        s[i_index] = s[j_index];
        s[j_index] = temp;
        i_index++;
        j_index--;
    }
    return s
};

console.log(reverseString(["h","e","l","l","o"]));