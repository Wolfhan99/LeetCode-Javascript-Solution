#
# @lc app=leetcode.cn id=85 lang=python3
#
# [85] 最大矩形
#
# https://leetcode-cn.com/problems/maximal-rectangle/description/
#
# algorithms
# Hard (51.60%)
# Likes:    1027
# Dislikes: 0
# Total Accepted:    94.8K
# Total Submissions: 183.7K
# Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
#
# 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：matrix =
# [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
# 输出：6
# 解释：最大矩形如上图所示。
# 
# 
# 示例 2：
# 
# 
# 输入：matrix = []
# 输出：0
# 
# 
# 示例 3：
# 
# 
# 输入：matrix = [["0"]]
# 输出：0
# 
# 
# 示例 4：
# 
# 
# 输入：matrix = [["1"]]
# 输出：1
# 
# 
# 示例 5：
# 
# 
# 输入：matrix = [["0","0"]]
# 输出：0
# 
# 
# 
# 
# 提示：
# 
# 
# rows == matrix.length
# cols == matrix[0].length
# 0 
# matrix[i][j] 为 '0' 或 '1'
# 
# 
#

# @lc code=start
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if len(matrix) == 0:
            return 0
        res = 0
        m,n =len(matrix), len(matrix[0])
        heights = [0] * n
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '0':
                    heights[j] = 0
                else:
                    heights[j] += 1
            res = max(res, self.largeRctangleArea(heights))
        return res
    
    def largeRctangleArea(self, heights):
        heights = [0] + heights + [0]
        stack = [0]
        res = 0
        for i in range(len(heights)):
            while heights[i] < heights[stack[-1]]:
                curHeight = heights[stack.pop()]
                curWidth = i - stack[-1] - 1
                res = max(res, curHeight * curWidth)
            stack.append(i)
        return res

        # for i in range(len(heights)):
        #     while stack and heights[i] < heights[stack[-1]]:
        #         s = stack.pop()
        #         res = max(res, heights[s] * ((i - stack[-1] - 1) if stack else i))
        #     stack.append(i)
        # return res

# @lc code=end

