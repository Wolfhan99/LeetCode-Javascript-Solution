class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def dfs(board, chars, visited, i, j, start):
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or chars[start] != board[i][j] or visited[i][j]:
                return
