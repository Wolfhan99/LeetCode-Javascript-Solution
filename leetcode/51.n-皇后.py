#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N 皇后
#
# https://leetcode-cn.com/problems/n-queens/description/
#
# algorithms
# Hard (73.85%)
# Likes:    984
# Dislikes: 0
# Total Accepted:    145.8K
# Total Submissions: 197.3K
# Testcase Example:  '4'
#
# n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
# 
# 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
# 
# 
# 
# 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
# 
# 
# 
# 示例 1：
# 
# 
# 输入：n = 4
# 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
# 解释：如上图所示，4 皇后问题存在两个不同的解法。
# 
# 
# 示例 2：
# 
# 
# 输入：n = 1
# 输出：[["Q"]]
# 
# 
# 
# 
# 提示：
# 
# 
# 1 
# 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
# 
# 
# 
# 
#

# @lc code=start
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        board = ['.'*n]*n
        
        # isValid函数，判断合法否
        def isValid(board, row, col):
            n = len(board)
            # 检查列是否有皇后互相冲突
            for i in range(n):
                if board[i][col] == 'Q':
                    return False 
            # 检查右上方是否有皇后互相冲突
            for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
                if board[i][j] == 'Q':
                    return False
            # 检查左上方是否有皇后互相冲突
            for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
                if board[i][j] == 'Q':
                    return False
            return True

        def backtrack(board, row):
            # 满足结束条件
            if row == len(board): 
                res.append(board[:])
                return
            n = len(board[row])
            for col in range(n):
                if not isValid(board, row, col):
                    continue
                # 做选择
                # board[row][col] = 'Q'
                board[row] = '.'*col + 'Q' + '.'*(n-col-1)
                # 进入下一行决策
                backtrack(board, row+1)
                # 撤销选择
                # board[row][col] = '.'
                board[row] = '.'*n

        backtrack(board, 0)
        return res

'''
python 对于字符串是无法通过索引直接修改的，通过切片的方式来达到修改的目的。
chessboard[row] = '.'*col + 'Q' + '.'*(n-col-1)

作者：pinkman-r
链接：https://leetcode-cn.com/problems/n-queens/solution/python3hui-su-suan-fa-yi-li-jie-bian-che-f9mx/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
'''
# 决策树的每一层表示棋盘上的每一行；每个节点可以做出的选择是，在该行的任意一列放置一个皇后。

# // 路径：board 中小于 row 的那些行都已经成功放置了皇后
# // 选择列表：第 row 行的所有列都是放置皇后的选择
# // 结束条件：row 超过 board 的最后一行


# @lc code=end

