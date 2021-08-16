/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 *
 * https://leetcode-cn.com/problems/number-of-digit-one/description/
 *
 * algorithms
 * Hard (41.07%)
 * Likes:    278
 * Dislikes: 0
 * Total Accepted:    24.2K
 * Total Submissions: 54.1K
 * Testcase Example:  '13'
 *
 * 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 13
 * 输出：6
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let s = n + "";
  let m = s.length;
  if (m === 1) return n > 0 ? 1 : 0;
  // 计算第i位前缀代表的数值和后缀代表的数值
  // 例如abcde有ps[2] = ab; ss[2] =de;
  let ps = new Array(m).fill(0),
    ss = new Array(m).fill(0);
  // 初始化ps和ss
  ss[0] = parseInt(s.substring(1));
  for (let i = 1; i < m - 1; i++) {
    ss[i] = parseInt(s.substring(i + 1));
    ps[i] = parseInt(s.substring(0, i));
  }
  ps[m - 1] = parseInt(s.substring(0, m - 1));
  // 分情况讨论
  let ans = 0;
  for (let i = 0; i < m; i++) {
    // x为当前位数值,len当当前位后面长度为多少
    let x = s[i] - "0",
      len = m - i - 1;
    let prefix = ps[i],
      suffix = ss[i];
    let tot = 0;
    tot += prefix * Math.pow(10, len);
    if (x === 0) {
    } else if (x === 1) {
      tot += suffix + 1;
    } else {
      tot += Math.pow(10, len);
    }
    ans += tot;
  }
  return ans;
};
// @lc code=end
