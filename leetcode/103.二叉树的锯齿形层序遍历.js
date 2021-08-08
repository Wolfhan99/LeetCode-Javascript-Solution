/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (57.12%)
 * Likes:    443
 * Dislikes: 0
 * Total Accepted:    139.9K
 * Total Submissions: 244.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回锯齿形层序遍历如下：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  let q = [root];
  const res = [];
  let flag = 1; // 记录标志位
  while (q.length !== 0) {
    let level = q.length;
    const tmp = [];
    for (let i = 0; i < level; i++) {
      const node = q.shift();
      tmp.push(node.val);
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
    if(flag % 2 === 0){
      res.push(tmp.reverse());
    }else{
      res.push(tmp);
    }
    flag++;
    
  }
  return res;
};
// @lc code=end

