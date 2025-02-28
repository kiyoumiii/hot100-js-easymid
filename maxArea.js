var maxArea = function(height) {
    let l = 0, r = height.length-1;
    let res = 0;
    while(l < r) {
        let curArea = Math.min(height[l],height[r]) * (r-l);
        res = Math.max(res, curArea);

        if (height[l] < height[r]) {
            l++;
        } 
        else {
            r--;
        }
    }
    return res;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let res = maxArea(height);
console.log(res);