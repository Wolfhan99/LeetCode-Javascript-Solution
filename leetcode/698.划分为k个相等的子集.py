#
# @lc app=leetcode.cn id=698 lang=python3
#
# [698] 划分为k个相等的子集
#
# https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/description/
#
# algorithms
# Medium (44.37%)
# Likes:    414
# Dislikes: 0
# Total Accepted:    28.8K
# Total Submissions: 64.7K
# Testcase Example:  '[4,3,2,3,5,2,1]\n4'
#
# 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
# 
# 示例 1：
# 
# 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
# 输出： True
# 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
# 
# 
# 
# 提示：
# 
# 
# 1 <= k <= len(nums) <= 16
# 0 < nums[i] < 10000
# 
# 
#

# @lc code=start
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        nums.sort()
        n = len(nums)
        visited = [False] * n

        if k > n or sum(nums) % k!=0:
            return False
        
        target = sum(nums) / k

        def recur(nums, curr, curr_sum, visited, K):
            if K == 0:
                return True
            
            if curr_sum == target:
                return recur(nums, 0, 0, visited, K-1)
            
            for i in range(curr, n):
                if visited[i] == True:
                    continue

                visited[i] = True
                curr_sum+=nums[i]
                if recur(nums, i, curr_sum, visited, K):
                    return True
                visited[i] = False
                curr_sum-=nums[i]
            return False
        
        return recur(nums, 0, 0, visited, k)

# @lc code=end

