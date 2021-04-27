/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const traversal = (preorder, preorderBegin,preorderEnd,inorder,inorderBegin,inorderEnd)=> {
        if(preorderBegin === preorderEnd) return null;
        let rootVal = preorder[preorderBegin];
        let root = new TreeNode(rootVal);
        if(preorderEnd - preorderBegin === 1) return root;

        index = inorder.indexOf(rootVal);

        let leftInorderBegin = inorderBegin,
            leftInorderEnd = index,
            rightInorderBegin = index+1,
            rightInorderEnd = inorderEnd;

        let leftPreorderBegin = preorderBegin + 1,
            leftPreorderEnd = preorderBegin + 1 + index - inorderBegin,
            rightPreorderBegin = preorderBegin + 1 + index - inorderBegin,
            rightPreorderEnd = preorderEnd;

        root.left = traversal(preorder,leftPreorderBegin,leftPreorderEnd,inorder,leftInorderBegin,leftInorderEnd);
        root.right = traversal(preorder,rightPreorderBegin,rightPreorderEnd,inorder,rightInorderBegin,rightInorderEnd);
        return root;
    }
    if(preorder.length == 0 || inorder.length == 0) return null;
    return traversal(preorder,0,preorder.length,inorder,0,inorder.length)
};
// @lc code=end

