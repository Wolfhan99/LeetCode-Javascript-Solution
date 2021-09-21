# @before-stub-for-debug-begin
from python3problem447 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=447 lang=python3
#
# [447] 回旋镖的数量
#
# https://leetcode-cn.com/problems/number-of-boomerangs/description/
#
# algorithms
# Medium (60.42%)
# Likes:    166
# Dislikes: 0
# Total Accepted:    26.8K
# Total Submissions: 42.8K
# Testcase Example:  '[[0,0],[1,0],[2,0]]'
#
# 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组
# ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
#
# 返回平面上所有回旋镖的数量。
#
#
# 示例 1：
#
#
# 输入：points = [[0,0],[1,0],[2,0]]
# 输出：2
# 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
#
#
# 示例 2：
#
#
# 输入：points = [[1,1],[2,2],[3,3]]
# 输出：2
#
#
# 示例 3：
#
#
# 输入：points = [[1,1]]
# 输出：0
#
#
#
#
# 提示：
#
#
# n == points.length
# 1
# points[i].length == 2
# -10^4 i, yi
# 所有点都 互不相同
#
#
#

# @lc code=start
import collections


class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        n = len(points)
        if n <= 2:
            return 0

        ans = 0
        points.sort(key=lambda a: (a[0], a[1]))

        cnt = collections.defaultdict(int)
        for i in range(n):
            cnt.clear()
            for j in range(n):
                if i != j:
                    dis = (points[i][0] - points[j][0]) ** 2 + \
                          (points[i][1] - points[j][1]) ** 2
                    cnt[dis] += 1
            for m in cnt.values():
                ans += m*(m-1)
        return ans
# @lc code=end
