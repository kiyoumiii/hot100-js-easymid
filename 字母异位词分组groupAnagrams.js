// 字母异位词分组，用Map数据结构
// 注意key的处理，将st.split(''),sort().join('')得到的字符串设置为key
// 如若map中还不存在这个key，就set一个空数组[]
// 否则就是已经存在这个key了，get(key)后直接把这个st作为一个value加入push进来

var groupAnagrams = function(strs) {
    const mymap = new Map();
    for (const st of strs) {
        const key = st.split('').sort().join(''); //key的处理用到了三个常用数组api
        if (!mymap.has(key)) {
            mymap.set(key, []);
        }
        mymap.get(key).push(st);
    }

    return Array.from(mymap.values()); // from函数是用来将类数组对象创建一个真正的数组实例
}

const nums = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let res = groupAnagrams(nums);

console.log(res);

