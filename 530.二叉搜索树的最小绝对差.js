/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function(root) {
    let arr = [];
    const traversal = (root) => {
        if(!root) return;
        traversal(root.left);
        arr.push(root.val);
        traversal(root.right);
    }
    traversal(root);
    if(arr.length<2) return 0;
    let res = Number.POSITIVE_INFINITY;
    for(let i=1;i<arr.length;i++){
        res = Math.min(res, arr[i]-arr[i-1]);
        // console.log(res)
    }
    return res;
};
// @lc code=end

