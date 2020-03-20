// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 方法1：字符统一大小写，去除无效字符，头尾双指针开始比较
const isPalindrome1 = function (s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// 方法2：字符统一大小写，去除无效字符，字符串逆序，两者比较是否相等
const isPalindrome2 = function (s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const strTemp = str.split('').reverse().join('');
    return str === strTemp;
};

console.log(isPalindrome2( "race a car"))
