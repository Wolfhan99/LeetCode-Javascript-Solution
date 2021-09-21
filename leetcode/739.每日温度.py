#
# @lc app=leetcode.cn id=739 lang=python3
#
# [739] 每日温度
#
# https://leetcode-cn.com/problems/daily-temperatures/description/
#
# algorithms
# Medium (67.84%)
# Likes:    874
# Dislikes: 0
# Total Accepted:    207.1K
# Total Submissions: 305.1K
# Testcase Example:  '[73,74,75,71,69,72,76,73]'
#
# 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
# 
# 示例 1:
# 
# 
# 输入: temperatures = [73,74,75,71,69,72,76,73]
# 输出: [1,1,4,2,1,1,0,0]
# 
# 
# 示例 2:
# 
# 
# 输入: temperatures = [30,40,50,60]
# 输出: [1,1,1,0]
# 
# 
# 示例 3:
# 
# 
# 输入: temperatures = [30,60,90]
# 输出: [1,1,0]
# 
# 
# 
# 提示：
# 
# 
# 1 
# 30 
# 
# 
#

# @lc code=start
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        '''
        单调栈的使用情况：
        通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素位置，就可以
        想到单调栈
        三种情况
        1. 当前遍历的元素T[i]小于栈顶元素T[st[-1]]的情况
        2. 当前遍历的元素T[i]等于栈顶元素T[st[-1]]的情况
        3. 当前遍历的元素T[i]大于栈顶元素T[st[-1]]的情况

        '''
        
        stack = []
        result = [0] * len(temperatures)
        stack.append(0)
        for i in range(1, len(temperatures)):
            if temperatures[i] < temperatures[stack[-1]]:
                stack.append(i)
            elif temperatures[i] == temperatures[stack[-1]]:
                stack.append[i]
            else:
                while stack and temperatures[i] > temperatures[stack[-1]]:
                    result[stack[-1]] = i - stack[-1]
                    stack.pop()
                stack.append(i)
        return result

# @lc code=end

