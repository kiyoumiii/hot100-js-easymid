// 盛水最多的容器
// 从最左边和最右边开始，两端往中间走，只要l<r，先算一下用当前的面积，然后更新最大面积
// 然后，当l的高度比r要小，就让l++；否则就让r--
// 循环完毕就是结果

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