/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.63%)
 * Likes:    550
 * Dislikes: 0
 * Total Accepted:    151.3K
 * Total Submissions: 197.4K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const path = [];

  const dfs = (start, n, k) => {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      // 枚举出所有选择
      path.push(i); // 选择
      dfs(i + 1, n, k); // 向下继续选择
      path.pop(); // 撤销选择
    }
  };

  dfs(1, n, k);
  return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end
