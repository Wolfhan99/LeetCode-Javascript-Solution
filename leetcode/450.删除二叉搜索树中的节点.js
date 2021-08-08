/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root === null) return root;
    if(root.val == key){
        // 如果左右节点都为空，直接返回空节点，这种情况已经包含在了
        // 下面几种情况中，不用单独列出
        if(root.left === null){
            return root.right
        }
        else if(root.right === null){
            return root.left
        }
        else{
            let cur = root.right; // 记录当前删除节点的右孩子节点
            while(cur.left){
                cur = cur.left; //遍历寻找右孩子节点的最左节点
            }
            cur.left = root.left; // 将要删除节点的左子树放在这个最左节点的左节点
            // let tmp = root;
            root = root.right; // 将删除节点的右节点返回
            return root;
        }
    }
    if(root.val > key) root.left = deleteNode(root.left, key);
    if(root.val < key) root.right = deleteNode(root.right, key);
    return root;
};
// @lc code=end

