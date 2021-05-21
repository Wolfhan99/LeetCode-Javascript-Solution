/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if(root === null) return root;
    if(root.val < low) return trimBST(root.right, low, high);
    if(root.val > high) return trimBST(root.left, low,high);
    root.left = trimBST(root.left, low, high) // 要将下一层处理完左子树的结果赋给root.left
    root.right = trimBST(root.right, low, high) //处理完右子树的结果赋给root.right
    return root;
};
// @lc code=end

