# @before-stub-for-debug-begin
from python3problem113 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=113 lang=python3
#
# [113] 路径总和 II
#
# https://leetcode-cn.com/problems/path-sum-ii/description/
#
# algorithms
# Medium (62.52%)
# Likes:    566
# Dislikes: 0
# Total Accepted:    171.6K
# Total Submissions: 273.8K
# Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
#
# 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
# 
# 叶子节点 是指没有子节点的节点。
# 
# 
# 
# 
# 
# 示例 1：
# 
# 
# 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
# 输出：[[5,4,11,2],[5,8,4,5]]
# 
# 
# 示例 2：
# 
# 
# 输入：root = [1,2,3], targetSum = 5
# 输出：[]
# 
# 
# 示例 3：
# 
# 
# 输入：root = [1,2], targetSum = 0
# 输出：[]
# 
# 
# 
# 
# 提示：
# 
# 
# 树中节点总数在范围 [0, 5000] 内
# -1000 
# -1000 
# 
# 
# 
# 
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        path = []
        res = []
        def dfs(root,target,path):
            if not root:
                return
            if not root.left and not root.right and target == root.val:
                path.append(root.val)
                res.append(path[:])
            dfs(root.left, target - root.val, path+[root.val])
            dfs(root.right, target - root.val, path+[root.val])
        dfs(root, targetSum, path)
        return res
        
# @lc code=end

