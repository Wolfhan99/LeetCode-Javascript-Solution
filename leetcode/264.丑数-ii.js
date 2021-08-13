/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (57.53%)
 * Likes:    713
 * Dislikes: 0
 * Total Accepted:    91.2K
 * Total Submissions: 158.4K
 * Testcase Example:  '10'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 *
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 三指针
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  let p2 = 1,
    p3 = 1,
    p5 = 1;
  for (let i = 2; i < n + 1; i++) {
    const num2 = dp[p2] * 2,
      num3 = dp[p3] * 3,
      num5 = dp[p5] * 5;
  dp[i] = Math.min(num2, num3, num5);
  if(dp[i] === num2) p2++;
  if(dp[i] === num3) p3++;
  if(dp[i] === num5) p5++;
  }
  return dp[n]
};
// @lc code=end
