/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.07%)
 * Likes:    1722
 * Dislikes: 0
 * Total Accepted:    259.8K
 * Total Submissions: 337.1K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
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
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  list = [];
  backtracking(n, list, 0, 0, "");
  return list;
};

const backtracking = (n, result, left, right, str) => {
  if (right > left) {
    return;
  }

  if (left === n && right === n) {
    result.push(str);
    return;
  }

  if (left < n) {
    backtracking(n, result, left + 1, right, str + "(");
  }

  if (right < n){
    backtracking(n, result, left, right+1, str + ")");
  }
}
// @lc code=end

