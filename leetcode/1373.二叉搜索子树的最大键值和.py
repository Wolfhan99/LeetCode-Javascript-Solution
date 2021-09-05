#
# @lc app=leetcode.cn id=1373 lang=python3
#
# [1373] 二叉搜索子树的最大键值和
#
# https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/description/
#
# algorithms
# Hard (39.58%)
# Likes:    55
# Dislikes: 0
# Total Accepted:    6.5K
# Total Submissions: 16.4K
# Testcase Example:  '[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]'
#
# 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。
# 
# 二叉搜索树的定义如下：
# 
# 
# 任意节点的左子树中的键值都 小于 此节点的键值。
# 任意节点的右子树中的键值都 大于 此节点的键值。
# 任意节点的左子树和右子树都是二叉搜索树。
# 
# 
# 
# 
# 示例 1：
# 
# 
# 
# 
# 输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
# 输出：20
# 解释：键值为 3 的子树是和最大的二叉搜索树。
# 
# 
# 示例 2：
# 
# 
# 
# 
# 输入：root = [4,3,null,1,2]
# 输出：2
# 解释：键值为 2 的单节点子树是和最大的二叉搜索树。
# 
# 
# 示例 3：
# 
# 
# 输入：root = [-4,-2,-5]
# 输出：0
# 解释：所有节点键值都为负数，和最大的二叉搜索树为空。
# 
# 
# 示例 4：
# 
# 
# 输入：root = [2,1,3]
# 输出：6
# 
# 
# 示例 5：
# 
# 
# 输入：root = [5,4,8,3,null,6,3]
# 输出：7
# 
# 
# 
# 
# 提示：
# 
# 
# 每棵树有 1 到 40000 个节点。
# 每个节点的键值在 [-4 * 10^4 , 4 * 10^4] 之间。
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
    def maxSumBST(self, root: TreeNode) -> int:
        self.maxSum = float('-inf')
        def traverse(root):
            if root is None:
                # 返回一个长度为4的数组，res[0]为以root为根的二叉树是否是BST
                # root[1]记录以root为根二叉树所有节点的最小值
                # root[2]记录以root为根二叉树所有节点的最大值
                # root[3]记录以root为根的二叉树所有节点值之和
                return [1, float('inf'), float('-inf'), 0] 
            
            left = traverse(root.left)
            right = traverse(root.right)

            res = [0] * 4
            # 判断是否当前节点为根是否是二叉树
            if left[0] == 1 and right[0] == 1 and root.val > left[2] and root.val < right[1]:
                res[0] = 1
                res[1] = min(left[1], root.val)
                res[2] = max(right[2], root.val)
                res[3] = left[3] + right[3] + root.val
                self.maxSum = max(self.maxSum, res[3])
            else:
                res[0] = 0
            return res
        
        return traverse(root)[-1]
        

# @lc code=end

