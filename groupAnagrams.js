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

