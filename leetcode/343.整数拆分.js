/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 *
 * https://leetcode-cn.com/problems/integer-break/description/
 *
 * algorithms
 * Medium (59.54%)
 * Likes:    492
 * Dislikes: 0
 * Total Accepted:    82.5K
 * Total Submissions: 138.6K
 * Testcase Example:  '2'
 *
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
 * 
 * 输入: 2
 * 输出: 1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 示例 2:
 * 
 * 输入: 10
 * 输出: 36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明: 你可以假设 n 不小于 2 且不大于 58。
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  // dp[2] = 1;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
    }
  }
  return dp[n];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = integerBreak;
// @after-stub-for-debug-end