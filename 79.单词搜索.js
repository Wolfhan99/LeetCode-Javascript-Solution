/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (44.82%)
 * Likes:    896
 * Dislikes: 0
 * Total Accepted:    170.3K
 * Total Submissions: 379.6K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n = board[i].length
 * 1 
 * 1 
 * board 和 word 仅由大小写英文字母组成
 * 
 * 
 * 
 * 
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const used = new Array(m).fill(0).map(() => new Array(n).fill(false));
  // 递归函数
  const canFind = (row, col, i) => {
    if (i === word.length) {//递归的出口，越界返回

      return true;
    }
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false;
    }
    if (used[row][col] || board[row][col] !== word[i]) {//当前点已经访问过或者不等于当前字母
      return false;
    }
    used[row][col] = true; // 记录当前节点已经被访问过了

    if (canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) || canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1)) {
      return true;
    }

    used[row][col] = false; // 回溯记录，不能为其他路径找到字符，撤销记录
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = exist;
// @after-stub-for-debug-end