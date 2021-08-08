/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // return dfs(nums, 0, nums.length-1)
    if(nums.length === 0) return null;
    const mid = nums.length >> 1;
    const root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;

};
var dfs = (nums, l, h) => {
    if(l > h){
        return null;
    }
    let mid = Math.ceil(l + (h - l) / 2);
    let root = new TreeNode(nums[mid])
    root.left = dfs(nums, l, mid-1);
    root.right = dfs(nums,mid+1, h);
    return root;
}
// @lc code=end

