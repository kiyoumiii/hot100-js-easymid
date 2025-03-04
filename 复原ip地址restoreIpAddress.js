// 回溯算法生成所有可能的分割方式，检查每个分割是否构成合法的ip地址
// 3个方法：主方法， trackBack方法，isValid方法

var restoreAddresses = function(s) {
    const result = [];

    function trackBack(s, point_num, start_index, current) {
        if(point_num === 3) { //此时只需要检查从start_index到字符串末尾的部分是否构成一个合法的IP段
            if (isValid(s, start_index, s.length - 1)) {
                current += s.slice(start_index); // end省略默认提取到末尾
                result.push(current); // 把当前拼接好的push到result里
            }
            return;
        }

        // 尝试不同的分割点i，对每个i，调用isValid函数检查从start_index到i的子串是否是一个合法的IP段。

        for (let i = start_index; i < s.length; i++) {
            if(isValid(s, start_index, i)) {
                const cur = s.slice(start_index, i+1);
                trackBack(s, point_num+1, i+1, current + cur + '.');
            }
            else {
                break;
            }
        }
    }

    // 检查子串是否合法
    function isValid(s, start, end) {
        if (start > end) {
            return false;
        }
        // 不能以0开头除非本身就是0
        if (s[start] === '0' && start !== end) {
            return false;
        }
        let num = 0;
        for (let i = start; i <= end; i++) {
            // 不是数字类型
            if (isNaN(parseInt(s[i]))) {
                return false;
            }
            // 大于255
            num = num * 10 + parseInt(s[i]);
            if (num > 255) {
                return false;
            }
        }
        return true;
    }

    trackBack(s, 0, 0, '');
    return result;
}

const s = "25525511135";
const result = restoreAddresses(s);
console.log(result);