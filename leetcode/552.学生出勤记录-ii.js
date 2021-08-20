/*
 * @lc app=leetcode.cn id=552 lang=javascript
 *
 * [552] 学生出勤记录 II
 *
 * https://leetcode-cn.com/problems/student-attendance-record-ii/description/
 *
 * algorithms
 * Hard (43.75%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    8.7K
 * Total Submissions: 17.1K
 * Testcase Example:  '2'
 *
 * 可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
 *
 * 'A'：Absent，缺勤
 * 'L'：Late，迟到
 * 'P'：Present，到场
 *
 *
 * 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：
 *
 *
 * 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
 * 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
 *
 *
 * 给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 10^9 +
 * 7 取余 的结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：8
 * 解释：
 * 有 8 种长度为 2 的记录将被视为可奖励：
 * "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
 * 只有"AA"不会被视为可奖励，因为缺勤次数为 2 次（需要少于 2 次）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：3
 *
 *
 * 示例 3：
 *
 *
 * 输入：n = 10101
 * 输出：183236316
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  // dp[i][j][k] 1<=i<=n, 0<=j<=1, 0<=k<=2
  // 表示前 i 天有 j 个 ‘A’ 且结尾有连续 k个 ‘L’ 的可奖励的出勤记录的数量
  let dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(2).fill(0).map(() => new Array(3).fill(0)));

  // 初始化 dp
  dp[0][0][0] = 1;

  const MOD = Math.pow(10, 9) + 7;
  for (let i = 1; i <= n; i++) {
    // 以P结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k <= 2; k++) {
        dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
      }
    }
    // 以A结尾的数量
    for (let k = 0; k <= 2; k++) {
      dp[i][1][0] = (dp[i][1][0] + dp[i-1][0][k]) % MOD;
    }

    // 以L结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 1; k <= 2; k++) {
        dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % MOD;
      }
    }
  }

  let sum = 0;
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 2; k++) {
      sum = (sum + dp[n][j][k]) % MOD;
    }
  }
  return sum;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = checkRecord;
// @after-stub-for-debug-end