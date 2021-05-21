/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (72.71%)
 * Likes:    687
 * Dislikes: 0
 * Total Accepted:    100.3K
 * Total Submissions: 138.1K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  // const path = [];
  // 判断是否为回文字符串
  const isPalind = (s, start, end) => {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  }
  const dfs = (startIndex, path) => {
    //如果起始位置已经大于str的大小，说明已经找到了一份分割方案
    if (startIndex >= s.length) {
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isPalind(s, startIndex, i)) { // 判断回文字符串
        // 获取[startIndex, i]在str中的子串
        // let subStr = str.substring(startIndex, i - startIndex + 1);
        path.push(s.substr(startIndex, i + 1 - startIndex));
      } else {
        continue;
      }
      dfs(i + 1, path);
      path.pop();
    }
  }
  dfs(0, []);
  return result;




};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end