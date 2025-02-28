var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0) {
            break;
        }

        if(i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i+1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                result.push([nums[i], nums[left], nums[right]]);

                while(right > left && nums[right]===nums[right-1]) right--;
                while(right > left && nums[left]=== nums[left+1]) left++;

                left++;
                right--;
            }
        }
    }
    return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
let res = threeSum(nums);
console.log(res);