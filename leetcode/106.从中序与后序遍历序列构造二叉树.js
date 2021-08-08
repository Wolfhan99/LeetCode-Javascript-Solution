/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
   const traversal = (inorder,postorder) => {
    if(postorder.length === 0) return null;
    // 后序遍历数组的最后一个元素，就是当前的中间节点
    let rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal);

    // 叶子结点
    if(postorder.length === 1) return root;
    // 找到中序遍历的切割点
    // var delimiterIndex;
    // for(delimiterIndex = 0; delimiterIndex < inorder.length;delimiterIndex++){
    //     if(inorder[delimiterIndex] === rootVal) break;
    // }
    let delimiterIndex = inorder.indexOf(rootVal);

    // 切割中序数组
    let leftInorder = inorder.slice(0, delimiterIndex);
    let rightInorder = inorder.slice(delimiterIndex+1,inorder.length);
    // postorder舍弃末尾元素
    postorder.length --;
    // 切割后序数组
    // 左闭右开
    let leftPostorder = postorder.slice(0,leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length);
    root.left = traversal(leftInorder, leftPostorder);
    root.right = traversal(rightInorder, rightPostorder);
    return root;
   }

   if(inorder.length === 0 || postorder.length === 0) return null;
   return traversal(inorder, postorder);
};

// @lc code=end

