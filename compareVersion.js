// 比较版本号，返回1/-1/0
// 先用split按.分割成数组
// for循环只要其中一个version没循环完就可以循环
// 用x表示v1[i]的数字类型，y表示v2[i]的数字类型
// 比较返回1/-1，如果没有比较出大小，就返回0.

var compareVersion = function(version1,version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        let x = 0, y = 0;
        if (i < v1.length) {
            x = parseInt(v1[i]);
        }

        if(i < v2.length) {
            y = parseInt(v2[i]);
        }

        if (x > y) {
            return 1;
        }

        if (x < y) {
            return -1;
        }
    }
    return 0;
}

const v1 = '1.0';
const v2 = '1.0.0.0';
let res = compareVersion(v1,v2);
console.log(res);