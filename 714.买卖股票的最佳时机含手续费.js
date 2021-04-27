/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 *
 * algorithms
 * Medium (70.20%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    73K
 * Total Submissions: 103.8K
 * Testcase Example:  '[1,3,2,8,4,9]\n2'
 *
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 
 * 返回获得利润的最大值。
 * 
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 * 
 * 示例 1:
 * 
 * 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出: 8
 * 解释: 能够达到的最大利润:  
 * 在此处买入 prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 * 
 * 注意:
 * 
 * 
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let profit = 0;
    let buy = prices[0] + fee;
    for(let i = 1; i<prices.length; i++) {
        if(prices[i] + fee < buy){
            buy = prices[i] + fee;
        }
        // 计算利润， 可能存在多次计算利润，最后一次计算利润才是真正意义的卖出
        else if(prices[i] > buy){
            profit += prices[i] - buy;
            // 提供一个反悔操作，
            // 看成当前手上拥有一支买入价格为prices[i]的股票，
            // 将buy更新为prices[i]，这样一来，如果下一天股票价格继续上升，我们会获得
            // price[i+1] - prices[i]的收益，加上这一天prices[i]-buy的收益，恰好等于这一天不进行任何操作，而在下一天卖出股票的收益
            buy = prices[i]; 
        }
    }
    return profit;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end