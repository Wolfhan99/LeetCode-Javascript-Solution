/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
    const hash = new Map();
    const traversal = (node) => {
        if(node === null) return;
        traversal(node.left);
        if(!hash.has(node.val)) {
            hash.set(node.val, 1);
        }else{
            hash.set(node.val,hash.get(node.val)+1);
        }
        traversal(node.right);
    }
    traversal(root);

    const res = [];
    let freq = 0;
    for(const key of hash.keys()){
        const count = hash.get(key);
        if(count > 0){
            if(count > freq){
                freq = count;
                res.splice(0);
                res.push(key);
            }
            else if(count === freq){
                res.push(key);
            }
        }
    }
    return res;
    
    
    
};
// @lc code=end

