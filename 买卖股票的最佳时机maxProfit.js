// 对每天的价格，从它的右边一位开始遍历作差，遍历完毕之后的最大值就是最大利润了。
// 两轮for循环会导致超时
// var maxProfit = function (prices) {
//     let res = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for(let j = i+1; j < prices.length; j++) {
//             res = Math.max(res, prices[j] - prices[i]);
//         }
//     }
//     return res;
// }

// 可以只遍历一遍，边遍历边维护一个在此之前最低的价格minPrice作为买入的价格，实时更新
var maxProfit = function(prices) {
    let res = 0;
    let minPrice = prices[0];

    for(const p of prices) {
        res = Math.max(res,p-minPrice);
        minPrice = Math.min(minPrice,p);
    }

    return res;
}

const prices = [7, 1, 5, 3, 6, 4];
let res = maxProfit(prices);
console.log(res);