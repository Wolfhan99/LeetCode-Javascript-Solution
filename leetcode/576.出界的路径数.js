/*
 * @lc app=leetcode.cn id=576 lang=javascript
 *
 * [576] 出界的路径数
 *
 * https://leetcode-cn.com/problems/out-of-boundary-paths/description/
 *
 * algorithms
 * Medium (39.58%)
 * Likes:    150
 * Dislikes: 0
 * Total Accepted:    11.7K
 * Total Submissions: 27.8K
 * Testcase Example:  '2\n2\n2\n0\n0'
 *
 * 给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn]
 * 。你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。
 *
 * 给你五个整数 m、n、maxMove、startRow 以及 startColumn ，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对
 * 10^9 + 7 取余 后的结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
 * 输出：12
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= m, n <= 50
 * 0 <= maxMove <= 50
 * 0 <= startRow < m
 * 0 <= startColumn < n
 *
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const MOD = Math.pow(10,9) + 7;
  // 四个方向
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  // 移动步数2的都是从移动步数1的转移来的
  // 移动步数3的都是从移动步数2的转移来的
  // 所以，要从移动步数从1开始递增
  // p[i][j][k]表示从 [i,j] 位置最多移动 k 次能够把小球移出去的最大路径数量；
  let dp = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(maxMove + 1).fill(0)));
  dp[startRow][startColumn][0] = 1;
  for (let k = 1; k <= maxMove; k++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 处理四条边,四个顶点需要加两次,因为有两种出界的方法
        if (i === 0) dp[i][j][k]++;
        if (j === 0) dp[i][j][k]++;
        if (i === m - 1) dp[i][j][k]++;
        if (j === n - 1) dp[i][j][k]++;

        // 中间的位置向四个方向延伸
        for (const direction of directions) {
          let newI = i + direction[0],
            newJ = j + direction[1];
          if (newI >= 0 && newI < m && newJ >= 0 && newJ < n) {
            dp[i][j][k] = (dp[i][j][k] + dp[newI][newJ][k - 1]) % MOD;
          }
        }
      }
    }
  }
  return dp[startRow][startColumn][maxMove];
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findPaths;
// @after-stub-for-debug-end