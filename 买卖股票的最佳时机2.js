// 1是要在不同的日子卖出
// 2是可以先购买然后在同一天出售
// 思路比1还要简单

function maxProfit(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    
    return profit;
}