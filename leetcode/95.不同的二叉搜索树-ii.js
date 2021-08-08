/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (68.07%)
 * Likes:    853
 * Dislikes: 0
 * Total Accepted:    79.6K
 * Total Submissions: 116.9K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：3
 * 输出：
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * 解释：
 * 以上的输出对应以下 5 种不同结构的二叉搜索树：
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n === 0) return [];
  const getAllTrees = (start, end) =>{
    if(start > end) return [null];
    // if(start === end) return [new TreeNode(start)];
    const res = [];
    for(let i=start;i<=end;i++){
      const leftBSTs = getAllTrees(start,i-1);
      const rightBSTs = getAllTrees(i+1, end);
      for(const leftBST of leftBSTs) {
        for(const rightBST of rightBSTs){
          const root = new TreeNode(i);
          root.left = leftBST;
          root.right = rightBST
          res.push(root);
        }
      }
    }
    return res;
  }

  return getAllTrees(1, n);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateTrees;
// @after-stub-for-debug-end