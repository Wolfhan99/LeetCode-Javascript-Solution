# @before-stub-for-debug-begin
from python3problem84 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] 柱状图中最大的矩形
#
# https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
#
# algorithms
# Hard (43.12%)
# Likes:    1464
# Dislikes: 0
# Total Accepted:    166.7K
# Total Submissions: 386.5K
# Testcase Example:  '[2,1,5,6,2,3]'
#
# 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
# 
# 求在该柱状图中，能够勾勒出来的矩形的最大面积。
# 
# 
# 
# 示例 1:
# 
# 
# 
# 
# 输入：heights = [2,1,5,6,2,3]
# 输出：10
# 解释：最大的矩形为图中红色区域，面积为 10
# 
# 
# 示例 2：
# 
# 
# 
# 
# 输入： heights = [2,4]
# 输出： 4
# 
# 
# 
# 提示：
# 
# 
# 1 
# 0 
# 
# 
#

# @lc code=start
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        size = len(heights)
        res = 0
        heights = [0] + heights + [0]
        # 先放入哨兵节点，在循环中不用做非空判断
        stack = [0] 
        size+=2

        for i in range(1, size):
            while heights[i] < heights[stack[-1]]:
                curHeight = heights[stack.pop()]
                curWidth = i - stack[-1] - 1
                res = max(res, curHeight * curWidth)
            stack.append(i)
        return res

# @lc code=end

