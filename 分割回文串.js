// python -> js
// 分割回文串

var partition = function(s) {
    const result = [];

    function trackBack(startIndex, path) {
        if (startIndex === s.length) {
            result.push([...path]);
            return;
        }
        for (let i = startIndex; i < s.length; i++) {
            const substring = s.slice(startIndex, i + 1);
            const reversed = substring.split('').reverse().join('');
            if (substring === reversed) {
                path.push(substring);
                trackBack(i + 1, path);
                path.pop();
            }
        }
    }

    trackBack(0, []);
    return result;
};