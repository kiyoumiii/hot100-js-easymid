// 字符串相加，模拟手工计算过程，从末尾开始逐位相加，并处理进位
// x和y这两行，charAt获取到字符后，减去‘0’是为了变成数字类型

var addStrings = function(num1,num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const res = [];

    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >=0 ? num1.charAt(i) - '0' : 0;
        const y = j >=0 ? num2.charAt(j) - '0' : 0;

        const result = x + y + add;

        res.push(result % 10);

        add = Math.floor(result / 10);

        i--;
        j--;
    }
    return res.reverse().join(''); //将数组反转并且转换成字符串
}

const num1 = '11';
const num2 = '123';
let res = addStrings(num1,num2);
console.log(res);