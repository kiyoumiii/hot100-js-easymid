var longestConsecutive = function(nums) {
    let longestRes = 0;
    const mySet = new Set(nums);

    for(let num of mySet) {
        if(!mySet.has(num-1)) {
            let curRes = 1;

            while(mySet.has(num+1)) {
                curRes++;
                num++;
            }

            longestRes = Math.max(longestRes, curRes);
        }
    }
    return longestRes;
}

const nums = [100, 4, 200, 1, 3, 2];
let res = longestConsecutive(nums);
console.log(res);