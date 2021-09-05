# @before-stub-for-debug-begin
from python3problem652 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=652 lang=python3
#
# [652] 寻找重复的子树
#
# https://leetcode-cn.com/problems/find-duplicate-subtrees/description/
#
# algorithms
# Medium (56.98%)
# Likes:    299
# Dislikes: 0
# Total Accepted:    30.2K
# Total Submissions: 53K
# Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
#
# 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
# 
# 两棵树重复是指它们具有相同的结构以及相同的结点值。
# 
# 示例 1：
# 
# ⁠       1
# ⁠      / \
# ⁠     2   3
# ⁠    /   / \
# ⁠   4   2   4
# ⁠      /
# ⁠     4
# 
# 
# 下面是两个重复的子树：
# 
# ⁠     2
# ⁠    /
# ⁠   4
# 
# 
# 和
# 
# ⁠   4
# 
# 
# 因此，你需要以列表的形式返回上述重复子树的根结点。
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
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        import collections
        dict = collections.defaultdict()
        res = []
        def dfs(root):
            if not root:
                return "#"
            left = str(dfs(root.left))
            right = str(dfs(root.right))

            subTree = left + ',' + right + ',' + str(root.val)
            # 多次重复只加入结果一次
            if dict[subTree] == 1:
                res.append(root)
            # 给子树对应的出现次数加1
            dict[subTree]+=1
            return subTree
        dfs(root)
        return res
# @lc code=end

