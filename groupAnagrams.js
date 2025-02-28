var groupAnagrams = function(strs) {
    const mymap = new Map();
    for (const st of strs) {
        const key = st.split('').sort().join('');
        if (!mymap.has(key)) {
            mymap.set(key, []);
        }
        mymap.get(key).push(st);
    }

    return Array.from(mymap.values());
}

const nums = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let res = groupAnagrams(nums);

console.log(res);

