#
# @lc app=leetcode.cn id=93 lang=python3
#
# [93] 复原 IP 地址
#
# https://leetcode-cn.com/problems/restore-ip-addresses/description/
#
# algorithms
# Medium (53.52%)
# Likes:    653
# Dislikes: 0
# Total Accepted:    141.6K
# Total Submissions: 264K
# Testcase Example:  '"25525511135"'
#
# 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
# 
# 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
# 
# 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
# 和 "192.168@1.1" 是 无效 IP 地址。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：s = "25525511135"
# 输出：["255.255.11.135","255.255.111.35"]
# 
# 
# 示例 2：
# 
# 
# 输入：s = "0000"
# 输出：["0.0.0.0"]
# 
# 
# 示例 3：
# 
# 
# 输入：s = "1111"
# 输出：["1.1.1.1"]
# 
# 
# 示例 4：
# 
# 
# 输入：s = "010010"
# 输出：["0.10.0.10","0.100.1.0"]
# 
# 
# 示例 5：
# 
# 
# 输入：s = "101023"
# 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
# 
# 
# 
# 
# 提示：
# 
# 
# 0 
# s 仅由数字组成
# 
# 
#

# @lc code=start
from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        res = []
        # 定义回溯函数
        def dfs(subRes, start):
            if len(subRes) == 4 and start == len(s):
                res.append(".".join(subRes))
                return
            
            if len(subRes) == 4 and start < len(s):
                return
            
            for i in range(1,4):
                if start + i - 1 >= len(s):
                    return # 超过要切的长度越界了，不能切
                if i!=1 and s[start] == "0": # 开头不能为0，不能有前导0
                    return 
                ss = s[start:start+i]
                if i == 3 and int(ss) > 255:
                    return

                subRes.append(ss)
                dfs(subRes, start+i)
                subRes.pop()
        dfs([], 0)
        return res
# @lc code=end

